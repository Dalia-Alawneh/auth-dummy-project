const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');

gulp.task('minify-css', function () {
    return gulp
        .src('assets/css/*.css')
        .pipe(cleanCSS())
        .pipe(gulp.dest('assets/css'));
});

gulp.task('minify-js', function () {
    return gulp
        .src('assets/js/*.js') // Path to your JavaScript files
        .pipe(uglify())
        .pipe(gulp.dest('assets/js'));
});

gulp.task('minify-images', async function () {
    const imagemin = await import('gulp-imagemin');

    return gulp
        .src('assets/img/*') // Path to your image files
        .pipe(imagemin.default())
        .pipe(gulp.dest('assets/img'));
});

// Default task
gulp.task('default', gulp.parallel('minify-css', 'minify-js', 'minify-images'));
