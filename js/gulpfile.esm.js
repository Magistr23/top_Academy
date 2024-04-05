import { create } from 'browser-sync';
import { dest, lastRun, parallel, series, src, watch } from 'gulp';
import clean from 'gulp-clean';
import pug from 'gulp-pug';
import gulpSass from 'gulp-sass';
// import size from 'gulp-size';
// import terser from 'gulp-terser';
// import gulpIf from 'gulp-if';
// import nop from 'gulp-nop';
import { parse } from 'marked';
import dartSass from 'sass';

const
  sass = gulpSass(dartSass),
  browserSync = create(),
  SRC = './src/',
  DEST = './_dest/',
  ALL_JS = SRC + '**/*.js',
  ALL_PUG = SRC + '**/*.pug',
  ALL_SASS = SRC + '**/*.sass',
  ALL_IMGS = SRC + '**/*.{png,jpeg,jpg,gif}', // 'png,jpeg,jpg,gif'.split(',').map(ext => SRC + '**/*.' + ext),

  pugFilters =
    { 'markdown-it': text => parse(text, { gfm: true }) },

  DEV_MODE = 'dev',
  PROD_MODE = 'prod';


let
  mode = DEV_MODE; // dev mode

async function switchProdMode() {
  mode = PROD_MODE;
}

function isMinification() { return PROD_MODE === mode; }

export function html() {
  return src([ALL_PUG, '!' + SRC + '_includes/**/*.*'])
    .pipe(pug({ pretty: !isMinification(), filters: pugFilters }))
    .pipe(dest(DEST));
}

function css() {
  return src(SRC + 'style.sass', { sourcemaps: !isMinification() })
    .pipe(sass({ outputStyle: isMinification() ? 'compressed' : 'expanded' }))
    .pipe(dest(DEST, { sourcemaps: '.' }));
}

// function js() {
//   return src(SRC + 'script.js', { sourcemaps: !isMinification() })
//     // .pipe(isMinification() ? terser() : nop())
//     .pipe(gulpIf(isMinification(), terser()))
//     .pipe(dest(DEST, { sourcemaps: '.' }));
// }

export function img() {
  // console.log('ALL_IMGS=', ALL_IMGS);
  console.log('lastRun(img)=', lastRun(img)); // инкрементальная сборка
  return src(ALL_IMGS, { since: lastRun(img) })
    // .pipe(imagemin())  // пакет не работате требует деграйда
    .pipe(size({ showFiles: true }))
    .pipe(dest(DEST));
}

async function upload() {
  console.log('загружаем файлы на сервер...');
}

function cleanDir() {
  return src(DEST + '**/*.*', { read: false })
    .pipe(clean());
}

async function serv() {
  browserSync.init({ server: { baseDir: DEST } });
  watch(DEST, reload);
  watch(ALL_SASS, css);
  watch(ALL_PUG, html);
  watch(ALL_IMGS, img);
  watch(ALL_JS, js);
}

async function reload() { browserSync.reload(); }



export const make = parallel(html, css, js, img);
export const dev = series(make, serv);
export const prod = series(switchProdMode, cleanDir, make, upload);

export default dev;