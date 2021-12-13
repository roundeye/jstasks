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

let a = "1"
let b = "2"
// console.log(+a + +b); // 12