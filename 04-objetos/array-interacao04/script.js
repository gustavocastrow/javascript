//1. Selecione cada curso e retorna uma array com os objetos contendo o titulo
//descricao, aulas e horas de cada curso

const cursos = document.querySelectorAll('.curso');
//transformando em uma array, pois cursos retorna um NodeList.
const arrayCursos = Array.from(cursos);
//retornando uma array com objetos.
const objetoCursos = arrayCursos.map((curso) => {
  const titulo = curso.querySelector('h1').innerText;
  const descricao = curso.querySelector('p').innerText;
  const aulas = curso.querySelector('.aulas').innerText;
  const horas = curso.querySelector('.horas').innerText;
  return {
    titulo,
    descricao,
    aulas,
    horas,
  }
});
console.log(objetoCursos);

//2. Retorne uma lista com os numeros maiores que 100.
const numeros = [3, 44, 333, 23, 122, 322, 33];

const maiores100 = numeros.filter(n => n > 100);
console.log(maiores100);

//3. Verifique se baixo faz parte da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado'];
const possuiBaixo = instrumentos.some((item) => {
  return item === 'Baixo';
});

console.log(possuiBaixo);

//4. Retorne o valor total das compras.

const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Queijo',
    preco: 'R$ 10,60'
  },
]

const valorTotal = compras.reduce((acumlador, item) => {
  //limpando preco
  const precoLimpo = +item.preco //+ na frente para fazer a string virar numero
                      .replace('R$ ', '') //trocando "R$" por "" (nada)
                      .replace(',', '.') //trocando "," por "."
  
  return acumlador + precoLimpo;
}, 0)

console.log(valorTotal);
