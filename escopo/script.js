//Exercicios

//Por qual motivo o codigo abaixo retorna erro?

{
  var cor = 'preto';
  const marca = 'Fiat';
  let portas = 4;
}

//console.log(var, marca, portas); 
//-> Erro 1: dando console log na palavra var
//-> Erro 2: Escopo de bloco nao da para acessar marca(const) e portas(let);

//Corriga o erro abaixo

const dois = 2;
function somarDois(x){
  return x + dois;
}

function dividirDois(x){
  return x / dois;
}

console.log(somarDois(4));
console.log(dividirDois(6));

//O que fazer para total retornar 500?

const numero = 50;

for(let numero = 0; numero < 10; numero ++){
  console.log(numero);
}

const total = 10 * numero;
console.log(total);