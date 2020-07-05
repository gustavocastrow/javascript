const animais = document.getElementById('animais');
console.log(animais);

const gridSection = document.getElementsByClassName('grid-section');
console.log(gridSection[1]);

//Seletor geral unico: querySelector -> retorna o primeiro elemento que combinar
//com seu seletor CSS 

const primeiraLi = document.querySelector('li');
console.log(primeiraLi);

const primeiraUl = document.querySelector('ul');
console.log(primeiraUl);

const linksInternos = document.querySelector('[href^="#"]');
console.log(linksInternos);

const animaisImg = document.querySelectorAll('.animais img');
console.log(animaisImg);
console.log(animaisImg[2]);

//HTMLCollection vs NodeList
//A diferenca esta nos metodos e propriedades de ambas, alem disso
//a Nodelist retornada com querySelectorAll e estatica.

const gridSectionHTML = document.getElementsByClassName('grid-section');
const gridSectionNode = document.querySelectorAll('.grid-section');

primeiraUl.classList.add('grid-section');

console.log(gridSectionHTML[0]);
console.log(gridSectionNode[0]);

gridSectionNode.forEach(function(item,index){
  console.log(item);
});

const arrayGrid = Array.from(gridSectionHTML);

arrayGrid.forEach(function(item){
  console.log(item)
})