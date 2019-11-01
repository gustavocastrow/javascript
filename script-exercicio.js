//*Linkar o arquivo "script.exercicos.js" no index"

//Retorne no console todas as imagens do site:
const todasImagens = document.querySelectorAll('img');
console.log(todasImagens);

//Retorne no console apenas as imagens que começam com a palavra imagem
const imagensAnimais = document.querySelectorAll('img[src^="img/imagem"]');
console.log(imagensAnimais);

//Selecione todos os links internos (onde href começa com "#")
const linkInterno = document.querySelectorAll('[href^="#"');
console.log(linkInterno);

//Selecione o primeiro h2 dentro de ".animais-descricao"
const animais = document.querySelector('h2');
const h2Animais = animais.querySelector('.animais-descricao h2');
console.log(animais);
console.log(h2Animais);

//Selecione o último p do site
const paragrafos = document.querySelectorAll('p');
console.log(paragrafos[paragrafos.length-1]);