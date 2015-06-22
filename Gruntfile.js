module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);
  grunt.initConfig({
    concat: {
      options: {
        sourceMap: true
      },
      dist: {
        files: [{
          src: "lib/**",
          dest: "dist/client.js"
        }]
      }
    },
    uglify: {
      dist: {
        options: {
          compress: true,
          mangle: true,
          sourceMap: true
        },
        files: [{
          src: "dist/client.js",
          dest: "dist/client.min.js"
        }]
      }
    },
    ngAnnotate: {
      dist: {
        options: {
          singleQuotes: true
        },
        files: [{
          src: "dist/client.js",
          dest: "dist/client.js"
        }]
      }
    }
  });
  grunt.registerTask('build', ["concat:dist", "ngAnnotate:dist", "uglify:dist"]);
}
