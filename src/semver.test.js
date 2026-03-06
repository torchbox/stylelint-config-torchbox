import stylelint from 'stylelint';
import { describe, it, expect } from 'vitest';
import pkg from '../package.json' with { type: 'json' };

describe('semver - should those tests break, consider releasing a new major version of the package', () => {
    it('dependencies', () => {
        expect(pkg.dependencies).toMatchInlineSnapshot(`
          {
            "stylelint-config-standard-scss": "^17.0.0",
            "stylelint-declaration-strict-value": "^1.11.1",
            "stylelint-order": "^7.0.1",
          }
        `);
    });

    it('peerDependencies', () => {
        expect(pkg.peerDependencies).toMatchInlineSnapshot(`
          {
            "stylelint": "^17.0.0",
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
