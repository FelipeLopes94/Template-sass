"use strict";

const gulp = require("gulp");
const sass = require("gulp-sass")(require('sass'));
const watch = require("gulp-watch");

sass.compiler = require("node-sass");


// Tasks Gulp
gulp.task('sass', compileSass);
gulp.task('watch', watchGulp);



// Funcoes das tasks

function compileSass(){
    return gulp

        .src("src/scss/**/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("dist/css"));

}

function watchGulp(){

    gulp.watch('src/scss/**/*.scss', gulp.series('sass'));


}

