const image = document.getElementById('image');
const name = document.getElementById('nameList');
const email = document.getElementById('emailList');
const tour = document.getElementById('tourList');
const date = document.getElementById('dateLIst');
const person = document.getElementById('personList');
const discount = document.getElementById('discountList');
const agree = document.getElementById('agree');

function bigImg() {
    image.src = './image/mehedi.jpg';
}

function normalImg() {
    image.src = './image/logo_1.png';
}
function changeName(value) {
    name.textContent = value;
}
function changeEmail(value) {
    email.textContent = value;
}
function changeTour(value) {
    tour.textContent = value;
}
function changeDate(value) {
    date.textContent = value;
}
function changePersonNumber(value) {
    person.textContent = value;
}
function changeDiscount(value) {
    discount.textContent = value;
}
function changeAgree(value) {
    console.log(value);
    agree.textContent = value;
}