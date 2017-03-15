var gulp = require('gulp');

gulp.task('bootstrap', function(){
	gulp.src('./node_modules/bootstrap/dist/css/bootstrap.min.css')
	.pipe(gulp.dest('./public/stylesheets'));
	console.log('Bootstrap Adicionado com sucesso!');

	gulp.src('./node_modules/bootstrap/dist/fonts/**')
	.pipe(gulp.dest('./public/fonts'));
	console.log('Fontes adicionadas com sucesso!');

	gulp.src('./node_modules/bootstrap/dist/js/bootstrap.min.js')
	.pipe(gulp.dest('./public/javascripts'));
	console.log('Bootstrap js adicionado com sucesso!');
});