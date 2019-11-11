var gulp = require('gulp'),
    sass = require('gulp-sass'); // Подключаем Sass пакет

gulp.task('mytask', async function() {
    console.log('Привет, я таск!');
});

gulp.task('sass', async function(){ // Создаем таск "sass"
    return gulp.src('source/sass/**/*.scss') // Берем источник
        .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
        .pipe(gulp.dest('source/css')) // Выгружаем результата в папку app/css
});

gulp.task('watch', function() {
    gulp.watch('source/sass/**/*.sass', gulp.parallel('sass'));
});
