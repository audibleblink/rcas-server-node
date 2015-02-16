var gulp       = require('gulp'),
    connect    = require('gulp-connect'),
    open       = require("gulp-open"),
    browserify = require('gulp-browserify'),
    sass       = require('gulp-sass'),
    port       = process.env.port || 3031;

// browserify and transform JSX
gulp.task('browserify', function() {
    gulp.src('./src/js/main.js')
        .pipe(browserify({transform: 'reactify'}))
        .pipe(gulp.dest('./'));
});

// process sass
gulp.task('sass', function(){
    gulp.src('./src/styles/*.sass')
        .pipe(sass())
        .pipe(gulp.dest('./'))
})

// launch browser in a port
gulp.task('open', function(){
    var options = {
        url: 'http://localhost:' + port,
        app: 'google chrome canary'
    }
    
    gulp.src('./index.html')
        .pipe(open('', options));
});

// live reload server
gulp.task('connect', function() {
    connect.server({
        root: './',
        port: port,
        livereload: true
    });
});


// live reload js
gulp.task('js', function () {
    gulp.src('./*.js')
        .pipe(connect.reload());
});


// live reload html
gulp.task('html', function () {
    gulp.src('./*.html')
        .pipe(connect.reload());
});


// live reload css
gulp.task('css', function () {
    gulp.src('./*.css')
        .pipe(connect.reload());
});


// watch files for live reload
gulp.task('watch', function() {
    gulp.watch('./*.js', ['js']);
    gulp.watch('./*.css', ['css']);
    gulp.watch('./index.html', ['html']);
    gulp.watch('./src/js/**/*.js', ['browserify']);
    gulp.watch('./src/styles/**/*.sass', ['sass']);
});

gulp.task('default', ['browserify']);

gulp.task('serve', ['browserify', 'connect', 'open', 'watch']);
