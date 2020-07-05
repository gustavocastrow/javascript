//Eventos -> "addEventListener": Adiciona uma funcao ao elemento, esta chamada
//de callback que sera ativada assim que certo evento ocorrer neste elemento 

const img = document.querySelector('img');

function callback(event){
  console.log(event);
}
img.addEventListener('click', callback);

//Callback -> e uma boa pratica separar a funcao de callback do addEventListner
//ou seja, declarar uma funcao ao inves de passar diretamente uma funcao anonima

//Event -> o primeiro parametro do callback e referente ao evento que ocorreu


const animaisLista = document.querySelector('.animais-lista');

function callbackLista(event){
  console.log(event.currentTarget);
  console.log(event.target);
}

animaisLista.addEventListener('click', callbackLista);

console.log(animaisLista);

//event.preventDefault() -> previne o comportamento padrao do evento no browser
//no caso de um link externo, por exemplo, ira previnir que o link seja ativado

const linkExterno = document.querySelector('a[href^="http"]');

function handleLinkExterno(event){
  event.preventDefault();
  console.log(this);
  console.log(event.currentTarget);
}
linkExterno.addEventListener('click', handleLinkExterno);


//This: A palavra chave "this" e uma palavra especial de Javascript, que pode fazer
// referencia a diferentes objetos dependendo do contexto. No caso de eventos
//ela fara referencia ao elemento em que addEventListner foi adicionado 

const h1 = document.querySelector('h1');

function handleEvent(event) {
  console.log(event.type, event);
}
//h1.addEventListener('click', handleEvent);
//h1.addEventListener('mouseenter', handleEvent);
//h1.addEventListener('mousemove', handleEvent);

//window.addEventListener('scroll', handleEvent);
//window.addEventListener('resize', handleEvent);


function handleKeyboard(){
  if(event.key === 'f'){
    document.body.classList.toggle('fullscreen')
  }
}

window.addEventListener('keydown', handleKeyboard);
