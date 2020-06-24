//Condicionais if e else
//Verifica se uma expressao e verdadeira com if, caso contrario o else sera ativado

var possuiGraduacao = false;
var possuiDoutorado = true;

if(possuiGraduacao) {
  console.log('e verdadeiro')
} else if (possuiDoutorado){
  console.log('falso')
}

var nome = 0;

if(nome) {
  console.log(nome);
} else {
  console.log('nome nao existe.')
}

//Truthy e Falsy 
//Existem valores que retornam TRUE e outros retornam FALSE quando verificados
//com uma expressao booleana

//Falsy
//if (false)
//if (0)
//if (NaN)
//if (null)
//if (undefined)
//if ('') 

//Truthy
//if (true)
//if (1)
//if (' ')
//if ('andre')
//if (-5)
//if ({})


//Operador Lógico de negaçao
//O operador "!" nega uma operaçao booleana, ou seja !true é igual a false

//Truthy
//if (!true) -> false
//if (!1) -> false
//if (!'') -> true
//if (!undefined) -> true
//if (!!' ') -> true
//if (!!'') -> false

//Utilizando "!!" voce verifica se uma operacao e truthy ou falsy

//Operadores de comparacao: O ''=='' faz uma comparacao nao tao restrita
//e o '===' faz uma comparacao estrtira, ou seja o tipo de dado dever ser
//o mesmo quando usamos ===

var x = 'Gato';

console.log(x !== 'Gato');