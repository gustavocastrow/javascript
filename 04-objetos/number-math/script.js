//Exercicios

//1. Retorne um numero aleatorio entre 1050 e 2000

const numeroAleatorio = Math.floor(Math.random() * (2000 - 1050 +1) + 1050);
console.log(numeroAleatorio);
//floor -> arrendonda pra baixo, para nao dar numer quebrado

//2. Retorne o maior numero da lista abaixo

const numero = '4, 5, 20, 8, 9';
//transformando em uma array...
const arrayNumeros = numero.split(', ');
const numeroMaximo = Math.max(...arrayNumeros); //operador spread.. 
//pega cada item da array e passa nos argumentos

console.log(numeroMaximo);

//3. Crie uma funcao para limpar os precos e retornar os numeros com centavos
//arrendondados e depois retornar a soma total.

const listaPrecos = ['R$ 59,99', 'R$ 100,22', 'R$ 230', 'r$ 200'];

function limparPreco(preco){
  preco = +preco.toUpperCase() //transformando r$ em R$
                .replace('R$', '') //tirando os R$ e deixando em branco
                .trim() //retirando os espacos em brancos entre os valores
                .replace(',','.'); //substituindo virgula por ponto
//+ na frente de preco para transformar em numero
  preco= +preco.toFixed(2); //arredondando para 2 casas
  return preco;
}

//somando os precos
let soma = 0;
listaPrecos.forEach((preco) => {
  soma += limparPreco(preco);
});

console.log(soma.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}));

limparPreco(listaPrecos[3]);




