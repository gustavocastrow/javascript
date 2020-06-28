//classList: Retorna um alista com as classes do elemento
//Permite adicionar remover e verificar se contem

const menu = document.querySelector('.menu');

menu.classList.add('ativo', 'teste');
menu.classList.remove('azul');


if(menu.classList.contains('azul')){
  menu.classList.add('possui-azul');
}else {
  menu.classList.add('nao-possui-azul');
};

console.log(menu.className);

//Attributes: retorna uma array-like com os atributos do elemento.

const animais = document.querySelector('.animais');

console.log(animais.attributes); //retorna todos os attributes
console.log(animais.attributes[0]); //retorna o primeiro atributo

//getAttribute e setAttribute: metodos que retornam o definem de acordo com 
//o atributo selecionado 

const img = document.querySelector('img');
console.log(img.getAttribute('src')); //valor de src
console.log(img.setAttribute('alt', 'Texto Alternativo')); //muda o alt
console.log(img.hasAttribute('id')); // true ou false
console.log(img.removeAttribute('alt')); //remove o alt

img.hasAttributes(); //true ou false se tem algum atributo


//Read Only vs Writable: Existem propriedades que nao permitem a mudanca de seus
//valores, essas sao consideradas Read Only, ou seja apenas leitura

