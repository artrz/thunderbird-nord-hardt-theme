# Thunderbird Nord Hardt Theme

An arctic, north-bluish dark, clean and elegant color scheme for **Thunderbird 128+**. Based on the [Nord Theme](https://www.nordtheme.com) pallette.

![Inbox](resources/1-inbox.png)

![Calendar](resources/2-calendar.png)

![Account](resources/3-account.png)

Theme generated using the [Thunderbird Theme Builder](https://github.com/artrz/thunderbird-theme-builder).

## Install

 1. [Download the latest release](https://github.com/artrz/thunderbird-nord-hardt-theme/releases) or [build it yourself](#build).
 2. Install it by clicking the cog in the Themes configuration section and selecting 'Install Add-on From File...'.

![Manual Install](resources/4-install-manual.png)

## Build

Install the required dependencies:

```sh
npm install
```

Generate the theme:

```sh
npm run build
```

The XPI file will be created inside `./build`

## Release Notes

See the [changelog](./CHANGELOG.md).

## Contributing

First of, thanks for your interest in helping out!

Lefthook is configured to automatically perform tasks on pre-commit and pre-push hooks. [Commitlint](https://commitlint.js.org/) is integrated as a github workflow to ensure consistent commit messages on PRs.

To install the git hooks in your repo clone run `npm run prepare`, this way, [the configured hooks](./lefthook.yml) will be automatically executed.

The PR commit messages will be linted using the default conventional [configuration](./.github/workflows/semantic-pull-request.yml).

## Versioning

Use `npm run bump` to increment the version and update the changelog and commit the changes.
To "undo" a bump, use `npm run debump [THE GENERATED TAG]` which undoes the commit and delete the tag.
Finally, run `npm run publish` to push the changes along the new tag and build the theme so it's ready to be uploaded.

## License

See the [license](./LICENSE.md).
