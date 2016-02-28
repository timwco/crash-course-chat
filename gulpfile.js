var gulp = require('gulp'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    babel = require('babelify'),
    sass = require('gulp-sass'),
    watch = require('gulp-watch'),
    uglify = require('gulp-uglify'),
    fs = require('fs');

gulp.task('build:css', function () {
  gulp.src('./assets/styles/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('./assets/dist'));
});

gulp.task('build:js', function() {
  return browserify('./assets/js/index.js')
    .transform(babel, {presets: ["es2015"]})
    .bundle()
    .pipe(source('./bundle.js'))
    .pipe(buffer())
    .pipe(gulp.dest('./assets/dist'));
});

gulp.task('minify', function () {
  return browserify('./assets/js/index.js')
    .transform(babel, {presets: ["es2015"]})
    .bundle()
    .pipe(source('./bundle.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest('./assets/dist'));
});

gulp.task('watch', function() {
  watch('./assets/styles/**/*.scss', function () {
    gulp.start('build:css');
  });
  watch('./assets/js/**/*.js', function () {
    gulp.start('build:js');
  });
});

gulp.task('start', ['build:css', 'build:js', 'watch']);
gulp.task('build', ['build.css', 'minify']);
