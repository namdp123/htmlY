var gulp = require('gulp');

//** Browser-Sync **//
var browserSync = require('browser-sync').create();

//server
gulp.task('server',function () {
    browserSync.init({
        server: {
            baseDir: './',
            ext: 'html'
        }
    })
})

//default
gulp.task('default',['server'])

