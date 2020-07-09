//Number -> E a construtora de numeros, todo numero possui as propriedades e metodos
//do prototype de number, numver tambem possui alguns metodos

//Number.isNan() e Number.isInteger(); -> isNaN() e um metodo de Number
//ou seja, nao faz parte to prototipo, isInteger() verifica se e uma integtral

console.log(Number.isNaN(5));
console.log(Number.isInteger(5));

//Number.paserFloat() e Number.parseInt() -> 
//parseFloat() serve para retornamos um numero a partir de uma string. A String
// deve comecar com um numero
//parseInt recebe tambem um segundo paramtreo que e o Radix, 10 e para decimal

parseFloat('99.50'); //Mesma funcao sem o Number
//Nova formula com Number antes.
Number.parseFloat('99.50'); //99.5 
Number.parseFloat('100 Reais'); //100
Number.parseFloat('R$ 100'); //NaN

parseInt('99.50', 10); //99
parseInt(5.43434343555, 10); //5
Number.parseInt('100 Reais', 100); //100

console.log(parseFloat('232323232')); //Retorna um number
console.log(parseFloat('100 Reais')); //Retorna 100
console.log(parseFloat('100.27 Reais')); //Retorna 100.27
console.log(parseInt('100.23 Reais')); //Retorna 100

//n.toFixed(decimais) -> Arredonda o numero com base no total de casas decimais
//do argumento.

const preco = 2.99;
preco.toFixed(); //3

const carro = 1000.455;
carro.toFixed(2) //1000.46

const preco2 = 1499.49;
preco2.toFixed() //1499

const preco1 = 10.3232;
console.log(+preco.toFixed(2));


let valor = 48.49;
valor = valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
console.log(valor);

//Math -> E um objeto nativo que possui propriedades e metodos de expressoes
//matematicas comuns

Math.PI //3.14159
Math.E //2.71
Math.LN10 //2.303
console.log(Math.PI);

//Math.abs() -> retorna o valor absoluto ou seja transforma negativo
//em positivo
//Math.ceil() -> arredonda pra cima, retorna sempre uma integral e flor pra baixo
//Math.round() -> arredonda para o numero integral mais proximo

Math.abs(-5, 5); // 5.5
Math.ceil(4.83); //5
Math.ceil(4.3); //5
Math.floor(4.83232); // 4
Math.floor(4.3); // 4
Math.round(4.83232); // 5
Math.round(4.3); //4

//Math.max() -> retorna o maior numero de uma lista de argumentos
//Math.min() -> o menor numero
//Math.random() -> um numero aleatorio

Math.max(5,3,10,42,2); // 42
Math.min(5,3,10,42,2); //2

Math.random(); //0.XXXXÅ
Math.floor(Math.random() * 100); // entre 0 e 100
Math.floor(Math.random() * 500); // entre 0 e 500

//Numero random entre 72 e 32

Math.floor(Math.random() * (72 - 32 +1 ) + 32);
Math.floor(Math.random() * (30 - 20 +1)) + 20;




