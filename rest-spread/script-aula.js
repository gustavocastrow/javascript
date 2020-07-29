//Parametros ->> Nem todos os parametros que definimos sao utilizados quando uma
//funcao e executada, devido a falta de argumentos. Por isso é importante
//nos prepararmos para caso estes argumentos nao sejam declarados.


function perimetroForma(lado, totalLados = 4){
  const argArray = Array.from(arguments);
  console.log(arguments);
  return lado * totalLados;
}

perimetroForma(10, 4); 
perimetroForma(10); 
console.log('oi')

//Arguments ->> A palavra chave arguments e um objeto Array-like criado dentro da funcao
//Esse objeto contem os valores dos argumentos

//Parametro Rest ->> E possivel declararmos uma parametro utilizando ...
//na frente do mesmo, assim todos os arumentos que passarmos na ativacao
//da funcao, ficaram dentro do parametro.


function anunciarGanhadores(premio, ...ganhadores) {
  ganhadores.forEach(ganhador => {
    console.log(ganhador + ' ganhou um ' + premio)
  });
}
const ganhadores = ['Carro', 'Pedro', 'Marta', 'Maria', 'Joao'];
anunciarGanhadores(...ganhadores);
 //todos argumentos passados aqui
//serao lidos pelo "..." 


//Operador Spread ->> Assim como o rest, o operador Spread tambem utiliza os ...
//para ser ativado, o Spread ira distribuir um item iteravel, um por um.

const frutas = ['Banana', 'Uva', 'Morango'];
const legumes = ['Cenoura', 'Batata'];

const comidas = [...frutas, 'Pizza', ...legumes];

console.log(comidas);

const todosNumeros = [3,4,6,7,2,4,5,28];
const numeroMaximo = Math.max(3,4,6,7,2,4,5,28);

console.log(...todosNumeros);

//Transformar em array ->> E possivel transformar itens iteraveis em uma array real
//com o spread.

const btns = document.querySelectorAll('button');
const btnsArray = [...btns];

console.log(btnsArray);

const frase = 'Isso é JavaScript';
const fraseArray = [...frase];

console.log(fraseArray);
//Parametros ->> Nem todos os parametros que definimos sao utilizados quando uma
//funcao e executada, devido a falta de argumentos. Por isso é importante
//nos prepararmos para caso estes argumentos nao sejam declarados.


function perimetroForma(lado, totalLados = 4){
  const argArray = Array.from(arguments);
  console.log(arguments);
  return lado * totalLados;
}

perimetroForma(10, 4); 
perimetroForma(10); 
console.log('oi')

//Arguments ->> A palavra chave arguments e um objeto Array-like criado dentro da funcao
//Esse objeto contem os valores dos argumentos

//Parametro Rest ->> E possivel declararmos uma parametro utilizando ...
//na frente do mesmo, assim todos os arumentos que passarmos na ativacao
//da funcao, ficaram dentro do parametro.


function anunciarGanhadores(premio, ...ganhadores) {
  ganhadores.forEach(ganhador => {
    console.log(ganhador + ' ganhou um ' + premio)
  });
}
const ganhadores = ['Carro', 'Pedro', 'Marta', 'Maria', 'Joao'];
anunciarGanhadores(...ganhadores);
 //todos argumentos passados aqui
//serao lidos pelo "..." 


//Operador Spread ->> Assim como o rest, o operador Spread tambem utiliza os ...
//para ser ativado, o Spread ira distribuir um item iteravel, um por um.

const frutas = ['Banana', 'Uva', 'Morango'];
const legumes = ['Cenoura', 'Batata'];

const comidas = [...frutas, 'Pizza', ...legumes];

console.log(comidas);

const todosNumeros = [3,4,6,7,2,4,5,28];
const numeroMaximo = Math.max(3,4,6,7,2,4,5,28);

console.log(...todosNumeros);

//Transformar em array ->> E possivel transformar itens iteraveis em uma array real
//com o spread.

const btns = document.querySelectorAll('button');
const btnsArray = [...btns];

console.log(btnsArray);

const frase = 'Isso é JavaScript';
const fraseArray = [...frase];

console.log(fraseArray);
