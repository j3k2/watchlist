
module.exports = function(grunt) {



  grunt.initConfig({
    wiredep: {

      task: {
        src: ['views/_header.ejs']
      }
    },

    ngtemplates:  {
      app:        {
        src:      'templates/**/*.html',
        dest:     'template.js'
      }
    },

    // concat:   {
    //   app:    {
    //     src:  [ '**.js', '<%= ngtemplates.app.dest %>' ],
    //     dest: [ 'app.js' ]
    //   }
    // },


    injector: {
      options: {},
      local_dependencies: {
        files: {
          'views/_header.ejs': ['public/javascripts/**/*.js', 'public/stylesheets/*.css'],
        }
      }
    },



  })

  grunt.loadNpmTasks('grunt-injector');
  grunt.loadNpmTasks('grunt-wiredep');
  grunt.loadNpmTasks('grunt-angular-templates');

  grunt.registerTask('default', ['wiredep', 'injector', 'ngtemplates']);

};
