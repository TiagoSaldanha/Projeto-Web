// Variáveis
var prod = { outputStyle: 'compressed' };
var dev = { outputStyle: 'expansed' };

// Requires
var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var rename = require('gulp-rename');

// Task Default para o gulp
gulp.task('default', ['sassProd', 'sassDev', 'watch']);

// Task para o gulp em ambiente de produção
gulp.task('sassProd', function(){
	return gulp.src('./sass/**/*.sass')
			.pipe(sass( prod ))
			.on('error', sass.logError)
			// .pipe(rename('**.min.css'))
			.pipe(gulp.dest('./css/min'))
});

// Task para o gulp em ambiente de desenvolvimento
gulp.task('sassDev', function(){
	return gulp.src('./sass/**/*.sass')
			.pipe(sass( dev ))
			.on('error', sass.logError)
			.pipe(gulp.dest('./css'))
});

// Task para o watch
gulp.task('watch', function(){
	gulp.watch('./sass/**/*.sass', ['sassProd', 'sassDev'])
});