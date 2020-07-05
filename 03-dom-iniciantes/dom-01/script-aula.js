//Document Object Model (DOM)
//É uma interface que representa documentos HTML e XML atraves
//de objetos. Com ele e possivel manipular a estrutura, estilo e conteudo
//desestes documentos.

const href = window.location.href;

console.log(href);

//Window e Document: Sao os objetos principais do DOM, boa parte da manipulacao
//e feita atraves dos seus metodos e propriedades
//Window e um objeto global por isso nao precisamos chamar ele na frente
//dos seus metodos e propriedades

const h1Selecionado = document.querySelector('h1');
const h1Classes = h1Selecionado.classList;

function callbackh1(){
  console.log('Clicou em', h1Selecionado.innerText);
}

h1Selecionado.addEventListener('click', callbackh1);