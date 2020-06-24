//Operadores Logicos &&(E)
// '&&' Compara se uma expressao E a outra e verdadeira
//Retorna sempre o primeiro false ou primeiro verdadeiro

//true && true -> true
//true && false -> false
//false && true -> false
//'Gato' && 'Cao' -> Cao
//(5-5) && (5+5) -> 0
//'Gato' && false -> false
//(5 >= 5) && (3 < 6) -> true

//Se ambos valores forem true ele ira retornar o ultimo valor verificado.
//Se algum valor for false ele ira retornar o mesmo e nao ira continuar a verificar
//os proximos

if((5-5) && (5+5)){
  console.log('verdadeiro');
} else {
  console.log('Falso');
}

var condificonal = (5-10) && (5+5);

if(condificonal){
  console.log('verdadeiro', condificonal);
} else {
  console.log('Falso');
}

//Operador logico ||(OU)
// || Compara se uma expressa OU outra e verdeira
//Retorna o primeiro verdadeiro

//true || true -> true
//true || false -> true
//false || true -> true
//'Gato' || 'Cao' -> 'Gato'
//(5-5) || (5+5) -> 10
//'Gato' || false -> Gato
// (5>=5) || (3 < 6) -> true

var condicional2 = (5-5) || (5+5) || (10-2);
console.log(condicional2);

//Switch: Com o switch voce pode verificar se uma variavel e igual a diferentes
//valores utilizando o case.

var corFavorita = 'Verde';

switch (corFavorita) {
  case 'Azul' : 
    console.log('olhe para o ceu');
    break;

  case 'Amarelo' :
    console.log('olhe para o sol');
    break;

  case 'Verde' : 
    console.log('olhe para a floresta');
    break;
    
default :
console.log('feche os olhos')
}