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

