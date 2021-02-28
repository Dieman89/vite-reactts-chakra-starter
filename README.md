# Vite + React + Typescript + Chakra + Cypress

A starter for React with Typescript with the fast Vite and the beautiful Chakra, tested with the powerful Cypress.

![Vite + React + Typescript + Chakra + Cypress Starter](/src/resources/images/screenshot.png)

I found out about Vite and I wanted to have a boilerplate for the technologies that I use. You can find more about these in the following links: [Vite](https://github.com/vitejs/vite), [React](https://reactjs.org/), [Typescript](https://www.typescriptlang.org/), [Chakra](https://chakra-ui.com/), [Cypress](https://www.cypress.io/).

## Features

### Aliases

This starter has configurations that enables aliases out of the box. Any folder inside `src` is automatically setup as an alias. It now has the following structure:

```
src
    pages
    resources
```

that generates the follow:

```
{
    '@pages': '${project_path}/src/pages'
    '@resources': '${project_path}/src/resources'
}
```

### Editorconfig

I have decided to include my `.editorconfig` file to help spread this nice tool. This file defines coding styles mantaining it consistent between multiple developers and their various Text Editors and IDEs.

Learn more about [Editorconfig](https://editorconfig.org/).

## Installation

Clone the repo and run `yarn install`

## Start

After the successfull installation of the packages: `yarn start`

## Tests

You can build tests with Cypress. I wrote a small test to see if it's enabled. You can run it with `yarn test`

## Contact

Feel free to contact me on [Twitter](https://twitter.com/dieman_) or [Discord](https://discordapp.com/users/160512379510194187)
