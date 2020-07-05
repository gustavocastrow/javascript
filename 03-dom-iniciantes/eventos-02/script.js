//Exercicios

//Quando o usuario clicar nos links internos do site, adicione a classe ativo
//ao item clicado e remova dos demais itens caso eles possuam a mesma.
//Previna o comportamento pradao dos links.

const linksInternos = document.querySelectorAll('a[href^="#"]');

function handleLink(event){
  event.preventDefault();
  linksInternos.forEach((link) => {
    link.classList.remove('ativo');
  })
  event.currentTarget.classList.add('ativo');
}

linksInternos.forEach((link) => {
  link.addEventListener('click', handleLink)
});

//Selecione todos os elementos do site comecando a partir do body,
//ao clique mostre exatamente quais elementos estao sendo clicados

const todosElementos = document.querySelectorAll('body *');

function handleElemento(event){
  event.currentTarget.remove();
}
todosElementos.forEach((elemento) => {
  elemento.addEventListener('click', handleElemento)
})
console.log(todosElementos);

//Utilizando o codigo anterior, ao inves de mostrar no console
//remova o elemento que esta sendo clicado, o metodo remove() remove o elemento


//Se o usuario clicar na tecla(t), aumente o text do site.

function handleClickT(event) {
  console.log(event.key);
  if(event.key === 't'){
    document.documentElement.classList.toggle('texto-maior');

  }
}

window.addEventListener('keydown', handleClickT);