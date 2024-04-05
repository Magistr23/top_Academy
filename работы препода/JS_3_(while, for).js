/* eslint-disable no-magic-numbers */
/* eslint-disable prefer-const */

'use strict';
// 1 Подсчитать сумму всех чисел в заданном пользователем диапазоне.
let
  lo = 1,
  hi = 100,
  sum = 0;
for (let i = lo; i <= hi; i++)
  sum += i;
console.log('❶ для диапазона от', lo, 'до', hi, ', сумма чисел =', sum);

//2 Запросить 2 числа и найти только наибольший общий делитель.
let
  one = 5 * 7 * 13,
  two = 2 * 7 * 11 * 13,
  max = Math.max(one, two),
  min = Math.min(one, two),
  remainder;
do {
  remainder = max % min;
  max = min;
  min = remainder;
} while (remainder);
console.log('❷ для чисел', one, 'и', two, 'НОД =', max);

//3 Запросить у пользователя число и вывести все делители этого числа.
let
  dividend = 2 * 2 * 2 * 3 * 5 * 7,
  str = '';
for (let i = 2; i <= dividend / 2; i++)
  if (0 === dividend % i)
    str += i + ', ';
console.log('❸ нетривиальные делители', dividend, 'это:', str);

//4 Определить количество цифр в введенном числе.
let
  number = 1234567,
  c = 0;
while (number) {
  c++;
  number = Math.trunc(number / 10);
}
console.log('❹ количество цифр =', c);

//5 Запросить у пользователя 10 чисел и подсчитать ...
let 
  zero = 0, 
  positive = 0,
  negative = 0, 
  odd = 0, 
  even = 0, 
  current;
str = '';
for (let i = 0; i < 10; i++) {
  current = Math.floor(10 * Math.random() - 5);
  str += current + ', ';
  if (current > 0)
    positive++;
  else if (current < 0)
    negative++;
  else
    zero++;
  if (current % 2)
    odd++;
  else
    even++;
}
console.log(`❺ среди набора чисел: ${str}\nнулей:${zero} положительных:${positive}  отрицательных:${negative} четных:${even} нечетных:${odd}`);

// 6 Зациклить калькулятор
let n1, n2, answer, sign;
do {
  n1 = prompt('❻ Введите первое число', 2);
  if (null === n1) break;
  n2 = prompt('Введите второе число', 2);
  if (null === n2) break;
  sign = prompt('Выберите математический знак (+, -, *, /)', '+');
  if (null === sign) break;
  switch (sign) {
    case '+': answer = +n1 + +n2; break;
    case '-': answer = +n1 - +n2; break;
    case '*': answer = +n1 * +n2; break;
    case '/': answer = +n1 / +n2; break;
    default: answer = '???';
  }
} while (confirm(`${n1} ${sign} ${n2} =  ${answer} \n Решить еще один пример?`));

// 7 Запросить у пользователя число и на сколько цифр его сдвинуть
let
  train = 123456789,
  shift = 3;
for (let i = 0; i < shift; i++) {
  let remain = train % 10;
  train = '' + remain + Math.trunc(train / 10);
}
console.log('Результат сдвига: ', train);

// 10. Игра «Угадай число».
lo = 0;
hi = 100;
alert(`Че-ло-век, загадай целое число от ${lo} до ${hi}`);
while (lo < hi) { // lo !== hi    
  let half = Math.floor((hi + lo) / 2);
  console.log(`Теперь я знаю, что число в диапазоне  ${lo} - ${hi}, возьму середину = ${half}`);
  if (confirm(`Число больше чем ${half} ?`))
    lo = half + 1;
  else
    hi = half;
}
alert(`Если че-ло-век не обманул, то загадал ${lo}`); // к этому моменту lo === hi