/// <binding />
/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');
var typescript = require('gulp-typescript');
var tscConfig = require('./tsconfig.json');
var del = require('del');
var sourcemaps = require('gulp-sourcemaps');
var runSequence = require('run-sequence');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minify = require('gulp-minify-css');
var rename = require('gulp-rename');

// clean the contents of the distribution directory
gulp.task('clean', function () {
    return del('dist/**/*');
});

// TypeScript compile
gulp.task('compile', ['clean'], function () {
    return gulp
      .src('app/**/*.ts')
      .pipe(typescript(tscConfig.compilerOptions))
      .pipe(gulp.dest('dist/app'));
});

// copy static assets - i.e. non TypeScript compiled source
gulp.task('copy:assets', function () {
    return gulp.src(['app/**/*', 'index.html', 'styles.css', '!app/**/*.ts'], { base: './' })
      .pipe(gulp.dest('dist'))
});

// TypeScript source map
gulp.task('sourcemap', function () {
    return gulp
      .src('app/**/*.ts')
      .pipe(sourcemaps.init())          // <--- sourcemaps
      .pipe(typescript(tscConfig.compilerOptions))
      .pipe(sourcemaps.write('.'))      // <--- sourcemaps
      .pipe(gulp.dest('dist/app'));
});

// copy dependencies
gulp.task('copy:libs', function () {
    return gulp.src([
        'node_modules/core-js/client/shim.min.js',
        'node_modules/zone.js/dist/zone.js',
        'node_modules/systemjs/dist/system.src.js',
        'systemjs.config.js'
    ]).pipe(gulp.dest('dist/lib'))
});

// build application
gulp.task('build', function () {
    runSequence('clean', ['compile', 'sourcemap', 'copy:libs', 'copy:assets']);
});

gulp.task('default', ['build']);

//---------------------------------------------------

// clean the contents of the distribution directory
gulp.task('clean:prd', function () {
    return del('dist/prd/*');
});

// mimifying js
gulp.task('minify-js:prd', function () {
    gulp.src('dist/app/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/prd'));
});

// minifying css
gulp.task('minify-css:prd', function () {
    gulp.src('dist/app/**/*.css')
    .pipe(minify())
    .pipe(gulp.dest('dist/prd'));
});

// copy static assets - i.e. non TypeScript compiled source
gulp.task('copy:assets:prd', function () {
    return gulp.src(['dist/app/**/*', 'index.html', 'styles.css', '!dist/app/**/*.js', '!dist/app/**/*.js.map'])
      .pipe(gulp.dest('dist/prd'))
});

// build application for production

// build application
gulp.task('build:prd', function () {
    runSequence('clean:prd', ['minify-js:prd', 'minify-css:prd', 'copy:assets:prd']);
});

//gulp.task('default:prd', ['build:prd']);

// ---------------------------------------------------

gulp.task('bundle', function () {
    return gulp.src(['dist/app/**/*.js', '!dist/app/**/*.js.map'])
		.pipe(concat('bundle.min.js'))
        .pipe(uglify())
		.pipe(gulp.dest('dist/prd'));
});

gulp.task('bundle:prd', function () {
    runSequence('clean:prd', ['copy:assets:prd', 'bundle']);
});

gulp.task('default:prd', ['bundle:prd']);

//-----------------------------------------------------

