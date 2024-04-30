let button = document.querySelector('[data-find = button-base]'); //обращение к кнопке
let buttonEnd = document.getElementById('button-end'); //обращение к кнопке сброса, по поиску её  id
let textBase = document.getElementById('counter-text');//отображение счетчика 
let counter = 0;
 button.addEventListener('click', function(){  //обработка действия 
    counter = counter+1;
    textBase.innerText = counter;//изменение текста
 });    
 buttonEnd.addEventListener('click', function(){
 counter = 0;
 textBase.innerText = counter;
 });
