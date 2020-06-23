//Exercicios

//Verifique se sua idade e maior do que de alum parente
//dependendo do resultado cloque no console 'E maior' ou 'E igual' ou 'E menor'

var minhaIdade = 20;
var idadePrimo = 23;

if(minhaIdade > idadePrimo) {
  console.log('Minha idade é maior');
}else if (minhaIdade === idadePrimo ){
  console.log('Minha idade e igual')
} else {
  console.log('Minha idade e menor')
}

//Qual o valor é retornado na seguinte expressao?

var expressao = (5-2) && (5-' ') && (5-2);
console.log(expressao);

//Verifique se as seguintes variaves sao truthy ou falsy
var nome = 'Andre';
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;

if(nome = true) {
  console.log('E verdadeira')
}else {
  console.log('E falsa')
}

if(idade = true) {
  console.log('E verdadeira')
}else {
  console.log('E falsa')
}
if(possuiDoutorado = true) {
  console.log('E verdadeira')
}else {
  console.log('E falsa')
}
if(empregoFuturo = true) {
  console.log('E verdadeira')
}else {
  console.log('E falsa')
}

console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta )

//Compare o total de habitantes do brasil com a China

var brasil = 207
var china = 1340

if(brasil > china ) {
  console.log('Brasil tem mais habitantes')
}else {
  console.log('China tem mais habitantes')
}

//O que ira aparecer no console?
if(('Gato' === 'gato') && (5>2)){
  console.log('VERADEIRO');
}else {
  console.log('False')
}

//O que ira aparecer no console?
if(('Gato' === 'gato') || (5 > 2)){
  console.log('Gato' && 'Cao');
}else {
  console.log('Falso')
}
