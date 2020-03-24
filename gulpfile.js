var gulp = require('gulp');
var sass = require('gulp-sass');
//var sourcemaps = require('gulp-sourcemaps')
var watch = require('gulp-watch');
var postcss = require ('gulp-postcss');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');


gulp.task('sass', function() {
	return gulp.src('project/scss/**/*.scss')
//	.pipe(sourcemaps.init())
//	.pipe(sass().on('error', sass.logError))
//	.pipe(sourcemaps.write('./'))
	.pipe(sass())
//    .pipe(postcss([
//        autoprefixer()
//    ]))
//    .pipe(uglify())
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('project/css'))
          });

gulp.task('watch', function() {
	gulp.watch('project/scss/**/*.scss', gulp.series('sass'))
});

