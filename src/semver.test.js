const path = require('path');
const stylelint = require('stylelint');

const pkg = require('../package.json');

describe('semver - should those tests break, consider releasing a new major version of the package', () => {
    it('dependencies', () => {
        expect(pkg.dependencies).toMatchInlineSnapshot(`
            Object {
              "stylelint-a11y": "^1.2.3",
              "stylelint-config-prettier": "^8.0.2",
              "stylelint-config-standard": "^20.0.0",
              "stylelint-declaration-strict-value": "^1.6.1",
              "stylelint-order": "^4.1.0",
              "stylelint-scss": "^3.18.0",
            }
        `);
    });

    it('peerDependencies', () => {
        expect(pkg.peerDependencies).toMatchInlineSnapshot(`
            Object {
              "stylelint": "^13.0.0",
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
