//[].find() ->> Retorna o valor atual da primeira iteracao, que retorna um valor
//truthy.
//[].findeIndex() ->> Retorna a index deste valor na array.

//findIndex ->>retornando o index de Uva.
const frutas = ['Banana', 'Pera', 'Uva', 'Maça'];
const indexUva = frutas.findIndex(item => {
  return item === 'Uva';
})


//find ->> 
const numeros = [6, 43, 22, 88, 101, 29];
const buscaMaior45 = numeros.find(x => x > 45); // 88;
console.log(buscaMaior45);

//[].filter() ->> retorna uma array com a lista de valores que durante sua iteracao
//retornam um valor truthy.

const frutas1 = ['Banana', undefined, null, '', 'Uva', 0, 'Maça'];

const arrayFrutas = frutas1.filter((item) => {
  console.log(item);
  return item;
});

console.log(arrayFrutas);

//filter em objetos

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
    nome: 'CSS',
    min: 20
  },
  {
    nome: 'JS',
    min: 25
  }
]

const maiores15 = aulas.filter((aula) => {
  console.log(aula.min);
  return aula.min > 15;
});

console.log(maiores15);
