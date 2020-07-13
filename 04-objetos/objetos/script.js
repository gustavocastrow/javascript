//Exercicios

//Transforme o objeto abaixo em uma Constructor Function

const pessoa = {
  nome: 'Nome pessoa',
  idade: 0,
  andar() {
    console.log(this.nome + ' andou')
  }
}

function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.andar = function(){
    console.log(this.nome + ' andou')
  }
}



//Crie 3 pessoas, Joao - 20 Anos, Maria - 25 anos e Bruno 15 anos
const joao = new Pessoa('Joao', 20);
const maria = new Pessoa('Maria', 25);
const bruno = new Pessoa('Bruno', 15);

//Crie uma Constructor function (Dom) para manipulacao de listas
//de elementos do Dom, deve conter as seguintes propriedades e metodos:
//
//elements, retorna NodeList com os elementos selecionados
//addClass(classe), adiciona a classe a todos os elementos
//removeClass(classe), remove a classe a todos elementos

function Dom(seletor){
  const elementList = document.querySelectorAll(seletor);
  this.elements = elementList;

  this.addClass = function(classe){
    elementList.forEach((element) => {
      element.classList.add(classe);
    })
  }
  this.removeClass = function(classe){
    elementList.forEach((element) => {
      element.classList.remove(classe);
    })
  }
}

const listaItens = new Dom('li');
const ul = new Dom('ul')
listaItens.addClass('ativar');
ul.addClass('ativar-ul');
