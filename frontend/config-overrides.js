const path = require('path');

module.exports = function override(config, env) {
    // Add the necessary polyfills
    config.resolve.fallback = {
        crypto: require.resolve('crypto-browserify'),
        stream: require.resolve('stream-browserify'),
    };

    return config;
};
