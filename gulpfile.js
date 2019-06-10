const { series, src, dest, watch } = require('gulp');
const less = require('gulp-less');
const minifyCSS   = require('gulp-minify-css');
const notify      = require('gulp-notify');
const connect     = require('gulp-connect');
const concat      = require('gulp-concat');
const rename      = require('gulp-rename');
const uglify      = require('gulp-uglify');
const fileinclude = require('gulp-file-include');

function all_tasks(){
    task_connect();
    task_less();
    task_css();
    task_js();
    task_html();
}

function task_connect(){
    connect.server({ livereload: true });
}

function task_less(){
    return src('./assets/styles/less/*.less')
            .pipe(less())
            .pipe(dest('./assets/styles/css/'));
}

function task_css(){
    var css = [
        './bower_components/normalize-css/normalize.css',
        './assets/styles/css/wp.css',
        './assets/styles/fonts/fonts.css',
        './assets/styles/css/style.css',
    ];

    return src(css)
            .pipe(concat('style.css'))
            .pipe(dest('./assets/styles/'))
            .pipe(minifyCSS())
            .pipe(rename('style.min.css'))
            .pipe(dest('./assets/styles/'))
            .pipe( notify( 'CSS OK!' ) )
            .pipe( connect.reload() );
}

function task_js(){
    
        var scripts = [
                        './bower_components/jquery/dist/jquery.min.js',
                        './assets/scripts/components/app.js'
                      ];
        return src(scripts)
            .pipe(concat('app.js'))
            .pipe(dest('./assets/scripts/'))
            .pipe(uglify())
            .pipe(rename('app.min.js'))
            .pipe(dest('./assets/scripts/'))
            .pipe( notify( 'JS OK!' ) )
            .pipe( connect.reload() );;
    
}

function task_html(){

        var pages = [
            './source/index.html'
        ]
        return src(pages)
            .pipe(fileinclude({
              prefix: '@@',
              basepath: '@file'
            }))
            .pipe(dest('./'))
            .pipe(connect.reload());
}

exports.default = function(){
    all_tasks();
    watch('./assets/styles/less/*.less',task_less);
    watch('./assets/styles/css/*.css',task_css);
    watch('./assets/scripts/components/*.js',task_js);
    watch('../source/*.html',task_html);

}