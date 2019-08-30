const enableEslintIgnore = () => (config: Record<string, any>) => {
  const eslintRule = config.module.rules.filter(
    (r: Record<string, any>) =>
      r.use &&
      r.use.some(
        (u: Record<string, any>) =>
          u.options && u.options.useEslintrc !== void 0
      )
  )[0];

  eslintRule.use[0].options.ignore = true;

  const rules = config.module.rules.map((r: Record<string, any>) =>
    r.use &&
    r.use.some(
      (u: Record<string, any>) => u.options && u.options.useEslintrc !== void 0
    )
      ? eslintRule
      : r
  );
  config.module.rules = rules;
  return config;
};

module.exports = enableEslintIgnore;
