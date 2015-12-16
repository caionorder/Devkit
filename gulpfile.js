var gulp      = require('gulp'),
    watch     = require('gulp-watch'),
    less      = require('gulp-less'),
    uglify    = require('gulp-uglify'),
    concat    = require('gulp-concat'),
    rename    = require('gulp-rename'),
    minifyCSS = require('gulp-minify-css'),
    notify    = require( 'gulp-notify' ),
    connect   = require( 'gulp-connect' ),
    imagemin  = require('gulp-imagemin');




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
                    './assets/scripts/components/modernizr/modernizr.js',
                    './assets/scripts/components/jquery/dist/jquery.min.js',
                    './assets/scripts/components/loadericone/loadericone.min.js',
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

gulp.task( 'connect', function() {
  connect.server({ livereload: true });
});


gulp.task('jpgs', function() {
    return gulp.src('./assets/images/src/*.jpg')
    .pipe(imagemin({ progressive: true }))
    .pipe(gulp.dest('./assets/images/'));
});
