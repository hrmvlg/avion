var gulp = require('gulp');
var file = require('gulp-file');

gulp.task('create-file-system', function(done) {
    file('index.html', '', { src: true })
    .pipe(gulp.dest('./'));;
    

  file('.gitkeep', '', { src: true })
    .pipe(gulp.dest('./fonts'));

  file('.gitkeep', '', { src: true })
    .pipe(gulp.dest('./images'));

  file('_fonts.sass', '', { src: true })
    .pipe(gulp.dest('./styles'));

  file('_globals.scss', '', { src: true })
    .pipe(gulp.dest('./styles'));

  file('_media.scss', '', { src: true })
    .pipe(gulp.dest('./styles'));

  file('_mixins.scss', '', { src: true })
    .pipe(gulp.dest('./styles'));

  file('_variables.scss', '', { src: true })
    .pipe(gulp.dest('./styles'));

  file('styles.scss', '', { src: true })
    .pipe(gulp.dest('./styles'));

  file('.gitkeep', '', { src: true })
    .pipe(gulp.dest('./styles/blocks'));

  done();
});