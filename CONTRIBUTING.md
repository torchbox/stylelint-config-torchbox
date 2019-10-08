# Contribution Guidelines

We welcome all support, whether on bug reports, feature requests, code, design, reviews, tests, documentation, and more.

## Development

### Install

> Clone the project on your computer, and install [Node](https://nodejs.org) and [nvm](https://github.com/creationix/nvm).

```sh
# Switch to the right version of Node.
nvm use
# Then, install all project dependencies.
npm install
```

Also take the time to integrate [Prettier](https://prettier.io/) and [ESLint](https://eslint.org/) with your code editor.

### Working on the project

> Everything mentioned in the installation process should already be done.

```sh
# Make sure you use the right node version.
nvm use
# View available commands with:
npm run
# Most used commands:
npm run test:watch
npm run lint
```

### Releasing a new version

- Make a new branch for the new release.
- Follow [stylelint’s semantic versioning policy](https://github.com/stylelint/stylelint/blob/master/docs/user-guide/semantic-versioning-policy.md) to determine what new version to create.
- Update the [CHANGELOG](CHANGELOG.md).
- If there are breaking changes, make sure to document them separately, and add any upgrade considerations.
- Update the version number in `package.json`, following semver.
- Make sure the documentation is up-to-date (`npm run build:docs`)
- Make a PR and squash merge it.
- Back on master with the PR merged, use `npm publish`.
- Head over to [https://www.npmjs.com/package/stylelint-config-torchbox](https://www.npmjs.com/package/stylelint-config-torchbox) and check that all is well.
- Finally, go to GitHub and create tag then a release for the new version, with the corresponding CHANGELOG entry as content.
- Done!
