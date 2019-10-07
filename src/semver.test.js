const path = require('path');
const stylelint = require('stylelint');

const pkg = require('../package.json');

describe('semver - should those tests break, consider releasing a new major version of the package', () => {
    it('dependencies', () => {
        expect(pkg.dependencies).toMatchInlineSnapshot(`
            Object {
              "stylelint-a11y": "^1.2.1",
              "stylelint-config-prettier": "^5.2.0",
              "stylelint-config-standard": "^18.3.0",
              "stylelint-order": "^3.1.1",
              "stylelint-scss": "^3.10.0",
            }
        `);
    });

    it('peerDependencies', () => {
        expect(pkg.peerDependencies).toMatchInlineSnapshot(`
            Object {
              "stylelint": "^10.1.0",
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
