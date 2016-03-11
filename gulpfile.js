var gulp        = require('gulp'),
    watch       = require('gulp-watch'),
    less        = require('gulp-less'),
    uglify      = require('gulp-uglify'),
    concat      = require('gulp-concat'),
    rename      = require('gulp-rename'),
    minifyCSS   = require('gulp-minify-css'),
    notify      = require('gulp-notify'),
    connect     = require('gulp-connect'),
    fileinclude = require('gulp-file-include');




gulp.task('default', function () {

    gulp.run('less','css','connect');

    //Wacht LESS
    gulp.watch('./assets/styles/less/*.less',function(evt){
        gulp.run('less');
    });

    //Wacht CSS
    gulp.watch('./assets/styles/css/*.css',function(evt){
        gulp.run('css');        
    });

    //Wacht Html
    gulp.watch('./source/*.html',function(evt){
        gulp.run('html');        
    });

});


gulp.task('less',function(){
    
    gulp.src('./assets/styles/less/*.less')
        .pipe(less())
        .pipe(gulp.dest('./assets/styles/css/')); 
});

gulp.task('css',function(){
    var css = [
                './assets/styles/css/normalize.css',
                './assets/styles/css/wp.css',
                './assets/scripts/components/font-awesome/css/font-awesome.css',
                './assets/styles/css/font.css',
                './assets/styles/css/style.css',
            ]
    gulp.src(css)
        .pipe(concat('style.css'))
        .pipe(gulp.dest('./assets/styles/'))
        .pipe(minifyCSS())
        .pipe(rename('style.min.css'))
        .pipe(gulp.dest('./assets/styles/'))
        .pipe( notify( 'CSS OK!' ) )
        .pipe( connect.reload() );
});

gulp.task('js',function(){
    var scripts = [
                    './bower_components/modernizr/modernizr.js',
                    './bower_components/jquery/dist/jquery.min.js',
                    './bower_components/loadericone/loadericone.min.js',
                    './assets/scripts/components/app.js'
                  ];
    gulp.src(scripts)
        .pipe(concat('app.js'))
        .pipe(gulp.dest('./assets/scripts/'))
        .pipe(uglify())
        .pipe(rename('app.min.js'))
        .pipe(gulp.dest('./assets/scripts/'))
        .pipe( notify( 'JS OK!' ) );
});

gulp.task('html',function(){
    
    var pages = [
        './source/index.html'
    ]
    gulp.src(pages)
        .pipe(fileinclude({
          prefix: '@@',
          basepath: '@file'
        }))
        .pipe(gulp.dest('./'))
        .pipe(connect.reload());

});

gulp.task( 'connect', function() {
  connect.server({ livereload: true });
});