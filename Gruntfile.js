module.exports = function (grunt) {
    grunt.initConfig({
        bump: {
            options: {
                files: ['bower.json', 'package.json', 'juicy-draggable.html'],
                commit: true,
                commitMessage: '%VERSION%',
                commitFiles: ['bower.json', 'package.json', 'juicy-draggable.html'],
                createTag: true,
                tagName: '%VERSION%',
                tagMessage: 'Version %VERSION%',
                push: false,
                globalReplace: false,
                prereleaseName: false,
                regExp: false
            }
        }
    });
    grunt.loadNpmTasks('grunt-bump');
};
