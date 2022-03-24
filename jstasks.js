/* 1. Случайное число от min до max
Встроенный метод Math.random() возвращает случайное число от 0 (включительно) до 1 (но не включая 1)
Напишите функцию random(min, max), которая генерирует случайное число с плавающей точкой от min до max (но не включая max). */
function randomM(min, max) {
    return (max-min)*Math.random() + min;
}
// console.log(randomM(1, 5));

/* 2. Сделать первый символ заглавным
Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом.
Например: ucFirst("вася") == "Вася"; */
function ucFirst(str) {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
    // return charAt(0).toUpperCase() + str.slice(1);
}
// console.log(ucFirst('вася'));
// console.log(ucFirst('s12'));
// console.log(ucFirst(''));

/* 3. Проверка на спам
Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.
Функция должна быть нечувствительна к регистру:
checkSpam('buy ViAgRA now') == true
checkSpam('free xxxxx') == true
checkSpam("innocent rabbit") == false */
function checkSpam(str) {
    let newStr = str.toLowerCase();
    return newStr.includes('viagra') || newStr.includes('xxx')
}
// console.log(checkSpam('buy ViAgRA now'));
// console.log(checkSpam('free xxxxx'));
// console.log(checkSpam("innocent rabbit"));

/* 4. Усечение строки
Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.
Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.
Например:
truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) = "Вот, что мне хотело…"
truncate("Всем привет!", 20) = "Всем привет!" */
function truncate(str, maxlength) {
    if ( (str.length - 1) <= maxlength) {
        return str
    }
    return `${str.substr(0, maxlength - 1)}…`;
}
// console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));
// console.log(truncate("Всем привет!", 20));

function truncate2(str, maxlength) {
    return (str.length > maxlength) ? str.slice(0, maxlength - 1) + '…' : str;
}
// console.log(truncate2("Вот, что мне хотелось бы сказать на эту тему:", 20));
// console.log(truncate2("Всем привет!", 20));

/* 5. Выделить число
Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.
Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.
Например:
alert( extractCurrencyValue('$120') === 120 ); // true */
function extractCurrencyValue(str) {
    return +str.slice(1)
}
// console.log(extractCurrencyValue('$120'));

/* 6. Постфиксная и префиксная формы
Чему будут равны переменные a, b, c и d в примере ниже?
let a = 1, b = 1;
let c = ++a; // ?
let d = b++; // ? */

function preIncrement(number) {
    return ++number;
}

function postIncrement(number) {
    return number++;
}
// console.log(preIncrement(1),postIncrement(1))  //result = 2 ; 1

/* 7. Результат присваивания
Чему будут равны переменные a и x после исполнения кода в примере ниже?
let a = 2;
let x = 1 + (a *= 2); */

function assignmentResult() {
    let a = 2;
    let x = 1 + (a *= 2);
    return x;
}
// console.log(assignmentResult()); // 5

/* 8. Преобразование типов
Какой результат будет у выражений ниже?
"" + 1 + 0
"" - 1 + 0
true + false
6 / "3"
"2" * "3"
4 + 5 + "px"
"$" + 4 + 5
"4" - 2
"4px" - 2
7 / 0
"  -9  " + 5
"  -9  " - 5
null + 1
undefined + 1
" \t \n" - 2 */
function typeConversion() {
    let a = "" + 1 + 0;
    let b = "" - 1 + 0;
    let c = true + false;
    let d = 6 / "3";
    let e = "2" * "3";
    let f = 4 + 5 + "px";
    let g = "$" + 4 + 5;
    let h = "4" - 2;
    let i = "4px" - 2;
    let j = 7 / 0;
    let k = "  -9  " + 5;
    let l = "  -9  " - 5;
    let m = null + 1;
    let n = undefined + 1;
    let o = " \t \n" - 2;
    let arr = [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o]
    return arr
}
// console.log (typeConversion())

/* 9. Исправьте сложение
Ниже приведён код, который запрашивает у пользователя два числа и показывает их сумму.
Он работает неправильно. Код в примере выводит 12 (для значения полей по умолчанию).
В чём ошибка? Исправьте её. Результат должен быть 3.
let a = prompt("Первое число?", 1);
let b = prompt("Второе число?", 2);
alert(a + b); // 1 */
function correctAddition(){
    let a = "1";
    let b = "2";
    return +a + +b
}
// console.log(correctAddition()); // 12

/* 10.Что выведет alert (ИЛИ)?
Что выведет код ниже?
alert( null || 2 || undefined ); */
function or() {
    return null || 2 || undefined
}
// console.log(or()); //2

/* 11. Что выведет alert (ИЛИ)?
Что выведет код ниже?
alert( alert(1) || 2 || alert(3) ); */
function or2() {
    return 1 || 2 || 3
}
// console.log(or2())

/* 12. Что выведет этот код?
Что выведет код ниже?
alert( null || 2 && 3 || 4 ); */
function checkLogical() {
    return null || 2 && 3 || 4
}
// console.log (checkLogical());

/* 13. Проверка значения из диапазона
Напишите условие if для проверки, что переменная age находится в диапазоне между 14 и 90 включительно. */
function checkRange(age) {
    if (age <= 90 && age >= 14) {
        return true
    }
    return false
}
// console.log(checkRange(14))
// console.log(checkRange(90))
// console.log(checkRange(29))
// console.log(checkRange(91))
// console.log(checkRange(13))

// 13.2 Через регулярное выражение
function checkRangeNew(age) {
    return (age <= 90 && age >=14) ? true : false;
}
// console.log(checkRangeNew(14))
// console.log(checkRangeNew(90))
// console.log(checkRangeNew(29))
// console.log(checkRangeNew(91))
// console.log(checkRangeNew(13))

/* 14. Проверка значения вне диапазона
Напишите условие if для проверки, что значение переменной age НЕ находится в диапазоне 14 и 90 включительно.
Напишите два варианта: первый с использованием оператора НЕ !, второй – без этого оператора. */
function checkOutRange1(age) {
    return (age < 90 && age > 14) ? false : true;
}
// console.log(checkOutRange1(14))
// console.log(checkOutRange1(90))
// console.log(checkOutRange1(29))
// console.log(checkOutRange1(91))
// console.log(checkOutRange1(13))

function checkOutRange2(age) {
    return !(age < 90 && age > 14) ? true : false;
}
// console.log(checkOutRange2(14))
// console.log(checkOutRange2(90))
// console.log(checkOutRange2(29))
// console.log(checkOutRange2(91))
// console.log(checkOutRange2(13))

/* 15. Вопрос о "if"
Какие из перечисленных ниже alert выполнятся?
Какие конкретно значения будут результатами выражений в условиях if(...)?
if (-1 || 0) alert( 'first' );
if (-1 && 0) alert( 'second' );
if (null || -1 && 1) alert( 'third' ); */

function checkAlert() {
    let firstIf, secondIf, thirdIf
    if (-1 || 0) {
        firstIf = `выполнится`
    } else {
        firstIf = `не выполнится`
    }
    if (-1 && 0) {
        secondIf = `выполнится`
    } else {
        secondIf = `не выполнится`
    }
    if (null || -1 && 1) {
        thirdIf = `выполнится`
    } else {
        thirdIf = `не выплнится`
    }

    let arr = [firstIf, secondIf, thirdIf];

    return arr
}
// console.log(checkAlert())

/* 16. Проверка логина
Напишите код, который будет спрашивать логин с помощью prompt.
Если посетитель вводит «Админ», то prompt запрашивает пароль, если ничего не введено или нажата клавиша Esc – показать «Отменено», в противном случае отобразить «Я вас не знаю».
Пароль проверять так:
Если введён пароль «Я главный», то выводить «Здравствуйте!»,
Иначе – «Неверный пароль»,
При отмене – «Отменено».
Блок-схема: здесь в последней задаче https://learn.javascript.ru/logical-operators
Для решения используйте вложенные блоки if. Обращайте внимание на стиль и читаемость кода.
Подсказка: передача пустого ввода в приглашение prompt возвращает пустую строку ''. Нажатие клавиши Esc во время запроса возвращаетnull. */

function checkLogin(login, pass) {
    if ( (login === 'Админ') && (pass === 'Я главный') ) {
         return 'Здравствуйте'
    }

    if ( (login === 'Админ') && (pass !== 'Я главный') ) {
        return 'Неверный пароль'
    }

    if (login !== 'Админ') {
        return 'Отменено'
    }
}
// console.log(checkLogin('Админ', 'Я главный'))
// console.log(checkLogin('Админ', 'sdfsdf'))
// console.log(checkLogin('sdcsdc', 'Я главный'))

// 16.1 через промт/алерт
/* let userName = prompt('кто там?', '');

if (userName == 'Админ') {
  let pass = prompt('Пароль?', '')

  if (pass == 'Я главный') {
    alert('Здравствуйте')
  } else if (pass == '' || pass == null) {
    alert('Отменено')
  } else {
    alert('Неверный пароль')
  }
} else if (userName == '' || userName == null) {
  alert('Отменено')
} else {
  alert('Я вас не знаю')
} */

/* 17. Плохой стиль
Какие недостатки вы видите в стиле написания кода этого примера?
function pow(x,n)
{
  let result=1;
  for(let i=0;i<n;i++) {result*=x;}
  return result;
}

let x=prompt("x?",''), n=prompt("n?",'')
if (n<=0)
{
  alert(`Степень ${n} не поддерживается, введите целую степень, большую 0`);
}
else
{
  alert(pow(x,n))
} */

// Исправленный код
/* function pow(x, n) {
    let result = 1;

    for (let i = 0; i < n; i++) {
        result *= x;
    }

    return result;
}

let x = prompt('x?', '');
let n = prompt('n?', '');

    if (n <= 0) {
        alert(`Степень ${n} не поддерживается, введите целую степень, большую 0`);
} else {
    alert( pow(x, n) );
} */

/* 18. Вычислить факториал
Факториал натурального числа – это число, умноженное на "себя минус один", затем на "себя минус два", и так далее до 1. Факториал n обозначается как n!
Определение факториала можно записать как:

n! = n * (n - 1) * (n - 2) * ...*1
Примеры значений для разных n:

0! = 1
1! = 1
2! = 2 * 1 = 2
3! = 3 * 2 * 1 = 6
4! = 4 * 3 * 2 * 1 = 24
5! = 5 * 4 * 3 * 2 * 1 = 120
Обратите внимание, что факториал 0 и 1 равен 1. Это важно и нужно учесть в решении.

Задача – написать функцию factorial(n), которая возвращает n!, используя цикл (while или for). Решить нужно именно циклом, а не рекурсией.

factorial(0); // 1
factorial(1); // 1
factorial(3); // 6
factorial(5); // 120 */
function factorial(n) {
    let result = 1;

    if (n === 0) {
        return result;
    } else {
        for (let i = 1; i <= n; i++) {
            result *= i;
        }
    }

    return result;
}

// 19. Допишите функцию валидации имени пользователя

/**
* Эту функцию трогать не нужно
*/
function print(text) {
 console.log(text);
}

/**
* Эту функцию нужно поменять так,
* чтобы функция sayHello работала корректно
*/

function isValid(name) {
    if (name === null) {
        return false;
    }

    if (name.length > 3 && name.indexOf(' ') === -1) {
        return true;
    }

    return false;
}

function sayHello() {
 let userName = prompt('Введите ваше имя');

 if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
 } else {
    print('Некорректное имя');
 }
}

/* 20.# Сделать первый символ заглавным

Напишите функцию `ucFirst(str)`, возвращающую строку `str` с заглавным первым символом. Например:

```js
ucFirst('вася') === 'Вася';
```

Обратите внимание, что функция также должна работать со строкой:
- содержащей только один символ `'В'`
- не содержащей символы `''`
```js
ucFirst('в') === 'В';
ucFirst('') === '';
``` */

function ucFirst(str) {
    if (str === '') {
        return str;
    }

    return str[0].toUpperCase() + str.slice(1);
}

// console.log(ucFirst('а'));
// console.log(ucFirst('я вас призераю'));
// console.log(ucFirst('П'));
// console.log(ucFirst(''));

/* 21. # Проверка на спам

Напишите функцию `checkSpam(str)`, возвращающую `true`, если `str` содержит `'1xBet'` или `'XXX'`, а иначе `false`.

Функция должна быть нечувствительна к регистру:

```js
checkSpam('1XbeT now') === true
checkSpam('free xxxxx') === true
checkSpam('innocent rabbit') === false
``` */

function checkSpam(str) {
    let upperStr = str.toUpperCase();
    let checkWord1 = '1xBet'.toUpperCase();
    let checkWord2 = 'XXX';

    if (upperStr.includes(checkWord1) === true ||
        upperStr.includes(checkWord2) === true) {
            return true;
    }

    return false;
  }

// console.log(checkSpam('1XbeT now'));
// console.log(checkSpam('free xxxxx'));
// console.log(checkSpam('innocent rabbit'));

/* 22. # Усечение строки
Создайте функцию `truncate(str, maxlength)`, которая проверяет длину строки `str` и, если она превосходит `maxlength`, заменяет конец `str` на `"…"`, так, чтобы её длина стала равна `maxlength`.
Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.
Например:
```js
truncate('Вот, что мне хотелось бы сказать на эту тему:', 20) === 'Вот, что мне хотело…';
truncate('Всем привет!', 20) === 'Всем привет!';
```
Обратите внимание, что в решении нужно использовать именно троеточие из условия (просто скопируйте и вставьте его) :) */

function truncate(str, maxlength) {
  if (str.length <= maxlength) {
    return str;
  }

  if (str.length > maxlength) {
    return str.slice(0, maxlength - 1) + '…';
  }
}

//   23. Opposite number
  function opposite(number) {
    return -number;
  }

//   24. Even or Odd
function even_or_odd(number) {
  if (number % 2 === 0) {
    return 'Even';
  } else {
    return 'Odd';
  }
}

// 25. century
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.
function century(year) {
  if (year % 100 === 0) {
    return year/100;
  } else {
    return Math.floor(year/100) + 1;
  }
}

/* 26. Abbreviate a Two Word Name
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
The output should be two capital letters with a dot separating them.
It should look like this:
Sam Harris => S.H
patrick feeney => P.F */
function abbrevName(name){
  let arrWords = name.split(' ');
  return arrWords[0][0].toUpperCase() + '.' + arrWords[1][0].toUpperCase()
}

// 27. Reversed Strings
function solution(str){
    return str.split('').reverse().join('')
  }

/*   28. Credit Card Mask
  Examples
  maskify("4556364607935616") == "############5616"
  maskify(     "64607935616") ==      "#######5616"
  maskify(               "1") ==                "1"
  maskify(                "") ==                 ""
  maskify("Skippy")                                   == "##ippy"
  maskify("Nananananananananananananananana Batman!") == "####################################man!" */
  function maskify(cc) {
    if (cc == '' || cc.length <= 4) {
      return cc
    }
    
    let arr = cc.split('');
    for (let i = 0; i < cc.length - 4; i++) {
      arr[i] = '#';
    }
    
    return arr.join('');
  }

//   29. Remove First and Last Character
function removeChar(str){
  return str.slice(1, str.length - 1)
}

/* 30. Create Phone Number
Example
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890" */
function createPhoneNumber(numbers){
  return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`
}

/* 31. Leap Years
In this kata you should simply determine, whether a given year is a leap year or not. In case you don't know the rules, here they are:
years divisible by 4 are leap years
but years divisible by 100 are not leap years
but years divisible by 400 are leap years */
function isLeapYear(year) {
  if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
    return true;
  }
  
  return false
}

/* 32. If you can't sleep, just count sheep!!
If you can't sleep, just count sheep!!
Task:
Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers. */
function countSheep(num){
  if (num > 0) {
    let arrNum = []
    for (let i = 0; i < num; i++) {
      arrNum.push(`${i+1} sheep...`)
    }
    return arrNum.join('');
  }
  
  return ''
}

function countSheep(num){
  let str = '';
  for (let i = 0; i < num; i++) {
    str += `${i+1} sheep...`;
  }
  
  return str;
}

/* 33. Вопрос о "if"
Какие из перечисленных ниже alert выполнятся?
Какие конкретно значения будут результатами выражений в условиях if(...)?
if (-1 || 0) alert( 'first' );
if (-1 && 0) alert( 'second' );
if (null || -1 && 1) alert( 'third' ); */
function checkAlert() {
  let firstValue = (-1 || 0); 
  let secondValue = (-1 && 0);
  let thirdValue = (null || -1 && 1);
  let arr = [firstValue, secondValue, thirdValue]
  return arr
}
// console.log(checkAlert())

/* 34. Привет, object
Напишите код, выполнив задание из каждого пункта отдельной строкой:

Создайте пустой объект user.
Добавьте свойство name со значением John.
Добавьте свойство surname со значением Smith.
Измените значение свойства name на Pete.
Удалите свойство name из объекта. */

let emptyObject = {};
emptyObject['userName'] = 'John';
emptyObject['surname'] = 'Smith';
emptyObject['userName'] = 'Pete';
delete emptyObject['userName'];

// console.log(emptyObject);

/* 35. Проверка на пустоту
Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

Должно работать так:

let schedule = {};
alert( isEmpty(schedule) ); // true
schedule["8:30"] = "get up";
alert( isEmpty(schedule) ); // false */

function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }

  return true;
}

// console.log(isEmpty({}));
// console.log(isEmpty({age: 35, surname: 'Ivanov'}));

/* 36. Объекты-константы?
Можно ли изменить объект, объявленный с помощью const? Как вы думаете?

const user = {
  name: "John"
};
// это будет работать?
user.name = "Pete"; */

const user = {
  surname: 'Ivanov'
};

user['surname'] = 'Pes';

// console.log(user);

/* 37. Сумма свойств объекта
У нас есть объект, в котором хранятся зарплаты нашей команды:

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.
Если объект salaries пуст, то результат должен быть 0. */

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

function sumSalaries(obj) {
  let sum = 0;
  for (let key in obj) {
    sum += obj[key]
  }

  return sum;
}

// console.log(sumSalaries(salaries));

/* 38. Умножаем все числовые свойства на 2
Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

Например:

// до вызова функции
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

// после вызова функции
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};
Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять объект.

P.S. Используйте typeof для проверки, что значение свойства числовое. */

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] === 'number') {
      obj[key] *= 2;
    }
  }
  return menu
}

// console.log(menu);
// console.log(multiplyNumeric(menu));

/* 39. У нас есть объект, в котором хранятся зарплаты нашей команды:

let salaries = {
  John: 1000,
  Ann: 1600,
  Pete: 1300,
  month: 'December',
  currency: 'USD',
  isPayed: false
}
Напишите функцию для суммирования всех зарплат. */

let salariesEmployees = {
  John: 1000,
  Ann: 1600,
  Pete: 1300,
  month: 'December',
  currency: 'USD',
  isPayed: false
}

function sumSalary(salaries) {
  let sum = 0;
  for (let key in salaries) {
    if (typeof salaries[key] === 'number' && isFinite(salaries[key])) {
      sum += salaries[key];
    }
  }
  return sum;
}

// console.log(sumSalary(salariesEmployees))

/* 40. String insert values
Given a string and an object/array you need to return a formatted string. Replace all occurrences in the string where the name of a key in the object is surrounded by curly brackets.
Inherited object properties should not be applied */

// function format(str, obj) {
//   return str.replace(/{foo}/, 'Jack').replace(/{bar}/, 'sandwch')
// }

// let strTest = 'Hello {foo} - make me a {bar}'

// let objTest = {
//   foo: 'Jack',
//   bar: 'sandwich'
// }

function format(str, obj) {
  if (!Array.isArray(obj)) {
    for (let key in obj) {
      let word1 = `{${key}}`;
      let word2 = obj[key];

      str = str.replace(new RegExp(word1, 'g'), word2);
    }

  return str
  }

  for (let i = 0; i < obj.length; i++) {
    let word1 = `\\{${i}}`;
    let word2 = obj[i];

    str = str.replace(new RegExp(word1, 'g'), word2);
  }

  return str
}

let strTest = 'Hello {foo} - make me a {bar}'

let objTest = {
  foo: 'Jack',
  bar: 'sandwich'
}

let arrTest = ['Jack', 'sandwich'];

// console.log(format('Hello {0} - make me a {1}', ['Jack', 'sandwich']));

/* 41. Проверка синтаксиса
Каким будет результат выполнения этого кода?

let user = {
  name: "Джон",
  go: function() { alert(this.name) }
}

(user.go)() */

let user2 = {
  name: "Джон",
  go: function() { return this.name }
}

// console.log(user2.go());
// console.log((user2.go)());

/* 42. Объясните значение "this"
В представленном ниже коде мы намерены вызвать obj.go() метод 4 раза подряд.

Но вызовы (1) и (2) работают иначе, чем (3) и (4). Почему?

let obj, method;

obj = {
  go: function() { alert(this); }
};

obj.go();               // (1) [object Object]

(obj.go)();             // (2) [object Object]

(method = obj.go)();    // (3) undefined

(obj.go || obj.stop)(); // (4) undefined */

obj = {
  go: function() { return this }
};

// console.log(obj.go())

/* 43. Использование "this" в литерале объекта
важность: 5
Здесь функция makeUser возвращает объект.

Каким будет результат при обращении к свойству объекта ref? Почему?

function makeUser() {
  return {
    name: "Джон",
    ref: this
  };
};

let user = makeUser();

alert( user.ref.name ); // Каким будет результат? */

function makeUser() {
  return {
    name: "Джон",
    ref: this
  };
};

let user3 = makeUser();

// console.log(user3.ref.name); // makeUser().ref.name, this теряется

/* 44. Создайте калькулятор
Создайте объект calculator (калькулятор) с тремя методами:

read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
sum() (суммировать) возвращает сумму сохранённых значений.
mul() (умножить) перемножает сохранённые значения и возвращает результат.
let calculator = {
  // ... ваш код ...
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() ); */

let calculator = {
  read(a, b) {
    this.a = a;
    this.b = b;
  },

  sum() {
    return this['a'] + this['b'];
  },

  mul() {
    return this['a'] * this['b'];
  }
}

// console.log(
//   calculator.read(2, 3),
//   calculator.sum(),
//   calculator.mul()
//   )

/* 45. Цепь вызовов

Это ladder (лестница) – объект, который позволяет подниматься вверх и спускаться:

let ladder = {
  step: 0,
  up() {
    this.step++;
  },
  down() {
    this.step--;
  },
  showStep: function() { // показывает текущую ступеньку
    alert( this.step );
  }
};
Теперь, если нам нужно сделать несколько последовательных вызовов, мы можем выполнить это так:

ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
Измените код методов up, down и showStep таким образом, чтобы их вызов можно было сделать по цепочке, например так:

ladder.up().up().down().showStep(); // 1
Такой подход широко используется в библиотеках JavaScript. */

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this
  },
  down() {
    this.step--;
    return this
  },
  showStep: function() { // показывает текущую ступеньку
    return(this.step);
  }
};

// console.log(ladder.up().up().down().up().down().showStep())

/* 46. Скопирован ли массив?
Что выведет следующий код?

let fruits = ["Яблоки", "Груша", "Апельсин"];

// добавляем новое значение в "копию"
let shoppingCart = fruits;
shoppingCart.push("Банан");

// что в fruits?
alert( fruits.length ); // ? */

let fruits = ["Яблоки", "Груша", "Апельсин"];

// добавляем новое значение в "копию"
let shoppingCart = fruits;
shoppingCart.push("Банан");

// что в fruits?
// console.log(fruits.length)


// Должно быть ["Яблоки", "Груша", "Апельсин", "Банан"]
// length = 4



/* 47. Операции с массивами
Давайте произведём 5 операций с массивом.

Создайте массив styles с элементами «Джаз» и «Блюз».
Добавьте «Рок-н-ролл» в конец.
Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
Удалите первый элемент массива и покажите его.
Вставьте «Рэп» и «Регги» в начало массива.
Массив по ходу выполнения операций:

Джаз, Блюз
Джаз, Блюз, Рок-н-ролл
Джаз, Классика, Рок-н-ролл
Классика, Рок-н-ролл
Рэп, Регги, Классика, Рок-н-ролл */

let styles = ['Джаз','Блюз'];
// console.log(styles);
styles.push('Рок-н-ролл');
// console.log(styles);
styles[Math.floor((styles.length - 1) / 2)] = 'Классика';
// console.log(styles);
styles.shift();
// console.log(styles);
styles.unshift('Рэп','Регги')
// console.log(styles);

// 48. Вызов в контексте массива

let arr = ["a", "b"];

arr.push(function() {
  return this
})

// console.log(arr[2]());

/* 48. Сумма введённых чисел
важность: 4
Напишите функцию sumInput(), которая:

Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
Подсчитывает и возвращает сумму элементов массива.
P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0». */

function sumInput() {
  
  let numbers = [];
  
  while (true) {
    let value = prompt('Введите число', 0);
    if (value === '' || value === null || !isFinite(value)) break;
    
    numbers.push(+value);
  }
  
  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
}

// alert(sumInput()); //работает в браузере, т.к. модальные окна

/* 49. Подмассив наибольшей суммы
На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].

Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.

Функция getMaxSubSum(arr) должна возвращать эту сумму.

Например:

getMaxSubSum([-1, 2, 3, -9]) = 5 (сумма выделенных)
getMaxSubSum([2, -1, 2, 3, -9]) = 6
getMaxSubSum([-1, 2, 3, -9, 11]) = 11
getMaxSubSum([-2, -1, 1, 2]) = 3
getMaxSubSum([100, -9, 2, -3, 5]) = 100
getMaxSubSum([1, 2, 3]) = 6 (берём все)
Если все элементы отрицательные – ничего не берём(подмассив пустой) и сумма равна «0»:

getMaxSubSum([-1, -2, -3]) = 0
Попробуйте придумать быстрое решение: O(n2), а лучше за О(n) операций. */

function getMaxSubSum(arr) {
  
  let maxSumNumbers = [];

  for (let j = 0; j < arr.length; j++) {
    let sum = 0;

    for (let i = j; i < arr.length; i++) {
      sum = sum + arr[i];
      maxSumNumbers.push(sum);
    }
  }

  if (Math.max.apply(null, maxSumNumbers) < 0) return 0
  return Math.max.apply(null, maxSumNumbers)
}

// console.log(getMaxSubSum([0, 1, 2, 3]));
// console.log(getMaxSubSum([-1, -2, -3, -4]));


// быстрое решение, не мое
function getMaxSubSum(arr) {
  let maxSum = 0;
  let partialSum = 0;

  for (let item of arr) { // для каждого элемента массива
    partialSum += item; // добавляем значение элемента к partialSum
    maxSum = Math.max(maxSum, partialSum); // запоминаем максимум на данный момент
    if (partialSum < 0) partialSum = 0; // ноль если отрицательное
  }

  return maxSum;
}

// 50. Проверка ссылок ф-ий и объектов (не задача)

// Хранение по ссылке функции
let multiply = function(a, b) {
  return a * b;
}
let calculate = multiply;
multiply = null;

// console.log(calculate(2, 3));
// console.log(multiply)

// Хранение по ссылке объекты

let obj1 = {
  name: 'Den',
  bro: 'pes'
}

let obj2 = obj1;
obj1 = null;

// console.log(obj2);
// console.log(obj1);

// хранение по ссылке в функциях работает также, как в обьектах.
// доступ к обьекту сохраняется даже, если оригинал занулили

// 51. Задание функций

// декларативный 
function pesDec(firstName, secondName) {

}

// expression
let pesExpr = function(firstName, secondName) {

};

// arrow 1
let pesArrow1 = (firstName, secondName) => {

};

// arrow2
let pesArrow2 = firstName => {

};

// arrow3
let pesArrow3 = firstname => firstname + 'man';

// console.log(pesArrow3('pes'));

// 52. Методы массивов

//splice
let pesArray = ['den', 'vova', 'dachok'];
// console.log(pesArray);

// pesArray.splice(1, 1); //[ 'den', 'dachok' ]
// pesArray.splice(0, 0, 'Shredy'); //[ 'Shredy', 'den', 'vova', 'dachok' ]
// pesArray.splice(-1, 1, 'Boris'); //[ 'den', 'vova', 'Boris' ]
// pesArray.splice(-1, 0, 'Zheka'); // [ 'den', 'vova', 'Zheka', 'dachok' ]
// pesArray.splice(0, 3, 'delete'); //[ 'delete' ]
// pesArray.splice(0, 4, 'mmm'); //[ 'mmm' ]
pesArray.splice(-2, 2, 1)

// let resultOfSplice = pesArray.splice(0, 1, 'Morzh');
// console.log(resultOfSplice);

// console.log(pesArray);

//slice
let sliceArray = pesArray.slice(0, 1);
let sliceArray2 = pesArray.slice(0);
let sliceArray3 = pesArray.slice(-1);

// console.log(sliceArray);
// console.log(sliceArray2);
// console.log(sliceArray3);

//concat
let arrNumbers = [1, 2, 3, 4, 5, 6];
let emptyArr = [];

let newArr = arrNumbers.concat([99, 98, 97]);
let newArr2 = emptyArr.concat(123, 32222, 'PES', 'lol', [1111, 2222, 3333]);
let newArr3 = arrNumbers.concat({name: 'Den', secondName: 'Pes'});
let newArr4 = arrNumbers.concat({0: 'Den', 1: 'Pes', [Symbol.isConcatSpreadable]: true, length: 2})

// console.log(newArr);
// console.log(newArr2);
// console.log(newArr3);
// console.log(newArr4)

//forEach
let dragons = [
  {
    name: 'Gorunych',
    type: 'Big',
    features: ['fire', '3 heads'],
  },
  {
    name: 'Fluffy',
    type: 'Small',
    features: ['fire', 'big tale'],
  },
  {
    name: 'Roman',
    type: 'Medium',
    features: ['Super vision', 'strength'],
  }
];

let dragonsNames = [];
dragons.forEach(dragon => {
  if (dragon.type !== 'Small') {
    dragonsNames.push(dragon.name);
  }
});

// console.log(dragonsNames)

// indexOf/lastIndexOf и includes
let arrIndex = ['pes', 'den', 'klon']
// console.log(arrIndex.indexOf('pes'));
// console.log(arrIndex.lastIndexOf('den'));
// console.log(arrIndex.lastIndexOf('klon'));
// console.log(arrIndex.includes('pes'));

//find и findindex
let users = [
  {id: 1, name: "Вася"},
  {id: 2, name: "Петя"},
  {id: 3, name: "Маша"}
];

let elUsers = users.find(item => item.id == 2);
let elIndexUsers = users.findIndex(item => item.id == 1);

// console.log(elUsers);
// console.log(elIndexUsers);

// filter
let someUsers = users.filter(x => x.name == 'Вася');

// console.log(someUsers)

// map
let arrMap = ['pes', 'pes', 'pes'];
let newArrMap = arrMap.map(x => x.length);
let newArrMap2 = arrMap.map(x => {if (x === 'pes'){return 'den'}});

// console.log(newArrMap);
// console.log(newArrMap2);

// sort(fn)
let arrNumbers2 = [ 1, 2, 15 ];

function compare(a, b) {
  if (a > b) return 1; // если первое значение больше второго
  if (a == b) return 0; // если равны
  if (a < b) return -1; // если первое значение меньше второго
}

// console.log(arrNumbers2.sort()) //[ 1, 15, 2 ] лексикграфическая сортировка
// console.log(arrNumbers2.sort(compare)) //[ 1, 2, 15 ]
// console.log([1, -2, -15, 2, 0, 8].sort())
// console.log([1, -2, -15, 2, 0, 8].sort((a, b) => {console.log(a + " <> " + b)}))
// console.log(arrNumbers2.sort(function pes(a, b) {return a - b}))
// console.log(arrNumbers2.sort((a, b) => a - b))

//reverse
let arrNumbers3 = [1, 2, 3, 4, 5]

// console.log(arrNumbers3.reverse())

//split и join
let str = 'Den Pes Pesovich';
let arrForJoin = ['pes', 'den', 'pes']

// console.log(str.split(' '))
// console.log(arrForJoin.join(', '))

// reduce/reduceRight
let reduceArr = [1, 2, 3, 4, 5, 6, 7];

let result = reduceArr.reduce((sum, item, index, array) => {
  if (array[index] % 2 === 0) {
    sum = sum + item
  }
  return sum}, 0);

// console.log(result)

// Array.isArray
let resultArray = Array.isArray(reduceArr);

// console.log(resultArray)

// thisArg
let army = {
  minAge: 18,
  maxAge: 27,
  canJoin(user) {
    return user.age >= this.minAge && user.age < this.maxAge;
  }
};

let userss = [
  {age: 16},
  {age: 20},
  {age: 23},
  {age: 30}
];

// найти пользователей, для которых army.canJoin возвращает true
let soldiers = userss.filter(army.canJoin, army);

// console.log(soldiers.length); // 2
// console.log(soldiers[0].age); // 20
// console.log(soldiers[1].age); // 23

/* 53. Переведите текст вида border-left-width в borderLeftWidth
Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

То есть дефисы удаляются, а все слова после них получают заглавную букву.

Примеры:

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';
P.S. Подсказка: используйте split, чтобы разбить строку на массив символов, потом переделайте всё как нужно и методом join соедините обратно. */

function camelize(str) {
  let arr = str.split('-');
  for (let i = 1; i < arr.length; i++) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
  }
  
return arr.join('')
}

// console.log(camelize('list-style-image'))


function camelize2(str) {
  return str.split('-').map((x, index) => index == 0 ? x : x[0].toUpperCase() + x.slice(1)).join('')
}

// console.log(camelize2('list-style-image'))



/* 54. Фильтрация по диапазону
Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет в нём элементы между a и b и отдаёт массив этих элементов.
Функция должна возвращать новый массив и не изменять исходный.

Например:

let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);

alert( filtered ); // 3,1 (совпадающие значения)
alert( arr ); // 5,3,8,1 (без изменений) */

function filterRange(arr, a, b) {
  let resultArr = [];
  for (let x of arr) {
    if (x <= b && x >= a) {
      resultArr.push(x)
    } 
  }

  return resultArr
}

// console.log(filterRange([5, 3, 8, 1], 1, 4))

function filterRange2(arr, a, b) {
  return arr.filter(x => x >= a && x <= b)
}

// console.log(filterRange2([5, 3, 8, 1], 1, 4))


/* 55. Фильтрация по диапазону "на месте"
Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех, 
которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.
Функция должна изменять принимаемый массив и ничего не возвращать.

Например:
let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4
alert( arr ); // [3, 1] */

function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < a || arr[i] > b) {
      arr.splice(i, 1)
      i--;
    }
  }
}

let arr2 = [5, 3, 8, 1]

filterRangeInPlace(arr2, 1, 4)

// console.log(arr2)

/* 56. Сортировать в порядке по убыванию

let arr = [5, 2, 1, -10, 8];
// ... ваш код для сортировки по убыванию
alert( arr ); // 8, 5, 2, 1, -10 */

let arr3 = [5, 2, 1, -10, 8];

arr3.sort( (a, b) => - a + b);

// console.log(arr3)

/* 57. Скопировать и отсортировать массив

У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.
Создайте функцию copySorted(arr), которая будет возвращать такую копию.

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (без изменений) */

let arr4 = ["HTML", "JavaScript", "CSS"];

function copySorted(arr) {
  return arr.slice().sort()
}

let arr5 = copySorted(arr4)

// console.log(arr5)

/* 58. Трансформировать в массив имён
У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён.

Например:

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = /* ... ваш код */

// alert( names ); // Вася, Петя, Маша */

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let students = [ vasya, petya, masha ];

// вариант через push
let names = [];

for (let student of students) {
  names.push(student.name)
}

// console.log(names)

// вариант через map
let students2 = [ vasya, petya, masha ];
let names2 = students2.map(x => x.name)

// console.log(names2)

/* 59. Трансформировать в объекты

У вас есть массив объектов user, и у каждого из объектов есть name, surname и id.

Напишите код, который создаст ещё один массив объектов с параметрами id и fullName, где fullName – состоит из name и surname.

Например:

let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];

let usersMapped = /* ... ваш код ... */

/*
usersMapped = [
  { fullName: "Вася Пупкин", id: 1 },
  { fullName: "Петя Иванов", id: 2 },
  { fullName: "Маша Петрова", id: 3 }
]
*/

/* alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName ) // Вася Пупкин
Итак, на самом деле вам нужно трансформировать один массив объектов в другой. Попробуйте использовать =>. Это небольшая уловка. */


let Dasha = { name: "Даша", surname: "Пупкин", id: 1 };
let Pes = { name: "Пес", surname: "Иванов", id: 2 };
let Den = { name: "Ден", surname: "Петрова", id: 3 };

let names3 = [ Dasha, Pes, Den ];

let newNames3 = names3.map(x => ({fullName: `${x.name} ${x.surname}`, id: x.id}))

// console.log(newNames3)

/* 60. Отсортировать пользователей по возрасту
Напишите функцию sortByAge(users), которая принимает массив объектов со свойством age и сортирует их по нему.

Например:

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [ vasya, petya, masha ];

sortByAge(arr);

// теперь: [vasya, masha, petya]
alert(arr[0].name); // Вася
alert(arr[1].name); // Маша
alert(arr[2].name); // Петя */

let pes = [ { name: "Вася", age: 25 }, { name: "Петя", age: 30 }, { name: "Маша", age: 28 } ];

// function sortByAge(arr) {
//   // arr.sort((a, b) => a.age > b.age ? 1 : -1)
//   arr.sort((a, b) => a.age - b.age);
// }

function sortByAge(arr) {
  arr.sort((a, b) => a.age > b.age ? 1 : -1);
  return arr
}

function sortByAge2(arr) {
  arr.sort((a, b) => a.age - b.age);
  return arr
}

// console.log(sortByAge(pes))
// console.log(sortByAge2(pes))

/* 61. Перемешайте массив

Напишите функцию shuffle(array), которая перемешивает (переупорядочивает случайным образом) элементы массива.
Многократные прогоны через shuffle могут привести к разным последовательностям элементов. Например:

let arr = [1, 2, 3];

shuffle(arr);
// arr = [3, 2, 1]

shuffle(arr);
// arr = [2, 1, 3]

shuffle(arr);
// arr = [3, 1, 2]
// ...
Все последовательности элементов должны иметь одинаковую вероятность. 
Например, [1,2,3] может быть переупорядочено как [1,2,3] или [1,3,2], или [3,1,2] и т.д., с равной вероятностью каждого случая. */

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

let someArr = [1, 2, 3];
shuffle(someArr);

// console.log(someArr)
// console.log(Math.random())


/* 62. Получить средний возраст

Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и возвращает средний возраст.

Формула вычисления среднего арифметического значения: (age1 + age2 + ... + ageN) / N.

Например:

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28 */

let vasya7 = { name: "Вася", age: 25 };
let petya7 = { name: "Петя", age: 30 };
let masha7 = { name: "Маша", age: 29 };

let arr7 = [ vasya7, petya7, masha7 ];

function getAverageAge(users) {
  let sum = 0;
  for (let i = 0; i < users.length; i++) {
    sum = sum + users[i].age;
  }

  return sum / users.length
}

// console.log(getAverageAge(arr7))

function getAverageAge2(users) {
  return users.map(x => x.age / users.length).reduce((sum, current) => sum + current, 0)
}

// console.log(getAverageAge2(arr7))

function getAverageAge3(users) {
  return users.reduce((sum, current) => sum + current.age, 0) / users.length
}

console.log(getAverageAge3(arr7))