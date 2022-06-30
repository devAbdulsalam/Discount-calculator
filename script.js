const calculate = document.querySelector('.calculate');
const resetBtn = document.querySelector('.reset');

calculate.addEventListener('click', (e) => {
    e.preventDefault();

    let bill = document.getElementById('bill').value;
    let percentage = document.getElementById('percentage').value;
    let discount = document.getElementById('discount');
    let total = document.getElementById('total');

    // calculate bill in persentage
    discount.value = bill * percentage / 100;
    total.value = bill - discount.value;        // calculate total bill

});



// reset button

resetBtn.addEventListener('click', () => {
    window.location.reload();
});
