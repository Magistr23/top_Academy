'use strict';
main();

function main() {
  асинхронно(
    () => копайЯмки(3,
      () => сажай(3,
        () => засыпьЯмки(3,
          () => console.log('всё!')
        )
      )
    )
  );
  // асинхронно(копайЯмки(сажай(засыпьЯмки())); если каждая функция принимает только 1 параметр и это callback
  console.log('конец моей работы');
}

function асинхронно(callback) {
  setTimeout(callback, 100);
}

function копайЯмки(n, callback) {
  for (let i = 0; i < n; i++)
    делай('ямка');
  callback();
}

function сажай(n, callback) {
  for (let i = 0; i < n; i++)
    делай('саженец');
  callback();
}

function засыпьЯмки(n, callback) {
  for (let i = 0; i < n; i++)
    делай('засыпаю');
  callback();
}

function делай(what) {
  console.log(what);
}

