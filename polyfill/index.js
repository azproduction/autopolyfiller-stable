var polyfill = require('polyfill'),
    fs = require('fs');

var polyfillsCode = polyfill.source;

// Scan souce folder for polyfills
fs.readdirSync(__dirname + '/source').forEach(function (fileName) {
    // Add lazy loader
    var polyfillName = fileName.replace(/\.js$/, '');
    polyfillsCode.__defineGetter__(polyfillName, function () {
        // Lazily load polyfill code
        var code = fs.readFileSync(__dirname + '/source/' + fileName, 'utf8');
        delete polyfillsCode[polyfillName];
        polyfillsCode[polyfillName] = code;

        return code;
    });
});

module.exports = polyfillsCode;
