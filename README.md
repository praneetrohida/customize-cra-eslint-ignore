# customize-cra-eslint-ignore

A library to enable `.eslintrc` support using [customize-cra](https://github.com/arackaf/customize-cra)


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
