var gulp   = require('gulp'),
    open   = require("gulp-open"),
    daemon = require( 'gulp-develop-server'),
    port   = process.env.port || 5005

// launch browser in a port
gulp.task('open', function(){
    var options = {
        url: 'http://localhost:' + port,
        app: 'google chrome canary'
    }
    
    gulp.src('./public/index.html')
        .pipe(open('', options));
});

gulp.task( 'server:start', function() {
    daemon.listen( { path: './index.js' } );
});
 
// watch files for live reload
gulp.task('watch', function() {
    gulp.watch( [ 'index.js' ], daemon.restart );
});

gulp.task('serve', ['server:start', 'open', 'watch']);
