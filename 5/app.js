/* Реализуйте функцию, которая принимает число и возвращает возвенную в квадрат каждую цифру числа соединяя их. Добавить проверки

9119 -> 811181 (9^2 === 81, 1^2=== 1) */

/* let number = '1234'.split('');

function doSquare(num) {
    try {
        for (let elem of num) {
            elem = elem ** 2;
        }
         return num.join("");

    } catch (err) {
        return err.message;
    }
}

let result = doSquare(number);
console.log(result); */

let number = '3344'

function doSquare(elem) {
    try {
        let arr = number.split('');
        let result = '';
        if (!elem.length) throw new Error('Ошибка');
        
        for (let i = 0; i < arr.length; i++) {
            result += arr[i] ** 2;
        }
        return result;
    } catch (err) {
        return err.message;
    }


}
let newStr = doSquare(number);
console.log(newStr);



