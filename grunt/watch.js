module.exports = {
  gruntfile: {
    files: '<%= jshint.gruntfile.src %>',
    tasks: ['jshint:gruntfile']
  },

  lib: {
    files: '<%= jshint.lib.src %>',
    tasks: [
      'jshint:lib',
      'mochaTest:lib'
    ]
  },

  test: {
    files: '<%= jshint.test.src %>',
    tasks: [
      'mochaTest:lib'
    ]
  }
}
