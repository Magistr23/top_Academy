'use strict';
class Marker {
  level = 100;

  constructor(color = 'black') {
    this.color = color;
    // this.level = 100;
  }

  isEmpty() {
    if (this.level < 0.5) {
      console.error('МАРКЕР ПУСТОЙ - дальнейшая печать невозможна');
      return true;
    }
    return false;
  }

  printText(text) {
    if (this.isEmpty()) return;
    let
      buffer = '',
      i = 0;
    while (this.level >= 0.5 && i < text.length) {
      buffer += text[i];
      if (text[i] !== ' ')
        this.level -= 0.5;
      i++;
    }
    if (buffer.length > 0)
      console.log(`печатаю цветом ${this.color}:`, buffer);
    if (this.level < 0.5)
      console.error('ЧЕРНИЛА ЗАКОНЧИЛИСЬ!!!');
  }
}

class RefillableMarker extends Marker {
  refuel(color) {
    this.color = color || this.color || 'black';
    this.level = 100;
    console.info('МАРКЕР ЗАПРАВЛЕН!!!');
  }

  isEmpty() {
    if (this.level < 0.5) {
      console.error('МАРКЕР ПУСТОЙ - необходимо заправить');
      return true;
    }
    return false;
  }
}

const
  simple = new Marker('red'),
  refillable = new RefillableMarker('green'),
  text = 'Это очень длинный текст \n'.repeat(20);

console.group('Простой маркер');
simple.printText(text);    // печатаю цветом red: Это очень длинный текст.....
// ЧЕРНИЛА ЗАКОНЧИЛИСЬ!!!
simple.printText(text);    //МАРКЕР ПУСТОЙ - дальнейшая печать невозможна
console.groupEnd();

console.group('Заправляющийся маркер');
refillable.printText(text); // печатаю цветом green: Это очень длинный текст.....
// ЧЕРНИЛА ЗАКОНЧИЛИСЬ!!!
refillable.printText(text); // МАРКЕР ПУСТОЙ - необходимо заправить
refillable.refuel('blue');  // МАРКЕР ЗАПРАВЛЕН!!!
refillable.printText(text); // печатаю цветом blue: Это очень длинный текст.....
console.groupEnd();
