var gulp = require("gulp");
var ts = require("gulp-typescript");
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minify = require('gulp-minify');
var sourcemaps = require('gulp-sourcemaps');
var del = require('del');
var tsProject = ts.createProject("tsconfig.json");



var paths = {
    scripts: ['client/js/**/*.coffee', '!client/external/**/*.coffee'],
    images: 'client/img/**/*',
    p_angular: 'public/angular'
};



// Not all tasks need to use streams
// A gulpfile is just another node program and you can use any package available on npm
gulp.task('clean', function() {
    // You can use multiple globbing patterns as you would with `gulp.src`
    return del([paths.p_angular]);
});

// to uglify
/*gulp.task('default', ['clean'], function() {
    // Minify and copy all JavaScript (except vendor scripts)
    // with sourcemaps all the way down
    return tsProject.src()
        .pipe(tsProject())
        .pipe(uglify())
        .pipe(gulp.dest(paths.p_angular));

});*/


// to all file : source, min
gulp.task("default", function () {
    tsProject.src()
        .pipe(tsProject())
        .pipe(minify({
            ext:{
                src:'.js',
                min:'.min.js'
            },
            exclude: ['tasks'], // Will not minify files in the dirs.

            ignoreFiles: ['.combo.js', '.min.js'] // Will not minify files which matches the pattern.
        }))
        .pipe(gulp.dest("public/angular")); // directory output
});

