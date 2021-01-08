var gulp = require('gulp'),
		sass = require('gulp-sass'),
		browserSync = require('browser-sync').create();

gulp.task('sass', function() {
	return gulp.src(['app/assets/sass/**/*.+(scss|sass)','!app/assets/sass/**/not.+(scss|sass)'])
	.pipe(sass({outputStyle: 'expanded'}))
	.pipe(gulp.dest('app/assets/css'))
});

gulp.task('browser-sync', function(done) {
  browserSync.init({
    server: {
      baseDir: './app/'
    },
    notify: false
  });

  browserSync.watch('app/').on('change', browserSync.reload);

  done()
});



gulp.task('watch', function() {
    gulp.watch('app/assets/sass/**/*.+(scss|sass)', gulp.series ('sass'));
});

gulp.task('default', gulp.parallel('watch', 'browser-sync', 'sass'))
