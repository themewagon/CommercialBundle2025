// *************************************
//
//  Gulp tasks
//  @since v4.0
//
// *************************************
//
// Available tasks:
//
//   `gulp`
//
//   `gulp init`
//
//   `gulp build`
//   `gulp build:bin`
//   `gulp build:product`
//   `gulp build:compressed`
//
//   `gulp compile`
//   `gulp compile:js`
//   `gulp compile:sass`
//   `gulp compile:jade`
//
//   `gulp asset`
//   `gulp asset:fonts`
//   `gulp asset:images`
//   `gulp asset:videos`
//   `gulp asset:bower`
//
//   `gulp connect`
//
// *************************************


global.gulp        = require('gulp');
global.browserSync = require('browser-sync').create();

var requireDir  = require('require-dir');


requireDir('./zcore/gulp_tasks');

gulp.task('default', ['asset', 'compile', 'serve'],  function() {
	console.log("\n\n*** Engine is firing up ***\n\n");
});