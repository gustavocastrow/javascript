//outerHTML, innerHTML e innerTEXT -> propriedades que retornam uma string
//contendo o html ou texto, e possivel atribuir um novo valor para as mesas
//element.innetText = 'novo texto'

const menu = document.querySelector('.menu');

menu.outerHTML; //todo HTML do elemento
menu.innerHTML; //html interno
menu.innerText; //texto, sem tags


menu.innerText = '<p>Texto</p>'; //a tag vai com texto
menu.innetHTML = '<p>Texto</p>'; //a tag e renderizada

const h1 = document.querySelector('h1');
const animaisLista = document.querySelector('.animais-descricao');

//console.log(animaisLista.innerHTML);
//console.log(h1.innerHTML);


//Transversing -> Como navegar pelo DOM, utilizando suas propriedades e metodos

const lista = document.querySelector('.animais-lista');
console.log(lista.children[--lista.children.length]);
console.log(lista.nextElementSibling);


