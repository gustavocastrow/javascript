//Remova o erro

const priceNumber = n => +n.replace('R$', '').replace(',', '.');
console.log(priceNumber('R$ 99,99'));

//Crie uma IIFE e isole o escopo de qualquer codigo JS.

(function(){
  var nome = 'André';
  console.log(nome);
})();

//como podemos utilizar a funcao abaixo.

const active = callback => callback();

active(function(){
  console.log('Teste de Active')
})