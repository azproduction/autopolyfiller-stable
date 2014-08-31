var polyfill = require('polyfill');

var supportedFeatures = polyfill.agent.js;

/**
 * @param {Object} polyfills
 */
function support(polyfills) {
    Object.keys(polyfills).forEach(function (browser) {
        if (!supportedFeatures[browser]) {
            supportedFeatures[browser] = [];
        }

        supportedFeatures[browser].push.apply(supportedFeatures[browser], polyfills[browser]);
    });
}

// Extra polyfills
support(require('./data'));

module.exports = supportedFeatures;
