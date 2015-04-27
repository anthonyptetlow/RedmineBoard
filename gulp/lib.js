var gulp = require('gulp'),
	concat = require('gulp-concat');

gulp.task('lib', ['bower'], function () {


	gulp.src([  __dirname + '/../src/lib/bootstrap/dist/css/bootstrap.css',
				__dirname + '/../src/lib/fontawesome/css/font-awesome.css'
		])
		.pipe(gulp.dest(__dirname + '/../public/styles/lib/'));



	gulp.src([  __dirname + '/../src/lib/bootstrap/dist/js/bootstrap.js',
				__dirname + '/../src/lib/jquery/dist/jquery.js'

		])
		.pipe(gulp.dest(__dirname + '/../public/js/lib/'));



	gulp.src([  __dirname + '/../src/lib/bootstrap/fonts/*',
				__dirname + '/../src/lib/fontawesome/fonts/*'
		])
		.pipe(gulp.dest(__dirname + '/../public/styles/fonts/'));

	return gulp.src([__dirname + '/../src/lib/angular/angular.js',
	 	__dirname + '/../src/lib/angular-ui-router/release/angular-ui-router.js',
	 	__dirname + '/../src/lib/angular-resource/angular-resource.js'])
		.pipe(concat('angular_all.js'))
		.pipe(gulp.dest(__dirname + '/../public/js/lib'))
		.on('error', function (error) {
	        console.error(String(error));
	    });
});
