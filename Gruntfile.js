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
          "style.css": "style.less" // destination file and source file
        }
      }
    },
    uglify: {
      build: {
        files: {
          'fadingNav.min.js': ['fadingNav.js']
        }
      }
    },
    watch: {
      styles: {
        files: ['*.less'], // which files to watch
        tasks: ['less'],
        options: {
          nospawn: true
        }
      },
      js: {
        files: ['fadingNav.js'],
        tasks: ['uglify']
      }
    }
  });

  grunt.registerTask('default', ['less', 'watch', 'uglify']);
};
