//Height e Width: estas sao propriedades e metodos dos objetos Element
//e HTMLElement, a maioria delas sao Read Only

const listaAnimais = document.querySelector('.copy');
const animaisTop = listaAnimais.offsetTop;
const height = listaAnimais.scrollHeight;
console.log(animaisTop);

const primeiroh2 = document.querySelector('h2');
const h2left = primeiroh2.offsetLeft;

console.log(h2left);

//getBoundingClientRect() -> Metodo que retorna um objeto com valores de width
//height, distancias do elemento e mais.

const h2rect = primeiroh2.getBoundingClientRect(); //metodo

console.log(h2rect.top);

if(h2rect.top < 0) {
  console.log('passou do elemento')
}

console.log(
  window.innerWidth,
  window.outerWidth,

);

const small = window.matchMedia(('max-width: 600px'));
console.log(small);