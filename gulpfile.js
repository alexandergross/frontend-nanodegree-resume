var gulp            = require('gulp'),
    rename          = require('gulp-rename'),
    notify          = require('gulp-notify'),
    images          = require('gulp-responsive-images'),
    autoprefixer    = require('gulp-autoprefixer'),
    cleanCSS        = require('gulp-clean-css'),
    sass            = require('gulp-sass'),
    sourcemaps      = require('gulp-sourcemaps'),
    uglify          = require('gulp-uglify'),
    responsive      = require('gulp-responsive'),
    rename          = require('rename'),
    concat          = require('gulp-concat');

//Compile Sass, autoprefix & minify it & create source maps
gulp.task('sass', function () {
    gulp.src('src/scss/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'nested',
            precision: 10,
            includePaths: ['.']
        }).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: [
                'last 2 versions',
                'android 4',
                'opera 12'
            ]
        }))
        .pipe(cleanCSS({compatibility: 'ie9'}))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist/css'))
        .pipe(notify('Sass Compiled, Prefixed and Minified'));
});

gulp.task('js', function () {
    gulp.src('src/js/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist/js'))
        .pipe(notify('JS concat & minified'));
});

// Resize and compress the images
gulp.task('images', function () {
    gulp.src('src/images/**/*.{JPG,jpg,jpeg,gif,png}')
        .pipe(responsive({
            '*.jpg': [
                {
                    rename: {
                        suffix: '@2x'
                    },
                    quality: 60
                },{
                    width: '50%',
                    height: '50%',
                    rename: {
                        suffix: '@1x'
                    },
                    quality: 60
                }
            ]
        }))
        .pipe(gulp.dest('dist/images'))
        .pipe(notify('Images compressed'));
});


// Watches the less files and images
gulp.task('watch', function () {
    gulp.watch('src/scss/**/*.scss', ['styles']);
    gulp.watch('src/images/**/*.{JPG,jpg,jpeg,gif,png}', {cwd: './'}, ['images']);
});

//Default Task
gulp.task('default', ['sass', 'js', 'watch']);
