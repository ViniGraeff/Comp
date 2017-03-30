var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path'); 
var open = require('gulp-open');
var watch = require('gulp-watch');
var nodemon = require('nodemon');

gulp.task('uri', function(){
  gulp.src(__filename)
  .pipe(open({uri: 'http://localhost:3250'}));
});


gulp.task('start', function () {
  nodemon({
    src: 'localhost:3250'
  , ext: 'js html css less'
  , env: { 'NODE_ENV': 'development' }
  })
})


gulp.task('bower', function(){
	gulp.src('./bower_components/bootstrap/dist/css/bootstrap.min.css')
	.pipe(gulp.dest('./public/stylesheets'));
	console.log('Bootstrap Adicionado com sucesso!');

	gulp.src('./bower_components/bootstrap/dist/fonts/**')
	.pipe(gulp.dest('./public/fonts'));
	console.log('Fontes bootstrap adicionadas com sucesso!');

	gulp.src('./bower_components/bootstrap/dist/js/bootstrap.min.js')
	.pipe(gulp.dest('./public/javascripts'));
	console.log('Bootstrap js adicionado com sucesso!');

	gulp.src('./bower_components/materialize/dist/css/materialize.min.css')
	.pipe(gulp.dest('./public/stylesheets'));
	console.log('Materialize adicionado com sucesso!');

	gulp.src('./bower_components/materialize/dist/fonts/roboto/**')
	.pipe(gulp.dest('./public/fonts'));
	console.log('Fontes materialize adicionadas com sucesso!');

	gulp.src('./bower_components/materialize/dist/js/materialize.min.js')
	.pipe(gulp.dest('./public/javascripts'));
	console.log('Materialize js adicionado com sucesso!');
	// console.log(path.join(__dirname));
});

gulp.task('less', function () {
  return gulp.src('./less/*.less')
    .pipe(less())
    .pipe(gulp.dest('./public/stylesheets'));
});


gulp.task('default', ['start', 'bower', 'less', 'uri']);