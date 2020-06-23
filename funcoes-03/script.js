//Exercicios

//Crie uma funcao para verificar se um valor e Truthy.
function verificar(valor){
  if(valor = true){
    console.log('Verdadeiro')
  } else {
    console.log('Falso')
  }
}
function isTruthy(dados){
  return !!dados
}

//Crie uma funcao matematica que retorne o perimetro de um quadrado
//perimetro = soma dos quatros lados do quadrado

function calculaPerimetro(lado){
  return lado * 4;
}

//Crie um funcao que verifica se um numero e par

function verificaPar(numero){
  if(numero % 2 == 0) {
    console.log('Numero par')
  }else {
    console.log('Numero impar')
  }
}

//Crie uma funcao que retorne o tipo de dado do argumento passado nela (typeof)

function tipoDado(dado){
  return typeof dado;
}

console.log(tipoDado(20));

//addEventListner é uma funcao nativa do javascript o primeiro parametro
//e o evento que ocorre e o segundo o callback, utilize essa funcao
//para mostra no console o seu nome completo
//quando o evento scroll ocorrer.

addEventListener('scroll', function(){
  console.log('Gustavo de Castro')
});

//Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados){
  return `Ainda faltam  ${totalPaises - paisesVisitados} para visitar`
};

function jaVisitei(paisesVisitados){
  return `Ja visitei ${paisesVisitados} do total de ${totalPaises}`
};

console.log(precisoVisitar(20));
console.log(jaVisitei(20));
