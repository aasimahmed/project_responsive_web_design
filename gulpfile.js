// Load plugins
const gulp = require("gulp"),
browserSync = require("browser-sync").create(),
sass = require("gulp-sass"),
postcss = require("gulp-postcss"),
autoprefixer = require("autoprefixer"),
cssnano = require("cssnano"),
sourcemaps = require("gulp-sourcemaps");

var paths = {
    styles: {
        src : "src/**/*.scss",
        dest: "dist/css"
    },
    html : {
        src: "src/index.html",
        dest: "dist"
    }
}

function style() {

    return(
        gulp.src("src/scss/*.scss")
        .pipe(sourcemaps.init())
        .pipe(sass())
        .on("error", sass.logError)
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(gulp.dest("dist/css"))
        .pipe(browserSync.reload({stream: true}))
    );
}

function reload() {
    browserSync.reload();
}

function copyHTML(){
    return(
        gulp.src("src/index.html")
        .pipe(gulp.dest("dist/"))
    )
}

function watch(){
    browserSync.init({
        server: {
            baseDir: "./src"
        }
    })
    gulp.watch(paths.styles.src, style)
    gulp.watch(paths.html.dest, reload);
    gulp.watch(paths.html.src, copyHTML);
}


exports.style = style; //allows running from CLI.
exports.watch = watch;
