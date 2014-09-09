'use strict';
var chalk = require('chalk');
var wordwrap = require('wordwrap');
var borders = require('./borders');

function repeat(str, count) {
    if (count < 0) { return ''; }
    return new Array(count).join(str);
}

function attention(message, borderChoice, borderColor) {
    var border = borderChoice ? borders[borderChoice] || borderChoice
                    : borders.none;

    var styleFn = function(index){
        var str = border[index] || border[0];
        return chalk[chalk[borderColor] ? borderColor : 'blue'].bold(str);
    };

    var topLeft = styleFn(0),
        top = styleFn(1),
        topRight = styleFn(2),
        left = styleFn(3),
        space = ' ',
        right = styleFn(5),
        bottomLeft = styleFn(6),
        bottom = styleFn(7),
        bottomRight = styleFn(8);

    var screenWidth = (process.stdout.columns || 80) - 4;
    var formattedMessage = [ '' ].concat(wordwrap(screenWidth - 8)(message).trim().split('\n')).concat('');
    var message = '\n' +
        '  ' + topLeft + repeat(top, screenWidth - 2) + topRight + '\n' +
        formattedMessage.map(function(lineOfMessage){
            var lineOfMessageWidth = chalk.stripColor(lineOfMessage).length;
            return '  ' + left + space + space + lineOfMessage + repeat(space, screenWidth - 2 - lineOfMessageWidth - 2) + right;
        }).join('\n') + '\n' +
        '  ' + bottomLeft + repeat(bottom, screenWidth - 2) + bottomRight +
        '\n';

    return message;
}


module.exports = attention;
