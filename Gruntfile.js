'use strict';

module.exports = function (grunt) {

    grunt.loadTasks('tasks');
    require('time-grunt')(grunt);
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    var chalk = require('chalk');

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        attention: {
            'example-server-started': {
                options: {
                    message: 'Server started: ' + chalk.underline.blue('http://localhost:8080/') + '',
                    borderColor: 'bgBlue'
                }
            },
            'example-deploy-complete': {
                options: {
                    message: chalk.green.bold('Files have been pushed to S3.') + '\n\n' + chalk.green('500 files uploaded successfully in 50 seconds.'),
                    border: 'double',
                    borderColor: 'bgGreen'
                }

            },
            templated: {
                options: {
                    message: 'This example is templated: <%= pkg.name %> by <%= pkg.author.name %>. It has no border setting.'
                }
            },
            'red-thin': {
                options: {
                    message: 'This is border: thin, borderColor: red.',
                    border: 'thin',
                    borderColor: 'red'
                }
            },

            'red-double': {
                options: {
                    message: 'This is border: double, borderColor: cyan.',
                    border: 'double',
                    borderColor: 'cyan'
                }
            },
            'blue-stacked': {
                options: {
                    message: 'This is border: stacked, borderColor: blue.',
                    border: 'stacked',
                    borderColor: 'blue'
                }
            },
            'long-magenta-thick': {
                options: {
                    message: 'This is really long text with a bgMagenta background. This is really long text with a bgMagenta background. This is really long text with a bgMagenta background. This is really long text with a bgMagenta background. This is really long text with a bgMagenta background. This is really long text with a bgMagenta background. This is really long text with a bgMagenta background. ',
                    borderColor: 'bgMagenta'
                }
            },
            'long-text-gray-comment': {
                options: {
                    message: "This is really long text with a 'comment' border that is gray. This is really long text with a 'comment' border that is gray. This is really long text with a 'comment' border that is gray. This is really long text with a 'comment' border that is gray. This is really long text with a 'comment' border that is gray. This is really long text with a 'comment' border that is gray. ",
                    border: 'comment',
                    borderColor: 'gray'
                }
            },
            'custom-box-!': {
                options: {
                    message: "This is using border: '!' and borderColor: 'bgRed'.",
                    border: '!',
                    borderColor: 'bgRed'
                }
            },
           'too damn long': {
               options: {
                   message: 'this_is_a_very_very_very_very_very_very_very_very_very_very_very_very_long_message',
                   border: 'double',
                   borderColor: 'bgGreen'
               }
           }
       },

        cafemocha: {
            test: {
                src: 'test/**/*.test.js',
                options: {
                    timeout: 10000,
                    ui: 'bdd',
                    reporter: 'spec'
                }
            }
        },
        jshint: {
            options: {
                node: true, // node's globals
                force: true,        // don't stop when there is an error
                maxerr: 10000,      // keep running no matter how many errors were found
                globalstrict: true, // allows 'use strict' with single quotes
                newcap: false       // allows  functions to be capitalized without New
            },
            gruntfile: {
                options: {
                },
                files: {
                    src: [
                        'Gruntfile.js'
                    ]
                }
            },
            tasks: {
                options: {
                    globals: {
                    }
                },
                files: {
                    src: [
                        'tasks/**/*.js'
                    ]
                }
            },
            test: {
                options: {
                    expr: true,         // allow expressions like foo.ok;
                    globals: {
                        it: true,
                        xit: true,
                        expect: true,
                        runs: true,
                        waits: true,
                        waitsFor: true,
                        beforeEach: true,
                        afterEach: true,
                        describe: true,
                        xdescribe: true
                    }
                },
                files: {
                    src: 'test/**/*.js'
                }
            }
        },
        watch: {
            test: {
                files: [
                    'Gruntfile.js',
                    'lib/**/*',
                    'test/**/*'
                ],
                tasks: ['test'],
                options: {
                    nospawn: true
                }
            }
        }
    });

    grunt.registerTask('test', [
        'jshint',
        'attention',
        'cafemocha'
    ]);

    grunt.registerTask('default', [
        'test'
    ]);

};
