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
    nome: 'JS',
    min: 25
  },
]

const listaAulas = aulas.reduce((acumulador, atual, index) => {
  acumulador[index] = atual.nome;
  return acumulador;
}, [])
console.log(listaAulas);

//[].some() ->>, se pelo menos um return da iteracao for truthy, ele retorna true

const frutas = ['Banana', 'Pera', 'Uva'];
const temUva = frutas.some((fruta) => {
  return fruta === 'Uva';
}); //true

function maiorQue100(numero){
  return numero > 100;
}

const numeros = [1, 43, 22, 88, 101, 2];
const temMaior = numeros.some(maiorQue100); //true

//[].every() ->> se todos os returns das iteracoes forem truthy, o metodo ira
//retornar true, se pelo menos um for falsy, ele ira retornar false.

const every = frutas.every((item) => {
  return item === 'Uva';
})

console.log(every);

const maiorQue3 = numeros.every(n => n > 3);
console.log(maiorQue3);