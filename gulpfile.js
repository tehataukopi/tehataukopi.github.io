var gulp   = require('gulp'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    sass   = require('gulp-sass'),
    connect   = require('gulp-connect');

gulp.task('styles', function(){
  gulp.src('assets-dev/css/**/*')
      .pipe(sass({outputStyle: 'compressed'}))
      .pipe(concat('master.css'))
      .pipe(gulp.dest('assets/css/'))
      .pipe(connect.reload());
});

gulp.task('scripts', function() {
  return gulp.src('assets-dev/js/*.js')
    .pipe(concat('main.js'))
    .pipe(gulp.dest('assets/js/'));
});

gulp.task('html', function () {
  gulp.src('index.html')
    .pipe(connect.reload());
});

gulp.task('connect', function(){
  connect.server({
    livereload: true
  });
});

gulp.task('watch', function(){
  gulp.watch('assets-dev/css/**/*', ['styles']);
  gulp.watch('assets-dev/js/*.js', ['scripts']);
  gulp.watch('index.html', ['html']);
});

gulp.task('default', ['styles', 'watch', 'connect', 'scripts']);
