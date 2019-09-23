const gulp = require('gulp');
const sass = require('gulp-sass');

function style(){
    return gulp.src('./src/sass/**/main.sass')
        .pipe(sass())
        .pipe(gulp.dest('./src/css'))
}
function watch(){
    gulp.watch('./src/sass/**/*.sass', style);
}

exports.style = style;
exports.watch = watch;