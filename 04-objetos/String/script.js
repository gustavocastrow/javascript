//Exercicios

//Utilizando o forEach na array abaixo, some os valores de taxa e os valores
//de recebimento

const transacoes = [
  {
    descricao: 'Taxa do Pao',
    valor: 'R$ 39'
  },
  {
    descricao: 'Taxa do Mercado',
    valor: 'R$ 129'
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 99'
  },
  {
    descricao: 'Recebimento do Banco1',
    valor: 'R$ 199'
  },
  {
    descricao: 'Taxa do Cliente',
    valor: 'R$ 49'
  }
];

let taxaTotal = 0;
let recebimentoTotal = 0;

transacoes.forEach((item) => {
  const numeroLimpo = +item.valor.replace('R$', ''); //limpando valor, tirando R$ e espaco
  //e utilizando o "+" para converter em numero
  if(item.descricao.slice(0, 4) === 'Taxa'){//verifica se o inicio da descricao
  //e igual a palavra TAXA (4 letras);
    taxaTotal = taxaTotal + numeroLimpo;
  } else if(item.descricao.slice(0, 4) === 'Race') {
    recebimentoTotal += numeroLimpo;
  }
});

console.log(taxaTotal);
console.log(recebimentoTotal);


//Retorne uma array com a lista abaixo

const transportes = 'Carro;Aviao;Trem;Onibus;Bicicleta';

const arrayTransportes = transportes.split(';');
console.log(arrayTransportes);

//Substitua todos os spans por as

let html = `<ul>
                  <li><span>Sobre</span></li>
                  <li><span>Produtos</span></li>
                  <li><span>Contato</span></li>
                  <li><span>Mapa</span></li>
                </ul>
                `
html = html.split('span').join('a');
console.log(html);


//Retorne o ultimo caractere da frase

const frase = 'Melhor do Ano'

console.log(frase.slice(-1));

//Retorne o total de taxas

const transacoes2 = ['Taxa do Banco', '   Taxa do Pao', '  taxa do mercado',
 'deposito bancario', 'Tarifa especial'];

 let taxasTotal = 0;
 transacoes2.forEach((item) => {
   item = item.toLocaleLowerCase(); //tudo para lowercase
   item = item.trim(); //tirando espacos
   item = item.slice(0, 4); //pegando as 4 primeiras leitras

   if(item === 'taxa'){
     taxasTotal++;
   }
 })


 console.log(taxasTotal);