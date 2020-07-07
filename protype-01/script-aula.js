//Protype -> A propriedade protype e um objeto adicionado a uma funcao quando
//a mesma e criada.

function Pessoa(nome, idade){
  this.nome = nome;
  this.idade = idade;
}

Pessoa.prototype.andar = function(){
  return 'Pessoa andou'
}

const andre = new Pessoa('Andre', 28);


//funcao.prottype -> e possivel adicionar novas propriedades e metodos ao objeto
//prototype

const pais = 'Brasil';
const cidade = new String('Rio');

const listaAnimais = ['Cachorro',  'Gato', 'Cavalo'];

const lista = document.querySelectorAll('li');

//transforma em uma array
const listaArray = Array.prototype.slice.call(lista);

const Carro = {
  marca: 'Ford',
  preco: 2000,
  andar(){
    return true;
  }
}