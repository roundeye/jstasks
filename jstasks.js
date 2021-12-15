// 1. Случайное число от min до max
// Встроенный метод Math.random() возвращает случайное число от 0 (включительно) до 1 (но не включая 1)
// Напишите функцию random(min, max), которая генерирует случайное число с плавающей точкой от min до max (но не включая max).
function randomM(min, max) {
    return (max-min)*Math.random() + min;
}
// console.log(randomM(1, 5));

// 2. Сделать первый символ заглавным
// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. 
// Например: ucFirst("вася") == "Вася";
function ucFirst(str) {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
    // return charAt(0).toUpperCase() + str.slice(1);
}
// console.log(ucFirst('вася'));
// console.log(ucFirst('s12'));
// console.log(ucFirst(''));

// 3. Проверка на спам
// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.
// Функция должна быть нечувствительна к регистру:
// checkSpam('buy ViAgRA now') == true
// checkSpam('free xxxxx') == true
// checkSpam("innocent rabbit") == false
function checkSpam(str) {
    let newStr = str.toLowerCase();
    return newStr.includes('viagra') || newStr.includes('xxx') 
}
// console.log(checkSpam('buy ViAgRA now'));
// console.log(checkSpam('free xxxxx'));
// console.log(checkSpam("innocent rabbit"));

// 4. Усечение строки
// Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.
// Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.
// Например:
// truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) = "Вот, что мне хотело…"
// truncate("Всем привет!", 20) = "Всем привет!"
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

// 5. Выделить число
// Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.
// Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.
// Например:
// alert( extractCurrencyValue('$120') === 120 ); // true
function extractCurrencyValue(str) {
    return +str.slice(1)
}
// console.log(extractCurrencyValue('$120'));

// 6. Постфиксная и префиксная формы
// Чему будут равны переменные a, b, c и d в примере ниже?
// let a = 1, b = 1;
// let c = ++a; // ? 
// let d = b++; // ?

function preIncrement(number) {
    return ++number; 
}

function postIncrement(number) {
    return number++;
}
// console.log(preIncrement(1),postIncrement(1))  //result = 2 ; 1

// 7. Результат присваивания
// Чему будут равны переменные a и x после исполнения кода в примере ниже?
// let a = 2;
// let x = 1 + (a *= 2);

function assignmentResult() {
    let a = 2;
    let x = 1 + (a *= 2);
    return x;
}
// console.log(assignmentResult()); // 5

// 8. Преобразование типов
// Какой результат будет у выражений ниже?
// "" + 1 + 0
// "" - 1 + 0
// true + false
// 6 / "3"
// "2" * "3"
// 4 + 5 + "px"
// "$" + 4 + 5
// "4" - 2
// "4px" - 2
// 7 / 0
// "  -9  " + 5
// "  -9  " - 5
// null + 1
// undefined + 1
// " \t \n" - 2
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

// 9. Исправьте сложение
// Ниже приведён код, который запрашивает у пользователя два числа и показывает их сумму.
// Он работает неправильно. Код в примере выводит 12 (для значения полей по умолчанию).
// В чём ошибка? Исправьте её. Результат должен быть 3.
// let a = prompt("Первое число?", 1);
// let b = prompt("Второе число?", 2);
// alert(a + b); // 1
function correctAddition(){
    let a = "1";
    let b = "2";
    return +a + +b    
}
// console.log(correctAddition()); // 12

// 10.Что выведет alert (ИЛИ)?
// Что выведет код ниже?
// alert( null || 2 || undefined );
function or() {
    return null || 2 || undefined
}
// console.log(or()); //2

// 11. Что выведет alert (ИЛИ)?
// Что выведет код ниже?
// alert( alert(1) || 2 || alert(3) );
function or2() {
    return 1 || 2 || 3
}
// console.log(or2())

// 12. Что выведет этот код?
// Что выведет код ниже?
// alert( null || 2 && 3 || 4 );
function checkLogical() {
    return null || 2 && 3 || 4
}
// console.log (checkLogical());

// 13. Проверка значения из диапазона
// Напишите условие if для проверки, что переменная age находится в диапазоне между 14 и 90 включительно.
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

// 14. Проверка значения вне диапазона
// Напишите условие if для проверки, что значение переменной age НЕ находится в диапазоне 14 и 90 включительно.
// Напишите два варианта: первый с использованием оператора НЕ !, второй – без этого оператора.
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

// 15. Вопрос о "if"
// Какие из перечисленных ниже alert выполнятся?
// Какие конкретно значения будут результатами выражений в условиях if(...)?
// if (-1 || 0) alert( 'first' );
// if (-1 && 0) alert( 'second' );
// if (null || -1 && 1) alert( 'third' );

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

// 16. Проверка логина
// Напишите код, который будет спрашивать логин с помощью prompt.
// Если посетитель вводит «Админ», то prompt запрашивает пароль, если ничего не введено или нажата клавиша Esc – показать «Отменено», в противном случае отобразить «Я вас не знаю».
// Пароль проверять так:
// Если введён пароль «Я главный», то выводить «Здравствуйте!»,
// Иначе – «Неверный пароль»,
// При отмене – «Отменено».
// Блок-схема: здесь в последней задаче https://learn.javascript.ru/logical-operators
// Для решения используйте вложенные блоки if. Обращайте внимание на стиль и читаемость кода.
// Подсказка: передача пустого ввода в приглашение prompt возвращает пустую строку ''. Нажатие клавиши Esc во время запроса возвращаетnull.

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

// 16.1 
// let userName = prompt('кто там?', '');

// if (userName == 'Админ') {
//   let pass = prompt('Пароль?', '')
  
//   if (pass == 'Я главный') {
//     alert('Здравствуйте')
//   } else if (pass == '' || pass == null) {
//     alert('Отменено')
//   } else {
//     alert('Неверный пароль')
//   }
// } else if (userName == '' || userName == null) {
//   alert('Отменено')
// } else {
//   alert('Я вас не знаю')
// }

// 17. Плохой стиль
// Какие недостатки вы видите в стиле написания кода этого примера?

// function pow(x,n)
// {
//   let result=1;
//   for(let i=0;i<n;i++) {result*=x;}
//   return result;
// }

// let x=prompt("x?",''), n=prompt("n?",'')
// if (n<=0)
// {
//   alert(`Степень ${n} не поддерживается, введите целую степень, большую 0`);
// }
// else
// {
//   alert(pow(x,n))
// }

function pow(x, n) {
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
}