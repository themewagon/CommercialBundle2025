
gulp.task('serve', function() {

	//Static server using browser sync
    browserSync.init({
        server: {
            baseDir: "bin/"
        }
    });

    gulp.watch('bin/*.html').on('change', browserSync.reload);
});