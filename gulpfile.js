const gulp = require('gulp');
const HubRegistry = require('gulp-hub');
const browserSync = require('browser-sync');
const fs = require('fs')
const path = require('path')
const conf = require('./conf/gulp.conf');

// Load some files into the registry
const hub = new HubRegistry([conf.path.tasks('*.js')]);

// Tell gulp to use the tasks just loaded
gulp.registry(hub);

gulp.task('build', gulp.series('clean', 'other', 'webpack:libs', 'webpack:dev', 'move'));
gulp.task('build:dist', gulp.series('clean', 'other', 'webpack:dist', 'touch'));
gulp.task('test', gulp.series('karma:single-run'));
gulp.task('test:auto', gulp.series('karma:auto-run'));
gulp.task('serve', gulp.series('webpack:libs', 'webpack:watch', 'watch', 'browsersync'));
gulp.task('serve:dist', gulp.series('clean', 'build:dist', 'browsersync:dist'));
gulp.task('default', gulp.series('build'));
gulp.task('watch', watch);

function reloadBrowserSync(cb) {
  browserSync.reload();
  cb();
}

function watch(done) {
  gulp.watch(conf.path.tmp('*.html'), reloadBrowserSync);
  done();
}

gulp.task('touch', function(done) {
  const fileName = path.join(conf.paths.dist, 'libs.min.js');
  fs.writeFileSync(fileName, '');
  done();
})
