const path = require('path');
/* eslint-disable global-require, import/no-dynamic-require */
/**
 * @typedef {import('eslint').Linter.Config} LinterConfig
 */

/**
 * @param {Pick<LinterConfig, 'extends' | 'rules'>} config
 * @returns {LinterConfig['rules']}
 */
const resolveRules = (config) => {
  if (!config.extends) {
    return config.rules;
  }

  if (typeof config.extends === 'string') {
    /** @type {LinterConfig['rules']} */
    const moduleRules = resolveRules(require(config.extends));

    return {
      ...moduleRules,
      ...config.rules,
    };
  }

  /** @type {LinterConfig['rules']} */
  const extensionsRules = config.extends.reduce((acc, nestedConfig) => {
    const nestedConfigPath = path.resolve(nestedConfig);
    const nestedConfigRules = resolveRules(require(nestedConfigPath));

    return {
      ...acc,
      ...nestedConfigRules,
    };
  }, {});

  return {
    ...extensionsRules,
    ...config.rules,
  };
};

exports.resolveRules = resolveRules;
