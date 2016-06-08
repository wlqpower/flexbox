var gulp = require("gulp"),
    sass = require("gulp-sass"),
    autoprefix = require("gulp-autoprefixer");

gulp.task("sass",function(){
    gulp.src("src/scss/*.scss")
        .pipe(autoprefix())
        .pipe(sass())
        .pipe(gulp.dest("dis/css"));
})

gulp.task("img",function(){
    gulp.src("src/img/*")
        .pipe(gulp.dest("dis/img"));
})

gulp.task("watch",function(){
    gulp.watch("src/scss/*.scss",["sass"])
    gulp.watch("src/img/*",["img"])
})

gulp.task("default",["sass","watch","img"]);
