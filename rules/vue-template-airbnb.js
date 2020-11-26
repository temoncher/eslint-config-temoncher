/* eslint-disable import/no-unresolved */
const airbnbConfig = require('eslint-config-airbnb-base');
// @ts-ignore
const vuePlugin = require('eslint-plugin-vue/lib');
// @ts-ignore
const vuePluginRecommended = require('eslint-plugin-vue/lib/configs/recommended');

const { resolveRules } = require('../utils/resolve-rules');

/**
 * @typedef {import('eslint').Linter.Config['rules']} Rules
 */

const vuePluginRulesNames = Object.keys(vuePlugin.rules);
const recommendedRules = resolveRules(vuePluginRecommended);
const prefixedairbnbConfigRules = Object.entries(resolveRules(airbnbConfig));
const vueAirbnbRulesCollection = prefixedairbnbConfigRules
  .filter(
    ([name]) => vuePluginRulesNames.includes(name) && !(name in recommendedRules),
  )
  .map(([name, value]) => /** @type{[string, any]} */([`vue/${name}`, value]));
const vueAirbnbRules = vueAirbnbRulesCollection.reduce((acc, [key, val]) => ({
  ...acc,
  [key]: val,
}), {});

/** @type {Rules} */
module.exports = vueAirbnbRules;
