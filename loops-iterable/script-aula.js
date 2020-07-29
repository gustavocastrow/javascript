//Iterable ->> São objetos que possuem o método [Symbol.iterator], geralmente no protótipo, é dentro dele que a função 
//que lida com a iteração será definida. Ex: Array, String, NodeList, boa parte das Array-Like e outros.

fetch('https://pokeapi.co/api/v2/pokemon/')
.then(({headers}) => console.log(headers));

//Loop com "for...of" ->> E possivel fazer um loop por cada iteracao do objeto
//iteravel utilizando o for..of deste loop podemos tambem utilizar o Spread Operator
//nos mesmos.

const frutas = ['Banana', 'Morango', 'Uva'];
const frase = 'Isso é Javascript';

for(const fruta of frutas){
  console.log(fruta);
}

for(const char of frase){
  console.log(char);
}
//Spread e for...of ->> Com o for loop podemos manipular cada um dos elementos 
//do objeto iterável.

const buttons = document.querySelectorAll('button');

for(const btn of buttons) {
  btn.style.background = 'blue';
}

console.log(...buttons);

//O for...of não irá funcionar em um objeto comum que não seja iterável.
const carro = {
  marca: 'honda',
  ano: 2018,
}

Object.defineProperties(carro, {
  rodas: {
    value: 4,
    enumerable: true,
  }
})

for(const key in carro){
  console.log(carro[key]);
}

//Loop com "for...of" ->> E possivel fazer um loop por cada iteracao do objeto
//iteravel utilizando o for..of deste loop podemos tambem utilizar o Spread Operator
//nos mesmos.

//"for...in" ->> Este loop irá retornar a chave (key) de todas as propriedades 
//enumeráveis (que não sejam símbolos) de um objeto.

//Chave e valor ->> Utilizando o for...in podemos retornar todas as chaves e valores
//de propriedades enumeraveis.

const btn = document.querySelector('button');
const btnStyles = getComputedStyle(btn);

for(const style in btnStyles){
  console.log(`${style}: ${btnStyles[style]}`);
}

//Do - While ->> Outro tipo de loop e do while, nao e muito utilizado

let i = 0;
do {
  console.log(i++)
} while (i <= 5);
