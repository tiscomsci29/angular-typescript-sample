var gulp = require("gulp");
var ts = require("gulp-typescript");
var minify = require('gulp-minify');
var tsProject = ts.createProject("tsconfig.json");


gulp.task("default", function () {
    return tsProject.src()
        .pipe(tsProject())
        .js
        .pipe(minify({
            ext:{
                src:'.js',
                min:'.min.js'
            },
            exclude: ['tasks'], // Will not minify files in the dirs.

            ignoreFiles: ['.combo.js', '-min.js'] // Will not minify files which matches the pattern.
        }))
        .pipe(gulp.dest("public/angular")); // directory output
});
