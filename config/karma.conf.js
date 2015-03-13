/*jslint node: true */
"use strict";

module.exports = function(config) {
  config.set({
    basePath: '../',
    frameworks: [ 'jasmine' ],
    files: [
      'libs/jquery/dist/jquery.js',
      'libs/angular/angular.js',
      'libs/angular-mocks/angular-mocks.js',
      'libs/lodash/dist/lodash.js',
      'libs/underscore.string/lib/underscore.string.js',
      'app/**/*.js',
      'tests/**/*.js',
      'app/templates/*.html'
    ],
    preprocessors: {
      'app/templates/*.html': 'ng-html2js',
      'app/**/*.js': ['coverage']
    },
    junitReporter: {
      outputFile: 'results/TEST-units.xml',
      suite: ''
    },
    coverageReporter: {
      type : 'lcov',
      dir : 'results/',
      subdir: '.'
    },
    reporters: [ 'progress' ],
    colors: true,
    autoWatch: false,
    browsers: [ 'PhantomJS' ],
    singleRun: true,
    plugins: [
      'karma-phantomjs-launcher',
      'karma-jasmine',
      'karma-ng-html2js-preprocessor',
      'karma-junit-reporter',
      'karma-coverage'
    ]
	    karma: {
      junit: {
        singleRun: true,
        reporters: ['junit', 'coverage']
      }
    },
	    grunt.registerTask('junit', [ 'clean:dist', 'jshint', 'karma:junit' ]);
  });
};
