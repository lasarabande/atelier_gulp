var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(){
   console.log('Salut');
    
    return gulp.src('dev/scss/styles.scss')
        .pipe(sass())
        .pipe(gulp.dest('dev/css'))
    
});