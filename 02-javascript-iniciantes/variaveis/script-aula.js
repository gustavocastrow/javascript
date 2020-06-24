//Responsaveis para guardar dados na memoria
//Inicia com a palavra var, let ou const.

var nome = 'Gustavo';
var idade = '24';
var possuiFaculdade = true;
console.log(nome, idade, possuiFaculdade);

var preco = 25;
var totalComprado = 5;
var totalPreco = totalComprado * preco;
console.log(totalPreco);

var sobreNome = 'Castro', 
    cidade = 'Sao Paulo';
console.log(sobreNome, cidade);

var semDefinir; //undefined
console.log(semDefinir);

//Hosting: Sao movidas para cima do codigo porem o valor atribuido nao e movido.
var comida;
console.log(comida);
comida = 'Pizza';
console.log(comida);

//Mudar valor atribuido: E possivel mudar valores atribuidos a variaves
//com VAR e LET, porem nao e possivel modificar valores de CONST.

var time = 'Vasco';
console.log(time);

time = 'Flamengo';
console.log(time);

let pais = 'Brasil';
console.log(pais);

pais = 'Franca';
console.log(pais);
