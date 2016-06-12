var gulp = require("gulp"),
    sass = require("gulp-sass"),
    autoprefix = require("gulp-autoprefixer"),
    browserSync = require("browser-sync"),
    wrap = require("gulp-wrap");

gulp.task("browser-sync",["sass","build","build2"],function(){
    browserSync({
        server:{
            baseDir: 'dis'
        }
    });
});

gulp.task("build",function(){
    gulp.src("src/lay-*.html")
        .pipe(wrap({src:"layout/default.html"}))
        .pipe(gulp.dest("dis/"));
})

gulp.task("build2",function(){
    gulp.src(["src/index.html","src/self-*.html"])
        .pipe(gulp.dest("dis/"));
});

gulp.task("sass",function(){
    gulp.src("src/scss/*.scss")
        .pipe(autoprefix())
        .pipe(sass())
        .pipe(gulp.dest("dis/css"))
        .pipe(browserSync.reload({stream:true}));
});

gulp.task("img",function(){
    gulp.src("src/img/*")
        .pipe(gulp.dest("dis/img"));
});

gulp.task("rebuild",["build","build2"],function(){
    browserSync.reload();
});

gulp.task("watch",function(){
    gulp.watch("src/scss/*.scss",["sass"]);
    gulp.watch("src/img/*",["img"]);
    gulp.watch(['**/*.html'],['rebuild']);
});

gulp.task("default",["browser-sync","img","watch"]);
