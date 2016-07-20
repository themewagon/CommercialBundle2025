//****
//****
//**** Workflow controller for ZiON Core development
//****
//****


//var timerequire = require("time-require");
var plumber         = require('gulp-plumber'),
    watch           = require('gulp-watch'),
    
    //sass plugins
    autoprefixer    = require('gulp-autoprefixer'),
    rename          = require('gulp-rename'),
    sass            = require('gulp-sass'),
    rtlcss          = require('gulp-rtlcss'),
    sourcemaps      = require('gulp-sourcemaps'),
    
    //pug plugins
    pug            = require ('pug'),
    gulpJade       = require('gulp-jade');



gulp.task('core', ['core:compile', 'core:assets', 'core:watch', 'serve'], function () {
  return console.log("**Core is starting up**");
});



// Compiling scss and pug
gulp.task('core:compile', ['core:compile:scss', 'core:compile:pug'], function () {
	return;
});

gulp.task('core:compile:pug', function () {
  return gulp.src('./core/pages/*.pug')
    .pipe(plumber())
    .pipe(gulpJade({
      jade: pug,
      pretty: true
    }))
    .pipe(gulp.dest('./bin'))
    .pipe(plumber.stop());
});



gulp.task('core:compile:scss', function () {

  	return gulp.src('./core/assets/scss/**/*.scss')
      .pipe(plumber())
	    .pipe(sourcemaps.init())
	    .pipe(sass({
        outputStyle : 'expanded',
        includePaths: require('node-bourbon').includePaths
      }).on('error', sass.logError))
	    .pipe(autoprefixer({
	        browsers: ['last 5 versions'],
	        cascade: false
	    }))
      .pipe(sourcemaps.write())
	    .pipe(gulp.dest('./bin/assets/css'))
	    .pipe(plumber.stop())
      .pipe(browserSync.stream());

    // //rtl stylesheet (Todo)
});


// Pushing alll the assets
gulp.task('core:assets', ['asset:bower', 'asset:php'], function () {
  return gulp.src('./core/assets/**/*.*')
    .pipe(gulp.dest('./bin/assets/'));
});


gulp.task('core:watch', function () {
  
  gulp.watch('./core/assets/scss/**/*.scss', ['core:compile:scss']);
  gulp.watch('./core/assets/**/*.*', ['core:assets']);
  gulp.watch(['./core/pages/*.pug', './core/pug_modules/**/*.pug'], ['core:compile:pug']);

});