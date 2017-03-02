// 载入外挂
var gulp = require('gulp'), 
    less = require('gulp-less'),
    path = require('path'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    clean = require('gulp-clean'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    connect = require('gulp-connect'),
    livereload = require('gulp-livereload');
 
// 样式
gulp.task('styles', function() { 
  return gulp.src('src/styles/*.less')
    .pipe(less())
    //.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(gulp.dest('dist/styles'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(minifycss())
    .pipe(gulp.dest('dist/styles'))
    .pipe(connect.reload())
    .pipe(notify({ message: 'Styles task complete' }));
});
 
// 脚本
gulp.task('scripts', function() { 
  return gulp.src('src/scripts/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(concat('main.js'))
    .pipe(gulp.dest('dist/scripts'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(gulp.dest('dist/scripts'))
    .pipe(connect.reload())
    .pipe(notify({ message: 'Scripts task complete' }));
});
 
// 图片
gulp.task('images', function() { 
  return gulp.src('src/images/**/*')
    .pipe(cache(imagemin()))
    .pipe(gulp.dest('dist/images'))
    .pipe(connect.reload())
    .pipe(notify({ message: 'Images task complete' }));
});

//  移动html
gulp.task('html', function(){
  return gulp.src('src/*.html')
    .pipe(gulp.dest('dist/'))
    .pipe(connect.reload())
    .pipe(notify({message : 'Html task complete'}))
})

// 清理
gulp.task('clean', function() { 
  return gulp.src(['dist/styles', 'dist/scripts', 'dist/images'], {read: false})
    .pipe(clean());
});
 
// 预设任务
gulp.task('default', ['connect', 'watch']);

//构建
gulp.task('build', ['clean'], function(){
    gulp.start('styles', 'scripts', 'images', 'html');
})

//服务器
gulp.task('connect', function() {
    connect.server({
      root: 'dist',
      port: 9999,
      livereload: true
    })
})

// 看守
gulp.task('watch', function() {
  
  //livereload.listen();
  
  // 看守所有.less档
  gulp.watch('src/styles/*.less', ['styles']);
 
  // 看守所有.js档
  gulp.watch('src/scripts/*.js', ['scripts']);
 
  // 看守所有图片档
  gulp.watch('src/images/*', ['images']);

  // 看守所有文档变化
  gulp.watch('src/*.html',['html']);
 
  // 建立即时重整伺服器
  // var server = livereload();
 
  // 看守所有位在 dist/  目录下的档案，一旦有更动，便进行重整
  // gulp.watch(['dist/**']).on('change', function(file) {
  //   server.changed(file.path);
  // });
 
});