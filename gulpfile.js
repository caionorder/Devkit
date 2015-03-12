var gulp 	  = require('gulp'),
    watch 	  = require('gulp-watch'),
    less 	  = require('gulp-less'),
    uglify 	  = require('gulp-uglifyjs'),
    concat    = require('gulp-concat'),
    rename    = require('gulp-rename'),
    minifyCSS = require('gulp-minify-css');



gulp.task('default', function () {

	//less
	gulp.src('./less/*.less')
		.pipe(less())
		.pipe(gulp.dest('./css/src/'));
		console.log('LESS');

	//JS
	// gulp.src('./js/src/*.js')
 //    	.pipe(uglify())
 //    	.pipe(gulp.dest('./js/'));
 //    	console.log('JS');

	//CSS
    gulp.src('./css/src/*.css')
        .pipe(concat('style.css'))
        .pipe(gulp.dest('./css/'))
        .pipe(minifyCSS())
        .pipe(rename('style.min.css'))
        .pipe(gulp.dest('./css/'));
        console.log('CSS');

});
