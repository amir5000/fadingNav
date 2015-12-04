module.exports = function(grunt) {
  require('jit-grunt')(grunt);

  grunt.initConfig({
    less: {
      development: {
        options: {
          yuicompress: true,
          optimization: 2,
          sourceMap:true
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
    cssmin: {
      build: {
        options: {
          sourceMap:true
        },
        files: {
          "style.min.css": "style.css"
        }
      }
    },
    watch: {
      styles: {
        files: ['less/*.less'], // which files to watch
        tasks: ['less', 'cssmin'],
        options: {
          nospawn: true
        }
      },
      js: {
        files: ['js/fadingNav.js'],
        tasks: ['uglify'],
        options: {
          nospawn: true
        }
      }
    }
  });

  grunt.registerTask('default', ['less', 'uglify', 'cssmin', 'watch']);
};
