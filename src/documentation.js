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

const pkg = require('../package.json');
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

const pluginDependencies = Object.keys(pkg.dependencies).filter(
    (name) =>
        name.startsWith('stylelint-') && !name.startsWith('stylelint-config'),
);

const pluginURLs = pluginDependencies.reduce((urls, name) => {
    const pluginPkg = require(`${name}/package.json`);

    urls[name] = pluginPkg.homepage;

    return urls;
}, {});

const pluginRules = pluginDependencies.reduce((rules, pluginName) => {
    let plugin = require(pluginName);
    plugin = plugin.default || plugin;

    if (Array.isArray(plugin)) {
        plugin.forEach((rule) => {
            rules[rule.ruleName] = pluginName;
        });
    } else {
        rules[plugin.ruleName] = pluginName;
    }

    return rules;
}, {});

const isPluginRule = (name) => name.includes('/');

const formatRuleName = (name) => {
    const url = isPluginRule(name)
        ? pluginURLs[pluginRules[name]]
        : `https://stylelint.io/user-guide/rules/${name}/`;

    return `[\`${name}\`](${url})`;
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
`;

    const newREADME = `${README}${README_MARKER}\n${rulesDocumentation}`;

    fs.writeFileSync(README_PATH, newREADME, 'utf-8');
    console.log('Updated README.md with rules docs:', rulesDocumentation);
});
