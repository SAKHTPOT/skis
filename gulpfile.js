const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const browserSync = require('browser-sync').create();

gulp.task('sass', () => {
    return gulp.src('style.scss')
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(cleanCSS())
        .pipe(gulp.dest('./'))
        .pipe(browserSync.stream());
});

gulp.task('serve', () => {
    browserSync.init({
        server: './'
    });

    gulp.watch('*.scss', gulp.series('sass'));
    gulp.watch('*.html').on('change', browserSync.reload);
});

gulp.task('default', gulp.series('sass', 'serve'));
