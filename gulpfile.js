/*
 * @Author: admin1
 * @Date:   2017-06-23 11:16:56
 * @Last Modified by:   admin1
 * @Last Modified time: 2017-06-23 11:24:48
 */

var gulp = require('gulp');
var wiredep = require('wiredep').stream;


gulp.task('wiredep', function(argument) {
    gulp.src('./index.html')
        .pipe(wiredep({
            optional: 'configuration',
            goes: 'here'
        }))
        .pipe(gulp.dest('./'));
});
