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
console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));
console.log(truncate("Всем привет!", 20));