//Function ->> Toda funcao e criada com o constructor Function e por
//isso herda as suas propriedades e metodos.

const perimetro = new Function('lado', 'return lado * 4');

//Propriedades:
//Function.length ->> retorna o total de argumentos da funcao.
//Function.name ->> retorna uma string com o nome da  funcao.

function somar(n1, n2){
  return n1 + n2;
}

console.log(somar.length);
console.log(somar.name);

//Metodos...
//function.call(this, arg1, arg2, ...) ->> executa a funcao sendo possivel 
//passarmos uma nova referencia ao THIS da mesma.

function descricaoCarro(velocidade){
  console.log(this);
  console.log(this.marca + ' ' + this.ano + velocidade);
}
descricaoCarro.call({marca: 'honda', ano: 2015}, 100);

//this ->> O valor de this faz referencia ao objeto durante a construcao do objeto
//(Constructor Function). Podemos trocar a referencia do metodo ao this, 
//utilizando o call().

const carros = ['Ford', 'Fiat', ' VW'];

carros.forEach((item) => {
  console.log(item);
}); //Log de cada carro

carros.forEach.call(carros, (item) => {
  console.log(item);
}); //Log de cada carro

const frutas = ['Banana', 'Uva', 'Pera']

carros.forEach.call(frutas, (item) => {
  console.log(item);
}); //Log de cada fruta

//Exemplo Real ->> O objeto atribuido a Lista sera o substituido pelo
//primeiro argumento de call().

function Dom(seletor){
  this.element = document.querySelector(seletor);
}

Dom.prototype.ativo = function(classe){
  this.element.classList.add(classe);
}



const ul = new Dom('ul');
ul.ativo('ativar')
console.log(ul);

//Arrays e Call ->> E comum utilizarmos call() nas funcoes do prototipo do
//constructor Array. Assim podemos estender todos os metodos de array a objetos
//que se parecem com uma array (array-like)

const frutas02 = ['Uva', 'Maca', 'Banana'];

Array.prototype.pop.call(frutas02); //frutas02.pop mesma coisa.

//Array-like ->> HTMLCollection ->> Nodelist de demais objetos do Dom,
//sao parecidos com uma array, por isso conseguimos utilizar os mesmos
//na substituicao do this em call.

const arrayLike = {
  0: 'Item 1',
  1: 'Item 2',
  2: 'Item 3',
  length: 3
}

const li = document.querySelectorAll('li');

const filtro = Array.prototype.filter.call(li, function(item) {
  return item.classList.contains('ativo');
});

filtro; // Retorna os itens que possuem ativo
