'use strict';

var generateBox = require('../lib/generate-message');

module.exports = function(grunt) {

    grunt.registerMultiTask('attention', 'Echo a message to the user', function() {

        var options = this.options({
            message: 'This is a test',
            border: false,
            borderColor: false
        });

        function displayMessage(message) {
            var messageToUse = message || options.message;
            grunt.log.writeln(generateBox(messageToUse, options.border, options.borderColor));
        }

        // message can be a promise
        if (options.message.then) {
            return options.then(displayMessage);
        }

        if (typeof options.message === 'function') {
            return displayMessage(options.message(this));
        }

        return displayMessage();

    });

};