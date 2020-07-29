const carro = {
  marca: 'honda',
  ano: 2018
}

const {marca, ano} = carro;

console.log(marca,ano);

const cliente = {
  nome: 'Andre',
  compras: {
    digitais: {
      livros: ['Livro 1', 'Livro 2'],
      videos: ['VideoJS', 'Video HTML']
    },
    fisicas: {
      cadernos: ['Caderno 1']
    }
  }
}

const {livros, videos} = cliente.compras.digitais;

console.log(livros, videos);

//Nesting
//const {digitais, fisicas, digitais: {livros, videos}} = cliente.compras;
const {digitais, fisicas} = cliente.compras;
console.log(digitais, fisicas);

//Destructuring Arrays ->> Para destruturar array's voce deve colocar as variaveis
//entre [] colchetes

const frutas = ['Banana', 'Uva', 'Morango']

const primeiraFruta = frutas[0];
const segundaFruta = frutas[1];
const terceriaFruta = frutas[2]

//Usando o destrucuring ->> const [priemira, segunda, terceira] = frutas;

//Argumento desestuturado ->> Se uma funcao espera receber como argumento um
//objeto podemos desestruturar ele no momento da declaracao

function handleKeyboard(event){
  console.log(event.key);
}

//Com Destructuring ->>

function handleKeyboard({key}){
  console.log(key);
}

document.addEventListener('Keyup', handleKeyboard);