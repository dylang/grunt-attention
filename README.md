# grunt-attention [![Build Status](https://secure.travis-ci.org/dylang/grunt-attention.png?branch=master)](http://travis-ci.org/dylang/grunt-attention)

> Grab your users' attention with a highly visible message in the terminal

![files pushed](https://f.cloud.github.com/assets/51505/1282110/fd11ea48-2f6d-11e3-8aa3-099db5da6ac5.png)


## Getting Started

This plugin recommends Grunt `0.4.1` or newer.

## Installing

```bash
npm install grunt-attention --save-dev
```

Once that's done, add this line to your project's `Gruntfile.js`:

```js
grunt.loadNpmTasks('grunt-attention');
```

![server started](https://f.cloud.github.com/assets/51505/1282112/017bbcda-2f6e-11e3-9d36-8fadd1a7fa16.png)

## grunt-attention Options

```js
grunt.initConfig({
  message: {
    server: {
      options: {
        message: 'Server started: ' + chalk.blue.underline('http://<%= connect.hostname %>:<%= connect.port %>/') + '.',
        border: 'thin',
        borderColor: 'blue'
      }
    },
    error: {
      options: {
        message: 'There was an error: <%= error.message %>',
        border: '!',
        borderColor: 'red'
      }
    }

  }
});

// Load the task
grunt.loadNpmTasks('grunt-attention');
```

### Options

#### `message` _required_

Text to display.


#### `border` _optional_

Border style.

Included styles: `thin`, `double`, `stacked`, `comment`.

Single character repeated: Provide a single character and it will repeat it as the border such as `!` or `*`.

New style: Provide a 9-character string for all sides.  See `lib/borders.js` for examples.

#### `borderColor` _optional_

Color for the border.

Choices are: `black`, `red`, `green`, `yellow`, `blue`, `magenta`, `cyan`, `white`, `gray`,
`bgBlack`, `bgRed`, `bgGreen`, `bgYellow`, `bgBlue`, `bgMagenta`, `bgCyan`, `bgWhite`, `bgGray`.

Currently you can't set both the foreground and the background, that will be resolved in a future release.

## Tests
Run `grunt test` to lint and run the tests.

## Release History

* 0.0.1 - Oct 7, 2013 - First release!

## License

[LICENSE-MIT](MIT)