const path = require('path');
const stylelint = require('stylelint');

const pkg = require('../package.json');

describe('semver - should those tests break, consider releasing a new major version of the package', () => {
    it('dependencies', () => {
        expect(pkg.dependencies).toMatchInlineSnapshot(`
            Object {
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
            Object {
              "stylelint": "^14.0.0",
            }
        `);
    });

    it('config contents', () => {
        const linter = stylelint.createLinter({
            configFile: path.join(__dirname, '..', 'config.js'),
        });
        return linter.getConfigForFile().then((result) => {
            expect(result.config.rules).toMatchSnapshot();
        });
    });
});
