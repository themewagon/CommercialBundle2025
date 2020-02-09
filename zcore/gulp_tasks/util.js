var gulp            = require('gulp'),
    
    //for deleting files
    del             = require('del'),

    //for screenshots
    webshot         = require('gulp-webshot'),
    rename          = require('gulp-rename'),
    
    //pug plugins
    pug            	= require ('pug'),
    gulpJade       	= require('gulp-pug'),
    fs 				= require('fs'),
    path 			= require('path'),
    runSequence     = require('run-sequence'),
    vinylPaths      = require('vinyl-paths');






gulp.task('clean', function(){
    del(['./bin/', './live/', './product/HTML/'], {force:true});
    return;
});



gulp.task('shot', function(callback) {
  runSequence('shot:take', 'shot:rename', callback);
});

gulp.task('shot:take', function() {

	return gulp.src('./bin/*.html')
        // .pipe(rename({prefix: "redist--"}))
	    .pipe(webshot({ 
			dest:'assets/images/screenshots/',
			root:'bin', 
			windowSize: { width: 1400, height: 900 },
			shotSize: { width: 'window', height: 'all' },
			streamType: 'jpg',
			phantomPath : 'phantomjs',
            // takeShotOnCallback: true,
            // renderDelay: 5000,
            captureSelector: "main"
            // filename: 'test'
		}));
});

gulp.task('shot:rename', function() {

    return gulp.src('./assets/images/screenshots/*.jpg')
        .pipe(vinylPaths(del))
        .pipe(rename({prefix: "dist--"}))
        .pipe(gulp.dest('./assets/images/screenshots/'))
});



gulp.task('shot:preparehtml', function() {

	return gulp.src('./pages/*.pug')
	    .pipe(gulpJade({
	      jade: pug,
	      pretty: true,
	      locals:{ZION_ENV:'PRODUCTION'}
	    }))
	    .pipe(gulp.dest('./bin/'))
})