'use strict';
/* eslint-disable prefer-const */
/* eslint-disable no-magic-numbers */

// 1. Запросить у пользователя его возраст и определить, кем он является: 
// ребенком (0–2), подростком (12–18), взрослым (18_60) или пенсионером (60– ...).
function ageInterval(age) {
  if (0 <= age && age <= 2) return 'младенец';
  if (2 < age && age <= 12) return 'ребенок';
  if (12 < age && age <= 18) return 'подросток';
  if (18 < age && age <= 60) return 'взрослый';
  if (60 < age) return 'пенсионер';
  return 'неизвестно что';
}
let age = +prompt('Введите ваш возраст', 33);
alert('Вы ' + ageInterval(age));

// 2. Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, 
// который расположен на этой клавише (1–!,2–@, 3–# и т. д).
function shiftSymbol(num) {
  switch (num) {
    case 0: return ')';
    case 1: return '!';
    case 2: return '@';
    case 3: return '#';
    case 4: return '$';
    case 5: return '%';
    case 6: return '^';
    case 7: return '&';
    case 8: return '*';
    case 9: return '(';
  }
}
let num = +prompt('Введите число от 0 до 9', 5);
alert('Спецсимвол: ' + shiftSymbol(num));

// 3. Запросить у пользователя трехзначное и число и проверить,
// есть ли в нем одинаковые цифры.
function checkSameDigits(d1, d2, d3) { // функция тут не обязательна
  // eslint-disable-next-line eqeqeq
  return d1 == d2 || d2 == d3 || d3 == d1;
}

let num3digit = +prompt('Введите трехзначное число', 123),
  n3 = num3digit % 10,
  n2 = Math.trunc(num3digit / 10) % 10,
  n1 = Math.trunc(num3digit / 100) % 10;
alert(checkSameDigits(n1, n2, n3) ? 'Одинаковые цифры есть 👍' : 'Одинаковых цифр нет 👎');

// 4. Запросить у пользователя год и проверить, високосный он
// или нет. Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.
function isLeapYear(year) {
  return 0 === year % 400 || 0 === year % 4 && year % 100;
}


// 5. Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.
function isPalindromeNumber(n) {
  let d5 = n % 10; n = Math.trunc(n / 10);
  let d4 = n % 10; n = Math.trunc(n / 10);
  /*            */ n = Math.trunc(n / 10);
  let d2 = n % 10; n = Math.trunc(n / 10);
  let d1 = n % 10;
  return d5 === d1 && d4 === d2;
}
let fiveDigit = +prompt('Введите пятизначное число', 12345);
alert('Число - ' + (isPalindromeNumber(fiveDigit) ? 'палиндром 👌' : 'не палиндром 🙄'));

// 6. Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту 
// хочет перевести: EUR, UAN или AZN, и получает в ответ соответствующую сумму.
function getExchangeRate(threeLetters) {
  switch (threeLetters.toUpperCase()) {
    case 'USD': return 1;
    case 'EUR': return 1.03;
    case 'RUB': return 65;
    case 'UAH': return 37;
    case 'AZN': return 1.7;
  }
}

let
  usd = +prompt('Введите количество USD', 1000),
  currency = prompt('В какую валюту желаете перевести (EUR, UAH или AZN)', 'EUR'),
  exchangeRate = getExchangeRate(currency);
alert(`${usd} USD  По курсу ${exchangeRate} будет переведено в ${exchangeRate * usd} ${currency}`);

// 7. Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой:
//  от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%.
function calcDiscount(cost) {
  return cost >= 500 ? 7 : cost >= 300 ? 5 : cost >= 200 ? 3 : 0;
}

let
  cost = +prompt('Введите сумму вашей покупки', 380),
  discount = calcDiscount(cost);
alert(`Стоимость с учетом скидки ${discount}% составит: ${cost - cost * discount / 100}`);

// 8. Запросить у пользователя длину окружности и периметр квадрата. Определить, может ли такая окружность поместиться в указанный квадрат.
function getDiameterByLength(l) { // функция тут не обязательна
  return l / Math.PI;
}

let
  circleLength = +prompt('Введите длину окружности', 315),
  squarePerimeter = +prompt('Введите периметр квадрата', 400);
alert('Такая окружность ' + (getDiameterByLength(circleLength) <= squarePerimeter / 4 ? 'поместиться' : 'не поместиться') + ' в указанный квадрат');


// 9. Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа.
//  За каждый правильный ответ начисляется 2 балла. После вопросов выведите пользователю количество набранных баллов.

function ask(question, correct) {
  // eslint-disable-next-line eqeqeq
  if (prompt(question) == correct)
    return 2;
  return 0;
}

let record =
  0
  + ask('Как называется оператор "&&"? \n1) - Логическое \'ИЛИ\' \n2) - Логическое \'И\' \n3) - Другое', 2)
  + ask('Для чего используется оператор "!!"? \n1) - Это оператор отрицание \n2) - Логическое \'ИЛИ\' \n3) - Приводит к логическому значению  ', 3)
  + ask('Какие значения в JS являются ложными? \n1) - false \n2) - 0 и false \n3) - 0, false, \'\', null, undefined и NaN ', 3);
alert('Вы набрали ' + record + ' баллов за ответы.');

// 10. Запросить дату (день, месяц, год) и вывести следующую за ней дату. Учтите возможность перехода на следующий
// месяц, год, а также високосный год. 

function daysInMonth(month, year) { // возвращает число дней в месяце
  switch (month) {
    case 2: // февраль 
      return isLeapYear(year) ? 29 : 28;
    case 4: // апрель
    case 6: // июнь
    case 9: // сентябрь
    case 11:  // ноябрь
      return 30;
  }
  return 31;
}

function nextDay(year, month, day) { // возвращает дату следующую за переданной
  day++;// day = day + 1;
  if (day > daysInMonth(month, year)) {
    day = 1; // первое число следующего месяца
    month++;// month = month + 1;
  }
  if (month > 12) {
    month = 1; // первый месяц следующего года
    year++; // year = year + 1;
  }
  return year + '-' + month + '-' + day;
}

let day = +prompt('Введите день даты'),
  month = +prompt('Введите месяц даты'),
  year = +prompt('Введите год даты');

alert(`Следующая за вашей дата - ${nextDay(year, month, day)}`);

// проверка isPalindromeNumber
console.log('12320 палиндром? =', isPalindromeNumber(12320));
console.log('12321 палиндром? =', isPalindromeNumber(12321));

// проверка isLeapYear
console.log('2000 високосный? =', isLeapYear(2000));
console.log('2001 високосный? =', isLeapYear(2001));
console.log('1900 високосный? =', isLeapYear(1900));

// проверка daysNumberInMonth
for (let i = 1; i <= 12; i++)
  console.log('В ', i, ' месяце простого года: ', daysInMonth(i, 2021), ' дней');
console.log('В феврале високосного (2024) года: ', daysInMonth(2, 2024), ' дней');

// проверка nextDay
console.log('2021-01-01 + 1 = ', nextDay(2021, 1, 1));
console.log('2021-10-31 + 1 = ', nextDay(2021, 10, 31));
console.log('2021-12-31 + 1 = ', nextDay(2021, 12, 31));
console.log('2020-2-28 + 1 = ', nextDay(2020, 2, 28));
console.log('2021-2-28 + 1 = ', nextDay(2021, 2, 28));

// приём Reverse switch https://dev.to/gabrielrufino/reverse-switch-26f3
function ageInterval2(age) {
  switch (true) {
    case age < 0: return 'мало, отрицательный возраст';
    case 120 < age: return 'много';
    case age <= 2: return 'младенец';
    case age <= 12: return 'ребенок';
    case age <= 18: return 'подросток';
    case age <= 60: return 'взрослый';
    case 60 < age: return 'пенсионер';
  }
  return 'неизвестно что';
}