var gulp = require('gulp'),
    concat = require('gulp-concat'),
    html2js = require('gulp-html2js');

var paths = {
    templates: 'app/**/*.html'
};

gulp.task('templates', function () {
    gulp.src(paths.templates)
        .pipe(html2js({
            outputModuleName: 'app-templates',
            useStrict: true
        }))
        .pipe(concat('app-templates.js'))
        .pipe(gulp.dest('./build'))
});

gulp.task('watch', function () {
    gulp.watch(paths.templates, ['templates']);
});

gulp.task('default', ['templates', 'watch']);
