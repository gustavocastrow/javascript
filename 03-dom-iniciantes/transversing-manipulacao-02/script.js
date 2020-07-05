//Exercicios

//Duplique o menu e adicione ele em copy
const menu = document.querySelector('.menu');
const copy = document.querySelector('.copy');

const cloneMenu = menu.cloneNode(true);

copy.appendChild(cloneMenu);

//Selecione o primeiro DT da dl de FAQ.
const faq = document.querySelector('.faq');
const primeiroDt = faq.querySelector('dt');
const proximoDD = primeiroDt.nextElementSibling;
//Selecione o DD referente ao primeiro DT


//Substitua o conteudo HTML do .faq pelo de .animais
const animais = document.querySelector('.animais');
faq.innerHTML = animais.innerHTML;