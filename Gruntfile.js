module.exports = function(grunt) {
  require('jit-grunt')(grunt);

  grunt.initConfig({
    less: {
      development: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2
        },
        files: {
          "style.css": "less/style.less" // destination file and source file
        }
      }
    },
    uglify: {
      build: {
        files: {
          'fadingNav.min.js': ['js/fadingNav.js']
        }
      }
    },
    watch: {
      styles: {
        files: ['less/*.less'], // which files to watch
        tasks: ['less'],
        options: {
          nospawn: true
        }
      },
      js: {
        files: ['js/fadingNav.js'],
        tasks: ['uglify']
      }
    }
  });

  grunt.registerTask('default', ['less', 'watch', 'uglify']);
};
