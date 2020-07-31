//REGEXP CONSTRUCTOR ->> Toda regexp é criada com o constructor RegExp() e 
//herda as suas propriedades e métodos. Existem diferenças na sintaxe de uma 
//Regexp criada diretamente em uma variável e de uma passada como argumento de RegExp.
//const regexp = /\w+/gi;

const regexp1 = new RegExp('\\w+', 'gi');

//const frase = 'Javascript Linguagem 101';
//console.log(frase.replace(regexp1, 'x'));

//PROPRIEDADES ->> Uma regexp possui propriedades com informações sobre as flags
// e o conteúdo da mesma.

//REGEXP.TEST() ->> O método test() verifica se existe ou não uma ocorrência da 
//busca. Se existir ele retorna true. A próxima vez que chamarmos o mesmo, 
//ele irá começar do index em que parou no último true.

//const regexp = /Script/g;
//const frase = 'JavaScript, TypeScript e CoffeeScript';

//let i = 1;
//while(regexp.test(frase)) {
//  console.log(i++, regexp.lastIndex);
//}
// 1 10
// 2 22
// 3 37

//TEST() EM LOOP ->> Podemos utilizar o while loop, para mostrar enquanto a
// condição for verdadeira. Assim retornamos a quantidade de match's.

const regexp = /Script/g;
const frase = 'JavaScript, TypeScript e CoffeeScript';

let regexpResult;
while((regexpResult = regexp.exec(frase)) !== null){
  console.log(regexpResult);
}
// 1 10
// 2 22
// 3 37
