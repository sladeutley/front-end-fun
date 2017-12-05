module.exports = function(grunt) {
  grunt.initConfig({

  });

  require("matchdep")
    .filterDev("grunt-*")
    .forEach(grunt.loadNpmTasks);
  grunt.registerTask("default", []);
};
