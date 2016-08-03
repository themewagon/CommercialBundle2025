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


gulp.task('compile:sass', function () {

  	return gulp.src('./src/assets/scss/**/*.scss')
        .pipe(watch('./src/assets/scss/**/*.scss'))
        .pipe(plumber())
	    .pipe(sourcemaps.init())
	    .pipe(sass({outputStyle : 'expanded'}).on('error', sass.logError))
	    .pipe(autoprefixer({
	        browsers: ['last 5 versions'],
	        cascade: false
	    }))
        .pipe(sourcemaps.write())
	    .pipe(gulp.dest('./bin/assets/css'))
	    .pipe(plumber.stop())
        .pipe(browserSync.stream());

    // //rtl stylesheet (Todo)
    // gulp.src('./src/assets/scss/style.scss')
	   //  .pipe(sass({outputStyle : 'expanded'}).on('error', sass.logError))
	   //  .pipe(plumber())
	   //  .pipe(autoprefixer({
	   //      browsers: ['last 5 versions'],
	   //      cascade: false
	   //  }))
	   //  .pipe(rtlcss()) // Convert to RTL. 
	   //  .pipe(rename({ suffix: '-rtl' })) // Append "-rtl" to the filename. 
	   //  .pipe(gulp.dest('./bin/assets/css'))
	   //  .pipe(plumber.stop())
    //     .pipe(browserSync.stream());
});



gulp.task('compile:pug', function () {
  return gulp.src('./src/pages/*.pug')
    .pipe(watch(['./src/pages/*.pug']))
    .pipe(plumber())
    .pipe(gulpJade({
      jade: pug,
      pretty: true
    }))
    .pipe(gulp.dest('./bin'))
    .pipe(plumber.stop());
});

gulp.task('compile', ['compile:sass', 'compile:pug']);