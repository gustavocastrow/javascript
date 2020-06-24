//A ordem importa
//Comeca por multiplicacao e divisao, depois por soma e subtracao
//Parentes prioririza uma expressao.

var total1 = 20 + 5 * 2; //30
var total2 = (20+5) * 2; //50
var total3 = 20/ 2 + 5; //50
var total4 = 10 + 10 * 2 + 20 / 2; //40;

var soma1 = 10 + 10 + 20 + 30 * 4 / 2 + 10;
console.log(soma1);

//Operadores aritmeticos unarios

var incremento = 1;
console.log(++incremento);
console.log(incremento);

var idade = '28';
var somaIdade = 5;

// + na frente transforma uma string numerica em um numero

console.log(+idade + somaIdade);