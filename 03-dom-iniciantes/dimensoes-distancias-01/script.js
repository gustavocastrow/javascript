//Exercicios

//Verifique a distancia da primeira imagem em relacao ao topo da pagina
const img = document.querySelector('img');
const imgTop = img.offsetTop;
console.log(imgTop);

//Retorne a soma da largura de todas as imagens
function somaImagens() {
  const imagens = document.querySelectorAll('img');
  let soma = 0;
  imagens.forEach((imagem) => {
    soma += imagem.offsetWidth;
  });
  console.log(soma);
}
window.onload = function () {
  somaImagens();
}


//Verifique se os links da pagina possuem o minimoo recomendado para telas
//utilizadas com o dedo (48px/48px de acordo com o google)
const links = document.querySelectorAll('a');

links.forEach((link) =>{
  const linkWidth = link.offsetWidth;
  const linkHeight = link.offsetHeight;

  if(linkWidth > 48 && linkHeight > 48){
    console.log(link, 'Possui acessibilidde')
  }else {
    console.log(link, 'nao possui boa acessibilidade')
  }
});
console.log(links);

//Se o browser for menor que 720px adicione a clase menu-mobile ao menu

const browserSmall = window.matchMedia('(max-width: 720px)').matches;
if(browserSmall) {
  const menu = document.querySelector('.menu');
  menu.classList.add('menu-mobile');
}

