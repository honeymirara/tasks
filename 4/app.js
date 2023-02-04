// бинарный поиск

let arr = [1, 2, 3, 4, 5, 6, 7];
let x = 4;

function searchBinary(arr_, x_) {
    let start = 1;
    let end = arr_.length - 1;

    for (let i = 0; i < end; i++) {
        let middle = Math.round((start + end) / 2);

        if (arr_[middle] === x_) {
            console.log('Вы угадали');
            break;
        }
        else if (arr_[middle] < x_) {
            console.log('Число больше, попробуйте еще раз');
            start = middle;

        } else if (arr_[middle] > x_) {
            console.log('Число меньше, попробуйте еще раз');
            end = middle;
        }

    }
    return true;
}


searchBinary(arr, x);
