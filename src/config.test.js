import stylelint from 'stylelint';
import { describe, it, expect } from 'vitest';

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
});
