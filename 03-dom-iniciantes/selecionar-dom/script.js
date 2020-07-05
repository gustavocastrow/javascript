//Exercicios

//Retorne no console todas as imagens do site.

const allImages = document.querySelectorAll('img');
console.log(allImages);

//Retorne no console apenas as imagens que comecam com a palavra imagem
const imagem = document.querySelectorAll('img[src^="img/imagem"]');
console.log(imagem);

//Selecione todos os links internos (onde  href comeca com #)

const linksInternos = document.querySelectorAll('[href^="#"]');
console.log(linksInternos);

//Selecione o primeiro h2 dentro de .animais-descricao

const primeiroH2 = document.querySelector('.animais-descricao');
console.log(primeiroH2);

//Selecione o ultimo p do site
const paragrafos = document.querySelectorAll('p');
console.log(paragrafos[paragrafos.length - 1]);
