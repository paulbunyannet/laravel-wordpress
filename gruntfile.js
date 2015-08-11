themeAssetPath = "public_html/wp-content/themes/mytheme/assets/";
appAssetPath = "resources/assets/";
appAssetOutputPath = "public_html/app/assets/";

module.exports = function (grunt) {
    // project configuration
    //noinspection JSUnresolvedFunction
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        /** ========================================================
         *  CoffeeScript
         * ========================================================*/

        coffee: {

            wp_theme: {
                expand: true,
                flatten: false,
                cwd: themeAssetPath + 'js/source',
                src: ['**/*.coffee'],
                dest: themeAssetPath + 'js/source',
                ext: '.js'
            },
            app: {
                expand: true,
                flatten: false,
                cwd: appAssetPath + 'coffee',
                src: ['**/*.coffee'],
                dest: appAssetOutputPath + 'js/source',
                ext: '.js'
            }

        },

        /** ========================================================
         *  Minify Js
         * ========================================================*/
        uglify: {
            wp_theme: {
                options: {
                    banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
                    mangle: false,
                    beautify: false,
                    preserveComments: false
                },
                files: [{
                    cwd: themeAssetPath + 'js/source',
                    src: ['**/*.js', '!**/*.min.js'],
                    expand: true,
                    flatten: true,
                    dest: themeAssetPath + 'js/build',
                    ext: '.min.js'
                }]
            },
            app: {
                options: {
                    banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
                    mangle: false,
                    beautify: false,
                    preserveComments: false
                },
                files: [{
                    cwd: appAssetOutputPath + 'js/source',
                    src: ['**/*.js', '!**/*.min.js'],
                    expand: true,
                    flatten: true,
                    dest: appAssetOutputPath + 'js/build',
                    ext: '.min.js'
                }]
            }
        },

        /** ========================================================
         * Compile SASS -> CSS
         ========================================================= */

        sass: {
            wp_theme: {
                files: [{
                    cwd: themeAssetPath + 'css/source',
                    src: ['*.scss'],
                    expand: true,
                    flatten: true,
                    dest: themeAssetPath + 'css/build',
                    ext: '.css'
                }]
            },
            app: {
                files: [{
                    cwd: appAssetPath + 'sass',
                    src: ['*.scss'],
                    expand: true,
                    flatten: true,
                    dest: appAssetOutputPath + 'css/build',
                    ext: '.css'
                }]
            }
        },

        /** ========================================================
         * Compile Less -> CSS
         ========================================================= */
        less: {
            wp_theme: {
                options: {
                    yuicompress: true,
                    optimization: false,
                    ieCompat: true
                },
                files: [{
                    cwd: themeAssetPath + 'css/source',
                    src: ['*.less'],
                    expand: true,
                    flatten: false,
                    dest: themeAssetPath + 'css/build',
                    ext: '.min.css'
                }]
            },
            app: {
                options: {
                    yuicompress: true,
                    optimization: false,
                    ieCompat: true
                },
                files: [{
                    cwd: appAssetPath + 'less',
                    src: ['*.less'],
                    expand: true,
                    flatten: false,
                    dest: appAssetOutputPath + 'css/build',
                    ext: '.min.css'
                }]
            }
        },
        /** ========================================================
         * debug stripper
         ========================================================= */
        strip: {
            wp_theme: {
                files: [{
                    src: [themeAssetPath + 'build/*.js', '!'+ themeAssetPath +'build/*.min.js'],
                    expand: true,
                    flatten: false,
                    ext: '.min.js'
                }],
                options: {
                    nodes: ['console.log', 'debug']
                }
            },
            app: {
                files: [{
                    src: [appAssetOutputPath + 'build/*.js', '!'+ appAssetOutputPath +'build/*.min.js'],
                    expand: true,
                    flatten: false,
                    ext: '.min.js'
                }],
                options: {
                    nodes: ['console.log', 'debug']
                }
            }
        },
        /** ========================================================
         * Css minifier
         ========================================================= */
        cssmin: {
            wp_theme: {
                files: [{
                    expand: true,
                    src: [themeAssetPath + 'build/**/*.css', '!'+ themeAssetPath +'build/**/*.min.css'],
                    ext: '.min.css'
                }]
            },
            app: {
                files: [{
                    expand: true,
                    src: [appAssetOutputPath + 'build/**/*.css', '!'+ appAssetOutputPath +'build/**/*.min.css'],
                    ext: '.min.css'
                }]
            }

        },

        /** ========================================================
         * Watcher
         ========================================================= */
        watch: {
            scripts_and_styles: {
                files: [
                    themeAssetPath + '**/*.less',
                    themeAssetPath + '**/*.scss',
                    themeAssetPath + '**/*.js',
                    themeAssetPath + '**/*.coffee',
                    'public_html/bower_components/**/*',
                    'src/**/*.*',
                    '!'+ themeAssetPath +'**/*.min.js',
                ],
                tasks: [
                    'coffee:wp_theme',
                    'coffee:app',
                    'uglify:wp_theme',
                    'less:wp_theme',
                    'less:app',
                    'sass:wp_theme',
                    'sass:app',
                    'strip:wp_theme',
                    'strip:app',
                    'cssmin:wp_theme',
                    'cssmin:app'
                ],
                options: {
                    livereload: 35729
                }
            }
        }
    });

    require('load-grunt-tasks')(grunt);


    // watcher
    grunt.registerTask(
        'watcher', ['watch:scripts_and_styles']
    );

    grunt.registerTask(
        'default', [
            'coffee:wp_theme',
            'coffee:app',
            'uglify:wp_theme',
            'less:wp_theme',
            'less:app',
            'sass:wp_theme',
            'sass:app',
            'cssmin:wp_theme',
            'cssmin:app'
        ]
    );

    // production tasks
    grunt.registerTask(
        'production', [
            'coffee:wp_theme',
            'coffee:app',
            'uglify:wp_theme',
            'less:wp_theme',
            'less:app',
            'sass:wp_theme',
            'sass:app',
            'strip:wp_theme',
            'strip:app',
            'cssmin:wp_theme',
            'cssmin:app'
        ]
    );
};