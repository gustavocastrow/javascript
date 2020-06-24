//7 tipos de dados: todos sao primitivos exceto objeto
//Primitvos: imutavel, nao tem como mudar.

var nome = 'Gustavo' // String
console.log(typeof nome);

var idade = 28; // Number
console.log(typeof idade);

var possuiFaculdade = true // Boolean
console.log(typeof possuiFaculdade);

var time; // Undefined
console.log(typeof time);

var comida = null; // Null
console.log(typeof comida);

var simbolo = Symbol() // Symbol
console.log(typeof simbolo);

var novoObjeto = {} // Object
console.log(typeof novoObjeto);


//Soma de String

var primeiroNome = 'Gustavo';
var segundoNome = 'Castro';
var nomeCompleto = primeiroNome + segundoNome;
console.log(nomeCompleto);

var gols = 1000;
var frase = 'Romario fez' + gols + ' gols';
console.log(frase);
console.log(typeof frase);

var gols1 = 900;
var frase1 = `Cristiano Ronaldo fez ${gols1} gols`;
console.log(frase1);