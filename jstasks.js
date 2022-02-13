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

      str = str.replace(new RegExp(word1), word2);
    }

  return str
  }

  for (let i = 0; i < obj.length; i++) {
    let word1 = '{' + i + '}';
    let word2 = obj[i];

    str = str.replace(new RegExp(/\{/ + i + /\}/), word2);
    // str = str.replace(/\{/ + i + /\}/, word2);
  }

  return str
}

let strTest = 'Hello {foo} - make me a {bar}'

let objTest = {
  foo: 'Jack',
  bar: 'sandwich'
}

let arrTest = ['Jack', 'sandwich'];

console.log(format('Hello {0} - make me a {1}', ['Jack', 'sandwich']));


