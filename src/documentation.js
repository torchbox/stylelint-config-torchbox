'use strict';

/**
 * Prototype automated documentation generator for Stylelint configs.
 * Inspiration:
 * - https://github.com/sarbbottam/eslint-find-rules
 * - https://github.com/jfmengels/eslint-rule-documentation
 */

const fs = require('fs');
const path = require('path');
const stylelint = require('stylelint');

const config = require('../config');
const unusedConfig = require('./unused');

const unusedRules = Object.keys(unusedConfig.rules).filter(
    (name) => typeof config.rules[name] === 'undefined',
);

const linter = stylelint.createLinter({
    configFile: path.join(__dirname, '..', 'config.js'),
});

const generateList = (items) => {
    return `- ${items.join('\n- ')}`;
};

const pluginURLs = {
    'scss': (name) =>
        `https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/${name}/README.md`,
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

const README_PATH = path.join(__dirname, '..', 'README.md');
const README_MARKER = '<!-- Generated with: npm run build:docs -->';
const README = fs.readFileSync(README_PATH, 'utf-8').split(README_MARKER)[0];

linter.getConfigForFile().then((result) => {
    const { rules } = result.config;
    const enforcedRules = Object.keys(rules).filter(
        (name) => rules[name] !== null,
    );
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
            const value =
                Array.isArray(opts) && opts.length === 1 ? opts[0] : opts;

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

    const rulesDocumentation = `
### Rules

#### Custom rules

${generateList(formatRows(customConventions))}

#### Rules of \`stylelint-config-standard\`

${generateList(formatRows(inheritedConventions))}

#### Disabled rules

> Rules that are turned off on purpose.

<details>

${generateList(formatRows(disabled))}

</details>

#### Unused rules

> Rules that are not configured.

<details>

${generateList(formatRows(unused))}

</details>

## Contributing

See the [contribution guidelines](CONTRIBUTING.md) for guidance and setup instructions.
`;

    const newREADME = `${README}${README_MARKER}\n${rulesDocumentation}`;

    fs.writeFileSync(README_PATH, newREADME, 'utf-8');
    console.log('Updated README.md with rules docs:', rulesDocumentation);
});
