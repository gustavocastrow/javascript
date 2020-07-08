//String -> E a construtora de strings, toda string possui as propriedades e 
//metodos do prototype de String.

const comida = 'Pizza';
const agua = new String('Agua');

console.log('oi')

//str.lenght -> propriedade com o total de caracteres da string

const frase = 'A melhor comida';

comida.length; //5
frase.length; //15

comida[0] //P
frase[0] //A
frase[frase.length - 1] //a 

//str.chartAt(n) -> Retorna o caracter de acordo com o index n (n);

const linguagem = 'Javascript';

linguagem.charAt(0); //J
linguagem.charAt(2); //v
linguagem.charAt(linguagem.length - 1); //t

//str.concat(str2, str3,...) -> Concatena as string e retorna o resultado

const frase01 = 'A melhor linguagem é ';
const fraseCompleta = frase01.concat(linguagem, '!!')


//str.includes(search, position) -> Procura pela string exata dentro de outra
//string, a procura e case sensitive

const fruta = 'Banana';
const listaFrutas = 'Melancia, Banana, Laranja';

listaFrutas.includes(fruta); //true
fruta.includes(listaFrutas); //false

//str.endsWith(search) e str.startsWith(search) -> Procura pela string exata
//dentro de outra string. A procura e case sensite

fruta.endsWith('nana'); //true
fruta.startsWith('Ba'); //true
fruta.startsWith('na'); //false

//str.slice(start, end) -> Corta a string de acordo com os valores de start
//e end

const transacao1 = 'Deposito de cliente';
const transacao2 = 'Deposito de fornecedor';
const transacao3 = 'Taxa de camisas';

console.log(transacao1.slice(0, 3)); //Dep
console.log(transacao2.slice(0, 3)); //Dep
console.log(transacao3.slice(0, 3)); //Tax

console.log(transacao1.slice(12)); // cliente
console.log(transacao1.slice(-4)); // ent
console.log(transacao1.slice(3, 6)); // osi