//Arrays -> Arrays armazenam uma colecao de elementos, estes podem ser strings
//arrays, booleans, number, functions, objects e mais.

const instrumentos2 = ['Guitarra', 'Baixo', 'Violao'];
const precos = [49, 99, 69, 89];

const dados = [new String('Tipo 1'), ['Carro', 'Portas', {cor: 'Azul', preco: 2000}],
function andar(nome) {console.log(nome)}];

//Construcao de Arrays -> Toda array herda os metodos e propridades
//do prototipo do construtor array.

const carros = new Array('Ford', 'Fiat', 'Honda');
console.log(carros[2]);
console.log(carros.length);

//Array.from() -> e um metodo utilizado para transformar array-like
//objects, um uma array

let li = document.querySelectorAll('li');
const arrayLi = Array.from(li);
li = Array.from(li); //array

const carros2 = {
  0: 'Fiat',
  1: 'Honda',
  2: 'Ford',
  length: 4,
}

const carrosArray = Array.from(carros);

//[ ]. lenght -> retorna o tamanho da array

const frutas = ['Banana', 'Pera', ['Uva Roxa', 'Uva Verde']];
frutas.length; //3

frutas[0].length; //6 -> pegando posicao 0 que e BANANA e retorna os caracteres
frutas[1].length; //5 -> pegando posicao 1 que e PERA e retorna os caractres
frutas[2].length; //2 -> pegando a posicao 2 que e uma array [Uva Roxa , Uva verde]
//e retorna os itens do array
frutas[2][0].length; //8 -> retorna a posicao 2 do primeiro array que é o segundo 
//array, composto por 'Uva Roxa' e 'Uva Verde' e [0] retorna o numero de caractres
// de 'Uva Roxa'

//Metodos Modificadores -> []sort() -> Metodos modificadores(mutador e methods),
//alem de retornarem um valor, eles modificam a array original. [].sort() organiza
//a pelo unicode.

const instrumentos = ['Guitarra', 'Baixo', 'Violao'];
instrumentos.sort(); //organiza por ordem alfabetica

console.log(instrumentos);

//[].unshift() e [].push() ->> [].unshift() adiciona elementos ao inicio da aray
//e retorna o lenght da mesma
//[].push() adiciona elementos ao final da array e retorna o lenght da mesma

const cars = ['Ford', 'Fiat', 'VW'];
console.log(cars);

cars.unshift('Honda', 'Kia'); // 5
console.log(cars);
cars;// ['Honda', 'Kia', 'Ford', 'Fiat', 'VW'];

cars.push('Ferrari'); //6
console.log(cars);
cars; //  ['Honda', 'Kia', 'Ford', 'Fiat', 'VW', 'Ferrari'];

//[].shift() ->> Remove o primeiro elemento da array e retorna o mesmo.
//[].pop() ->> Remove o ultimo elemento da array e retorna o mesmo

const motos = ['BMW', 'Honda', 'Kawazaki', 'Yahama'];
const primeiraMoto = motos.shift(); //BMW.
console.log(primeiraMoto);

const ultimaMoto = motos.pop(); //Yahamha
console.log(ultimaMoto);

//[].reverse() ->> Inverte os itens da array e retorna a array

const marcas = ['Apple', 'Samsung', 'Sony', 'Motorola'];
console.log(marcas);
console.log(marcas.reverse());
