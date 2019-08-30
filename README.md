[![npm version](https://badge.fury.io/js/customize-cra-eslint-ignore.svg)](https://badge.fury.io/js/customize-cra-eslint-ignore)

# customize-cra-eslint-ignore

Enable `.eslintrc` support in [create-react-app](https://github.com/facebook/create-react-app) using [customize-cra](https://github.com/arackaf/customize-cra)


### Install
```
yarn add -D customize-cra-eslint-ignore
```

### Usage
config-overrides.js

```js
const {
  override
} = require('customize-cra');

const enableEslintIgnore = require('customize-cra-eslint-ignore');

module.exports = (config, env) => {
  config = override(
    enableEslintIgnore(),
    // ...other overrides
  )(config);
  return config;
};

```
