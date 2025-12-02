import stylelint from 'stylelint';
import { describe, it, expect } from 'vitest';
import pkg from '../package.json' with { type: 'json' };

describe('semver - should those tests break, consider releasing a new major version of the package', () => {
    it('dependencies', () => {
        expect(pkg.dependencies).toMatchInlineSnapshot(`
            {
              "stylelint-config-standard-scss": "^10.0.0",
              "stylelint-declaration-strict-value": "^1.9.2",
              "stylelint-order": "^6.0.3",
            }
        `);
    });

    it('peerDependencies', () => {
        expect(pkg.peerDependencies).toMatchInlineSnapshot(`
            {
              "stylelint": "^15.0.0",
            }
        `);
    });

    it('config contents', async () => {
        const config = await stylelint.resolveConfig('.', {
            configFile: 'config.js',
        });
        expect(config.rules).toMatchSnapshot();
    });
});
