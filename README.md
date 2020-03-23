# ESLint Configuration for Unterschied & Macher GmbH

See https://eslint.org/docs/user-guide/getting-started for the basics of ESLint in general.

To use this preset/ruleset add the following to your configuration file:

```json
{
    "extends": "@uumacher/eslint-config"
}
```

## Additional info
Currently the configuration will print a warning if you use the following packages, because of the enormous extra bundle-size that they will probably cause:

### moment.js
Please use [date-fns](https://date-fns.org/) or [Luxon](https://moment.github.io/luxon/) instead!

### lodash
Please check if equivalent native methods exist (e.g. Array.* or Object.*) or use [lodash-es](https://www.npmjs.com/package/lodash-es) instead!