// config-overrides.js
const webpack = require('webpack');

module.exports = function override(config, env) {
  // Add the necessary fallbacks for crypto and stream
  config.resolve.fallback = {
    ...config.resolve.fallback,
    crypto: require.resolve('crypto-browserify'),
    stream: require.resolve('stream-browserify'),
  };

  return config;
};
