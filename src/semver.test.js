import stylelint from 'stylelint';
import { describe, it, expect } from 'vitest';
import pkg from '../package.json' with { type: 'json' };

describe('semver - should those tests break, consider releasing a new major version of the package', () => {
    it('dependencies', () => {
        expect(pkg.dependencies).toMatchInlineSnapshot(`
          {
            "stylelint-config-standard-scss": "^16.0.0",
            "stylelint-declaration-strict-value": "^1.10.11",
            "stylelint-order": "^7.0.0",
          }
        `);
    });

    it('peerDependencies', () => {
        expect(pkg.peerDependencies).toMatchInlineSnapshot(`
          {
            "stylelint": "^16.23.1",
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
