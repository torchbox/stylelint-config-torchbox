import stylelint from 'stylelint';
import { describe, it, expect } from 'vitest';
import scenarios from './scenarios.js';
import config from '../config.js';

const lintCode = async (code, syntax = 'css') => {
    const result = await stylelint.lint({
        code,
        codeFilename: syntax === 'scss' ? 'styles.scss' : 'styles.css',
        configFile: 'config.js',
    });
    return result.results[0].warnings;
};

describe('config', () => {
    it('works', () => {
        return stylelint
            .lint({
                code: 'div.this #should .cause .issues:before { display: block !important; color: red; }',
                codeFilename: 'styles.css',
                configFile: 'config.js',
            })
            .then((results) => {
                expect(results.results[0].warnings.length).toBe(7);
            });
    });

    // Generate tests from scenarios
    describe('scenarios', () => {
        Object.entries(scenarios).forEach(([rule, scenario]) => {
            it(rule, async () => {
                const warnings = await lintCode(scenario.code, scenario.syntax);
                const ruleWarnings = warnings.filter(
                    (warning) => warning.rule === rule,
                );

                expect(
                    ruleWarnings.map((warning) => warning.text),
                ).toMatchSnapshot();
            });
        });
    });

    it('has a scenario for every rule in config.js', async () => {
        // Dynamically import the config so the rules can be read
        const configRules = Object.keys(config.rules);
        const scenarioRules = Object.keys(scenarios);

        // Get the rules that are missing corresponding scenarios
        const missingScenarios = configRules.filter(
            (rule) => !scenarioRules.includes(rule),
        );

        expect(missingScenarios).toEqual([]);
    });
});
