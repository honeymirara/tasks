
const buttonTag = document.querySelector('.btn');

function isValid(inp1, inp2) {
    if (!inputTag1.value.trim() || !inputTag2.value.trim()) throw new Error('input is empty');
    if (isNaN(inputTag1) || isNaN(inputTag2)) throw new Error('it is a not a number');

}

buttonTag.addEventListener('click', function () {
    try {
        const inputTag1 = document.querySelector('.inp1').value;
        const inputTag2 = document.querySelector('.inp2').value;

        isValid(inp1, inp2);



        document.querySelector('.plus').innerHTML = +inputTag1 + +inputTag2;

        document.querySelector('.minus')
        minus.innerHTML = +inputTag1 * +inputTag2;

        const multiply = document.querySelector('.multiply');
        multiply.innerHTML = +inputTag1 * +inputTag2;

        const divide = document.querySelector('.divide');
        divide.innerHTML = +inputTag1 / +inputTag2;

    } catch (err) {
        alert(err.message);
    }
})