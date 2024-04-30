let button = document.querySelector('.button-base'); //обращение к кнопке
let buttonEnd = document.querySelector('.button-end'); //обращение к кнопке сброса
let textBase = document.querySelector('.text-base');//отображение счетчика 
let counter = 0;
 button.addEventListener('click', function(){  //обработка действия 
    counter = counter+1;
    textBase.innerText = counter;//изменение текста
 });    
 buttonEnd.addEventListener('click', function(){
 counter = 0;
 textBase.innerText = counter;
 });
