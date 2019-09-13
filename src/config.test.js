const path = require('path');
const stylelint = require('stylelint');

jest.setTimeout(15000);

describe('config', () => {
    it('works', () => {
        return stylelint
            .lint({
                code:
                    'div.this #should .cause .issues:before { display: block !important; color: red; }',
                codeFilename: 'styles.css',
                configFile: path.join(__dirname, '..', 'config.js'),
            })
            .then((results) => {
                expect(results.results[0].warnings.length).toBe(6);
            });
    });
});
