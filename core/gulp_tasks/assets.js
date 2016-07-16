var plumber = require('gulp-plumber'),
    mainBowerFiles = require('main-bower-files'),
    watch           = require('gulp-watch'),
    preprocess = require('gulp-preprocess');



gulp.task('asset:images', function () {
    return gulp.src('src/assets/images/**/{*.jpg,*.png,*.gif,*.ico}')
        .pipe(watch('src/assets/images/**/{*.jpg,*.png,*.gif,*.ico}'))
        .pipe(gulp.dest('bin/assets/images'));
});


gulp.task('asset:videos', function () {
    return gulp.src('src/assets/videos/**/*')
        .pipe(watch('src/assets/videos/**/*'))
        .pipe(gulp.dest('bin/assets/videos'));
});


gulp.task('asset:fonts', function () {
    return gulp.src('src/assets/fonts/**/*')
        .pipe(watch('src/assets/fonts/**/*'))
        .pipe(gulp.dest('bin/assets/fonts/'));
});


gulp.task('asset:js', function () {

    return gulp.src(['src/assets/js/main.js'])
        .pipe(watch(['src/assets/js/main.js']))
        .pipe(preprocess({context: { ENV : 'LIVE_PREVIEW'}}))
        .pipe(gulp.dest('bin/assets/js/'));
});


gulp.task('asset:php', function () {
 	return gulp.src('core/php/**/*.php')
        .pipe(gulp.dest('bin/php/'));
});


    
gulp.task('asset:bower', function() {
    return gulp.src(mainBowerFiles(), { base: './bower_components' })
        .pipe(gulp.dest('bin/assets/lib'));
});

gulp.task('asset:lib', function () {
    return gulp.src('src/assets/lib/**/*.*')
        .pipe(gulp.dest('bin/assets/lib'));
});

gulp.task('asset', ['asset:images', 'asset:videos', 'asset:fonts', 'asset:js', 'asset:php', 'asset:lib']);