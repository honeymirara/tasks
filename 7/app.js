const inputTag = document.querySelector('input');
const buttonTag = document.querySelector('button');


buttonTag.addEventListener('click', function () {
    try {
        if (!inputTag.value) throw new Error('input is empty');
        if (isNaN(inputTag.value)) throw new Error('input is not a number');
         let reverseTag = inputTag.value.split('').reverse().join('');

        const resultTag = document.querySelector('.result');
        resultTag.innerHTML = reverseTag;
        inputTag.value = '';

    } catch (err) {
        alert(err.message);
    }
})