module.exports = function(grunt) {

	// this is where all the grunt configs will go
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json')

	}); // end of configuring the grun tasks

	// Load the plugin that provides the "grunt tasks" that you have installed like "cssmin" or "uglify"
	// grunt.loadNpmTasks('grunt-contrib-cssmin');

	// Now create task target for 'cssmin'
	// grunt.registerTask('buildcss', ['cssmin'])

	// A very basic default task.
	grunt.registerTask('default', 'Log some stuff.', function() {
		grunt.log.write('Logging some stuff...').ok();
	});
};