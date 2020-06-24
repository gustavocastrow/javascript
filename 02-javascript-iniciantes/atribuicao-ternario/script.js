//Exercicio

//Some 500 ao valor de scroll abaixo
//atribuindo o novo valor a scroll;

var scroll = 1000;
scroll += 500;
console.log(scroll);

//Atribua true para a varivel darCredito caso o cliente possua carro e casa
//e false caso contrario

var possuiCarro = false;
var possuiCasa = true;
var darCredito;

darCredito = (possuiCarro && possuiCasa) ? 'Dar credito' : 'Nao dar credito';
console.log(darCredito);