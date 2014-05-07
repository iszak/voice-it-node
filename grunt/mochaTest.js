module.exports = {
  lib: {
    options: {
      ui: 'tdd',
      reporter: 'spec',
      bail: true
    },
    src: [
      'test/*.js',
      'test/**/*.js'
    ]
  },

  coverage: {
    options: {
      ui: 'tdd',
      reporter: 'html-cov',

      captureFile: 'test/coverage.html',
      quiet: true,

      bail: true
    },
    src: [
      'test/*.js',
      'test/**/*.js'
    ],
  }
}
