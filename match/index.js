var scannerFactory = require('autopolyfiller-helpers').scannerFactory;

var matchers = [
    require('./matchers/constructor'),
    require('./matchers/method'),
    require('./matchers/static'),
    require('./matchers/global')
].map(scannerFactory);

/**
 * @param {Object} ast
 * @returns {String[]} list of polyfills in this ast
 */
function test(ast) {
    return matchers.reduce(function (polyfills, matcher) {
        return polyfills.concat(matcher.test(ast));
    }, []);
}

module.exports = test;
