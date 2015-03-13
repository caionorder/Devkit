var gulp 	  = require('gulp'),
    watch 	  = require('gulp-watch'),
    less 	  = require('gulp-less'),
    uglify 	  = require('gulp-uglifyjs'),
    concat    = require('gulp-concat'),
    rename    = require('gulp-rename'),
    minifyCSS = require('gulp-minify-css');



gulp.task('default', function () {

    gulp.run('syscss','less','css');

    //Wacht LESS
    gulp.watch('./less/*.less',function(evt){
        gulp.run('less');
    });

    //Wacht CSS
    gulp.watch('./css/app/*.css',function(evt){
        gulp.run('css');
    });
    

});

gulp.task('less',function(){
    
    gulp.src('./less/*.less')
        .pipe(less())
        .pipe(gulp.dest('./css/app/')); 
        // console.log('LESS');
});

gulp.task('syscss',function(){
    gulp.src('./css/src/*.css')
        .pipe(concat('sys.css'))
        .pipe(gulp.dest('./css/'))
        .pipe(minifyCSS())
        .pipe(rename('sys.min.css'))
        .pipe(gulp.dest('./css/'));
        // console.log('SYSCSS');
});

gulp.task('css',function(){
    gulp.src('./css/app/*.css')
        .pipe(concat('style.css'))
        .pipe(gulp.dest('./css/'))
        .pipe(minifyCSS())
        .pipe(rename('style.min.css'))
        .pipe(gulp.dest('./css/'));
        // console.log('CSS');
})