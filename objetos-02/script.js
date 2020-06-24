//Exercicios

//Crie um objeto com seus dados pessoais

var meusDados = {
  nome: 'Gustavo',
  sobrenome: 'Silva',
  idade: 24,
  cidade: 'Sao Jose dos Campos',
}
//Crie um metodo no objeto anterior, que mostre o nome completo
meusDados.nomeCompleto = function(){
  return `${this.nome} ${this.sobrenome}`;
}


//Modifique o valor da propriedade preco para 3000

var carro = {
  preco: 1400,
  portas: 4,
  marca: 'BMW',
}

carro.preco = 3000;

//Crie um objeto de um cachorro que represente um labrador
//preto com 10 anos que late ao ver um homem

var cachorro = {
  raca: 'Labrador',
  cor: 'Preto',
  idade: 10,
  latir(pessoa) {
    if(pessoa === 'homem'){
      return 'Latindo...'
    } else {
      return 'Nada'
    }
  }
}

