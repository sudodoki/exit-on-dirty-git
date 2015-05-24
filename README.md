# Exit on dirty git

This module is based on [dity-git](https://www.npmjs.com/package/dirty-git) and just exposes binary that will exit with status code 1 in case there're some uncommitted changes in current working directory.

Can be useful as part of prepublish hook, possibly.

## Installation

If you're going to use it from [npm-scripts](https://docs.npmjs.com/misc/scripts) you don't need to install it globally and could just run

```
npm i exit-on-dirty-git
```

## Usage

Just call it whenever you need it.
Sample usage:
```
  "scripts": {
    "prepublish": "npm run build && exit-on-dirty-git",
  },

```