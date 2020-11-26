const airbnbConfig = require('eslint-config-airbnb-base');
// @ts-ignore
// eslint-disable-next-line import/no-unresolved
const vuePlugin = require('eslint-plugin-vue/lib');
/**
 * @typedef {import('eslint').Linter.Config['rules']} Rules
 */

const airbnbConfigRules = airbnbConfig.extends.reduce((acc, moduleName) => {
  // eslint-disable-next-line global-require, import/no-dynamic-require
  const moduleRules = require(moduleName).rules;

  return [...acc, ...Object.entries(moduleRules)];
}, []);

const vueAirbnbRulesCollection = airbnbConfigRules
  .filter(([key]) => key in vuePlugin.rules);

const vueAirbnbRules = vueAirbnbRulesCollection.reduce((acc, [key, value]) => ({
  ...acc,
  [`vue/${key}`]: value,
}), {});

/** @type {Rules} */
module.exports = vueAirbnbRules;
