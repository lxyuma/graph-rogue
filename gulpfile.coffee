gulp = require('gulp')
pl = require('gulp-load-plugins')()
mainBowerFiles = require('main-bower-files')

src =
  scripts: "app/scripts/*.js"
  html: "app/**/*.html"

dist = 
  dir:   "./dist"
  dirJs: "./dist/scripts/"
  js:    "rogue.js"
  dirBower: "./dist/scripts/lib/"

# build
gulp.task 'hint', ->
  gulp.src(src.scripts)
    .pipe(pl.jshint())
    .pipe(pl.jshint.reporter("default"))

gulp.task 'scripts', ['hint'], ->
  gulp.src([src.scripts ])
    .pipe(pl.uglify())
    .pipe(pl.concat(dist.js))
    .pipe(gulp.dest(dist.dirJs))
    .pipe(pl.connect.reload())

gulp.task 'bower', ->
  gulp.src(mainBowerFiles())
    .pipe(gulp.dest(dist.dirBower))

gulp.task 'html', ->
  gulp.src(src.html)
    .pipe(gulp.dest(dist.dir))
    .pipe(pl.connect.reload())

gulp.task 'build', ['scripts', 'bower', 'html']

# server
gulp.task 'connect', ["build"], ->
  pl.connect.server(
    root: './',
    livereload: true
  )

gulp.task 'server', ['connect'], ->
  gulp.src('./dist/index.html')
    .pipe(pl.open('', {url: 'http://localhost:8080/dist/index.html'}))

# watch
gulp.task 'watch', ['connect'], ->
  gulp.watch(src.html, ['html'])
  gulp.watch(src.scripts, ['scripts'])

# default
gulp.task 'default', ["server", "watch"]

