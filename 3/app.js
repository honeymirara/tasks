/* Реализуйте функцию, которая принимает любое неотрицательное целое число и возвращает его числа в порядке убывания. 
42145 –> 54421
145263 –> 654321
123456789 –> 987654321 */

let str = '4567';

function validStr(str_) {
    try {
        for (let i = 0; i < str_.length; i++) {
            if ((str_[i]) < 0) throw new Error('Это число отрицательное');
            return true;
        }
    } catch (err) {
        return err.message;
    }
}

function mirrorNum(str_) {
    try {
        validStr(str_);
        let newStr = '';
        return str.split('').reverse().join("");


    } catch (err) {
        return err.message;
    }
}

let result = mirrorNum(str);
console.log(result);



