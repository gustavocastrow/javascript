//Manipulando Elementos -> é possivel mover elementos no dom com metodos de noe

const lista = document.querySelector('.animais-lista');
const contato = document.querySelector('.contato');
const titulo = contato.querySelector('.titulo');
const animais = document.querySelector('.animais');

contato.appendChild(lista); //Move a lista para o final de contato
contato.insertBefore(lista, titulo); //
contato.removeChild(titulo); //remove titulo de contato
//contato.replaceChild(lista, titulo) //substitui o titulo por lista

const mapa = document.querySelector('.mapa');
contato.insertBefore(animais, mapa);

//Novos elementos -> Podemos criar novos elementos com o metodo
//createElement();

const novoh1 = document.createElement('h1');
novoh1.innerText = 'novo titulo';
novoh1.classList.add('titulo');

mapa.appendChild(novoh1);
console.log(novoh1);

//Clonar Elementos -> todo elemento selecionado e unico, para criamos um novo
//elemento baseado no anterior, e necessario utilizar o metodo
//createNode();

const h1 = document.querySelector('h1');
const faq = document.querySelector('.faq');

const cloneNode = h1.cloneNode(true);
faq.appendChild(h1);