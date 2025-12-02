/* global console */
/**
 * Automated documentation generator for Stylelint configs.
 * Inspiration:
 * - https://github.com/sarbbottam/eslint-find-rules
 * - https://github.com/jfmengels/eslint-rule-documentation
 */

import path from 'node:path';
import { readFile, writeFile } from 'node:fs/promises';
import stylelint from 'stylelint';

import config from '../config.js';
import unusedConfig from './unused.js';

const unusedRules = Object.keys(unusedConfig.rules).filter(
    (name) => typeof config.rules[name] === 'undefined',
);

const generateList = (items) => {
    return `- ${items.join('\n- ')}`;
};

const pluginURLs = {
    'scss': (name) =>
        `https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/${name}/README.md`,
    'order': (name) =>
        `https://github.com/hudochenkov/stylelint-order/blob/master/rules/${name}/README.md`,
    'scale-unlimited': () =>
        'https://github.com/AndyOGo/stylelint-declaration-strict-value',
};

const getRuleURL = (name) => {
    const isPluginRule = name.includes('/');

    if (!isPluginRule) {
        return `https://stylelint.io/user-guide/rules/${name}/`;
    }

    const [pluginPrefix, ruleName] = name.split('/');
    return pluginURLs[pluginPrefix](ruleName);
};

const formatRuleName = (name) => {
    return `[\`${name}\`](${getRuleURL(name)})`;
};

const formatRuleValue = (value) => {
    let printableValue;

    if (typeof value === 'string' || typeof value === 'number') {
        printableValue = value;
    } else {
        printableValue = JSON.stringify(value)
            .replace(/[[\]"{}]/g, '')
            .replace(/([:,])/g, '$1 ');
    }

    return `\`${printableValue}\``;
};

const formatRows = (rules) => {
    return rules.reduce((print, row) => {
        const newRows = [];

        if (row[1]) {
            newRows.push([`${row[0]}: ${row[1]}`]);
        } else {
            newRows.push(row);
        }

        return print.concat(newRows);
    }, []);
};

const README_PATH = path.join('README.md');
const RULES_PATH = path.join('src', 'rules.md');
const README_MARKER = '<!-- Generated with: npm run build:docs -->';
const readmeFile = await readFile(README_PATH, 'utf-8');
const README = readmeFile.split(README_MARKER)[0];

const resolvedConfig = await stylelint.resolveConfig('.', {
    configFile: 'config.js',
});
const { rules } = resolvedConfig;
const enforcedRules = Object.keys(rules).filter((name) => rules[name] !== null);
const customRules = Object.keys(config.rules).filter(
    (name) => rules[name] !== null,
);

const customConventions = customRules.map((name) => {
    const opts = rules[name];
    const value = Array.isArray(opts) && opts.length === 1 ? opts[0] : opts;
    const row = [formatRuleName(name)];

    if (value !== true) {
        row.push(formatRuleValue(value));
    }

    return row;
});

const inheritedConventions = enforcedRules
    .filter((name) => !customRules.includes(name))
    .map((name) => {
        const opts = rules[name];
        const value = Array.isArray(opts) && opts.length === 1 ? opts[0] : opts;

        const row = [formatRuleName(name)];

        if (value !== true) {
            row.push(formatRuleValue(value));
        }

        return row;
    });

const disabled = Object.keys(rules)
    .filter((name) => rules[name] === null)
    .map((name) => [formatRuleName(name)]);

const unused = unusedRules.map((name) => [formatRuleName(name)]);

const readmeRules = `
### Rules

> For the full list of enabled, disabled, and unused rules, view [src/rules.md](src/rules.md).

#### Custom rules

${generateList(formatRows(customConventions))}

## Inherited rules

${generateList(formatRows(inheritedConventions.sort()))}

## Contributing

See the [contribution guidelines](CONTRIBUTING.md) for guidance and setup instructions.
`;

const fullRules = `
# Rules

## Custom rules

${generateList(formatRows(customConventions))}

## Inherited rules

${generateList(formatRows(inheritedConventions).sort())}

## Disabled rules

> Rules that are turned off on purpose.

${generateList(formatRows(disabled).sort())}

## Unused rules

> Rules that are not configured, either because they aren’t relevant for us, or we decided they are too opinionated, or we haven’t had the chance to properly review them yet.

${generateList(formatRows(unused).sort())}
`;

const newREADME = `${README}${README_MARKER}\n${readmeRules}`;
const newRulesDocs = `${README_MARKER}\n${fullRules}`;

await writeFile(README_PATH, newREADME, 'utf-8');
await writeFile(RULES_PATH, newRulesDocs, 'utf-8');

console.log('Updated README.md with rules docs');
console.log('Updated rules.md with full rules docs:', newRulesDocs);
