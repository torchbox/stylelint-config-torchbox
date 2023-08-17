const path = require('path');
const stylelint = require('stylelint');

const pkg = require('../package.json');

describe('semver - should those tests break, consider releasing a new major version of the package', () => {
    it('dependencies', () => {
        expect(pkg.dependencies).toMatchInlineSnapshot(`
            {
              "stylelint-config-prettier": "^9.0.3",
              "stylelint-config-standard": "^24.0.0",
              "stylelint-declaration-strict-value": "^1.8.0",
              "stylelint-order": "^5.0.0",
              "stylelint-scss": "^4.0.0",
            }
        `);
    });

    it('peerDependencies', () => {
        expect(pkg.peerDependencies).toMatchInlineSnapshot(`
            {
              "stylelint": "^14.0.0",
            }
        `);
    });

    it('config contents', async () => {
        const config = await stylelint.resolveConfig(__filename, {
            configFile: path.join(__dirname, '..', 'config.js'),
        });
        expect(config.rules).toMatchSnapshot();
    });
});
