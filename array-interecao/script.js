//Metodos de interacao com array, sao metodos que vao interagir com cada
//item da array, sao meotodos que fazem um loop nos items da array\
//

//[].forEach(callback (itemAtual, index, array)) ->> a funcao de callback
//e executada para cada item da array, ela possui tres argumentos, itemAtual
//(valor do item da array), index(index do valor na array) e arrat (array original)

const carros = ['Ford', 'Fiat', 'Honda'];

carros.forEach(function(item, index, array){
  console.log(item);
});

const li = document.querySelectorAll('li');

li.forEach((item) => item.classList.add('activa'));

li.forEach(function(item){
  item.classList.add('ativa02');
});

//[].map(callback(itemAtual, index, array)) ->> Funciona da mesma forma que o
//forEach(), porem ao inves de retornar undefined, retorna uma nova array
//com calores atualizados de acordo com o return de cada iteracao.

const novaArray = carros.map((item, index, array) => {
  //funcao sem return sera sempre undefined.
  return item.toUpperCase();
});

const numero = [2, 4, 5, 6, 78];
const numeroX2 = numero.map(n => n * 2);
console.log(numeroX2);

console.log(novaArray);
console.log(carros);

//Valor retornado ->> Se nao retornamos nenhum valor durante a iteracao utilizando
//map, o valor retornado como de qualquer fncao que nao possui o return sera undefined.

//[].map() vS forEach() ->> Se o objetivo for modificar os valores da array atual,
//sempre utilize o map, pois assim uma nova array com os valores modificados
//e retornada e voce pode imediatamente iterar novamente sobre estes valores.


//[].map() com objetos ->> Map pode ser muito util para interagirmos com uma array
//de objetos, onde desejamos isolar um valor unico de cada objeto.

 const aulas = [
   {
     nome: 'HTML 1',
     min: 15
   },
   {
     nome: 'HTML 2',
     min: 10
   },
   {
     nome: 'CSS 1',
     min: 20
   },
   {
     nome: 'JS 1',
     min: 25
   },
 ]

 const tempoAulas = aulas.map(aula => aula.min);

 const nomeAulas = function(aula){
   return aula.nome
 }

 const arrayNomeAulas = aulas.map(nomeAulas);

 console.log(arrayNomeAulas);
 console.log(tempoAulas);

 //[].reduce(callback(acumulador, valorAtual, index, array), valorInicial)
 //executa a funcao da callback para cada item da array, um valor especial existe
 //nessa funcao de callback, ele e chamado de acumulator, mas e na verdade o
 //retorno da iteracao anterior

 const aulas02 = [10, 25, 30];
 const reduceAulas = aulas02.reduce((acumulador, item, index, array) =>{
    console.log(acumulador, item, index);

    return item;
 })

 //Passo a passo:

 const aulas03 = [10, 25, 30];
//1
//aulas03.reduce((0, 10) => {
//  return 0 + 10;
//}, 0); //retorna 10

//2
//aulas03.reduce((10, 25) => {
// return 10 + 25;
//},0); //retorna 35

//3
//aulas03.reduce((35, 30) => {
//return 35 + 30;
//},0) //retorna 65

//Maior valor com [].reduce() 

const numeros = [10, 25, 60, 5, 35, 10];

const maiorValor = numeros.reduce((anterior, atual) => {
  //ternario  ->> return anterior > atual ? anterior : atual //verdadeiro - falso
  if(anterior > atual){
    return anterior
  } else {
    return atual
  }
},0);
console.log(maiorValor);
maiorValor; //60