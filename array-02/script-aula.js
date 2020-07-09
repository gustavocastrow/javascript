//[].splice() ->> [].splice(index, remover, item1, item2, ...)
//adiciona valores na array a partir do index. Remove a quantidade de itens
//que for passada no segundo parametro(retorna esses itens);

const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
carros.splice(1, 0, 'Kia', 'Mustange'); // []
//1 ->>A partir de qual item da array sera adicionado
//0 ->>Quantos itens deseja remover da array para adicionar
console.log(carros);

carros.splice(3, 2, 'Ferrari'); //['Fiat', 'VW']
carros; //['Ford', 'Kia', 'Mustang', 'Ferrari', 'Honda'];
console.log(carros);

//[].copyWithin() ->> [].copyWhitin(alvo, inicio, final)
//A partir do alvo, ele ira copiar a array comecando do inicio, ate o final
//e vai preencher a mesma com essa copia, caso omita os valores de inicio
//e final, ele ira utilizar como inicio o 0 e o final o valor total da array.

console.log(['Item1', 'Item2', 'Item3', 'Item4', 'Item5'].copyWithin(2, 0, 2));

//[].fill() ->> [].fill(valor, inicio, final) preencha a array com o valor, do 
//inicio ate o fim.


console.log(['Item1', 'Item2', 'Item3', 'Item4'].fill('Banana'));


//Metodos de acesso [].contact() ->> Os metodos abaixo nao modificam a array
//original, apenas retornam uma array modificada. [].concact()

const transporte1 = ['Barco', 'Aviao'];
const transporte2 = ['Carro', 'Moto'];

const transporte3 = transporte1.concat(transporte2);
console.log(transporte3);

//[].includes(valor) ->> verifica se a array possui o valor e retorna true or false
//[].indexOf(valor) ->> verifica se a array possui o valor e retorna o index
//do primeiro valor na array.
//[].lastIndexOf(valor) ->> retorna o index do ultimo.

const linguagens = ['html', 'css', 'js', 'php', 'python', 'js'];

linguagens.includes('css'); //true
linguagens.includes('ruby'); //false
linguagens.indexOf('python'); //4
linguagens.indexOf('js'); //2
linguagens.lastIndexOf('js'); //5

//[].join ->> [].join(separador) junta todos os valotes da array e retorna
//uma string com eles, se voce passar um valor como parametro este sera utilizado
//durante a juncao de cada item da array

linguagens.join() //html,css,js,phyton,php,js
linguagens.join(' ') // 'html css js php python js'

console.log(linguagens.slice(2));