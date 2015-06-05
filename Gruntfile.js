module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);
  grunt.initConfig({
    concat: {
      options: {
        sourceMap: true
      },
      dist: {
        files: [{
          src: 'lib/**',
          dest: 'dist/client.js'
        }]
      }
    },
    uglify: {
      dist: {
        options: {
          compress: true,
          mangle: false,
          sourceMap: true
        },
        files: [{
          src: 'dist/client.js',
          dest: 'dist/client.min.js'
        }]
      }
    }
  });
  grunt.registerTask('build', ['concat:dist', 'uglify:dist']);
}
