# grunt-attention [![Build Status](https://secure.travis-ci.org/dylang/grunt-attention.png?branch=master)](http://travis-ci.org/dylang/grunt-attention)

> Display attention-grabbing messages in the terminal.

![server started](https://f.cloud.github.com/assets/51505/1282112/017bbcda-2f6e-11e3-9d36-8fadd1a7fa16.png)

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

## grunt-attention Options

```js
grunt.initConfig({
  attention: {
    connect: {
      options: {
        message: 'Server started: ' +
          chalk.underline.blue('http://<%= connect.hostname %>:<%= connect.port %>/'),
        borderColor: 'bgBlue'
    },
    s3: {
      options: {
        message: chalk.green.bold('Files have been pushed to S3.') +
            '\n\n' +
            chalk.green('<%= s3.count %> files uploaded successfully in <%= s3.timer %> seconds.'),
        border: 'double',
        borderColor: 'bgGreen'      }
    }

  }
});

// Load the task
grunt.loadNpmTasks('grunt-attention');
```

![files pushed](https://f.cloud.github.com/assets/51505/1282110/fd11ea48-2f6d-11e3-8aa3-099db5da6ac5.png)


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

## More examples

![examples](https://f.cloud.github.com/assets/51505/1282921/5cd6325a-2f7c-11e3-946a-b69f92a2180b.png)

## Tests
Run `grunt test` to lint and run the tests.

## Release History

* 0.0.1 - Oct 7, 2013 - First release!
* 0.0.2 - Oct 7, 2013 - Added examples to the doc, fixed a typo.
* 0.0.3 - Oct 26, 2013 - Fixed `main` in the `package.json`.
* 0.0.4 - Apr 11, 2014 - Move main to the lib
* 1.0.0 - Sep 9, 2014 - Avoid error if a message is longer than will fit in a single line and has no spaces.

## License

[LICENSE-MIT](MIT)
