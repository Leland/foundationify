'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // configurable paths
    var config = {
        app: 'src',
        dist: 'assets'
    };

    grunt.initConfig({
        config: config,
        watch: {
            compass: {
                files: ['<%= config.app %>/styles/{,*/}*.{scss,sass}'],
                tasks: ['compass:live']
            },
            css: {
                files: ['.tmp/styles/*.css'],
                tasks: ['cssmin']
            },
            js: {
                files: ['<%= config.app %>/scripts/*.js'],
                tasks: ['concat:live']
            }
        },
        clean: {
            dist: [
                '.tmp',
                '<%= config.dist %>/*'
            ]
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: [
                'Gruntfile.js',
                '<%= config.app %>/scripts/{,*/}*.js'
            ]
        },
        compass: {
            options: {
                sassDir: '<%= config.app %>/styles',
                cssDir: '.tmp/styles',
                imagesDir: '<%= config.app %>/images',
                javascriptsDir: '<%= config.app %>/scripts',
                fontsDir: '<%= config.app %>/fonts',
                importPath: 'bower_components',
                relativeAssets: true
            },
            dist: {},
            live: {
                options: {
                    debugInfo: true
                }
            }
        },
        uglify: {
            dist: {
                files: {
                    '<%= config.dist %>/modernizr.js': [
                        'bower_components/foundation/js/vendor/modernizr.js'
                    ],
                    '<%= config.dist %>/main.js': [
                        'bower_components/foundation/js/vendor/jquery.js',
                        'bower_components/foundation/js/foundation/foundation.js',
                        'bower_components/foundation/js/foundation/foundation.*.js',
                        '<%= config.app %>/scripts/{,*/}*.js'
                    ],
                }
            },
        },
        concat: {
            live: {
                files: {
                    '<%= config.dist %>/modernizr.js': [
                        'bower_components/foundation/js/vendor/modernizr.js'
                    ],
                    '<%= config.dist %>/main.js': [
                        'bower_components/foundation/js/vendor/jquery.js',
                        'bower_components/foundation/js/foundation/foundation.js',
                        'bower_components/foundation/js/foundation/foundation.*.js',
                        '<%= config.app %>/scripts/{,*/}*.js'
                    ],
                }
            }
        },
        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= config.app %>/images',
                    src: '{,*/}*.{png,jpg,jpeg}',
                    dest: '<%= config.dist %>'
                }]
            }
        },
        cssmin: {
            dist: {
                files: {
                    '<%= config.dist %>/main.css': [
                        '.tmp/styles/{,*/}*.css',
                        '<%= config.app %>/styles/{,*/}*.css'
                    ]
                }
            }
        },
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= config.app %>',
                    dest: '<%= config.dist %>',
                    src: [
                        'assets/*',
                    ]
                },
                {
                    expand: true,
                    cwd: 'bower_components/fontawesome/fonts',
                    dest: '<%= config.dist %>',
                    src: [
                        '*'
                    ]
                }]
            },
        }
    });

    grunt.registerTask('live', [
        'clean:dist',
        'compass:live',
        'cssmin',
        'concat:live',
        'copy',
        'watch'
    ]);

    grunt.registerTask('build', [
        'clean:dist',
        'compass:dist',
        'cssmin',
        'imagemin',
        'uglify',
        'copy'
    ]);

    grunt.registerTask('default', [
        'jshint',
        'build'
    ]);
};
