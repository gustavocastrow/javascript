//Objetos: Conjuto de variaveis e funcoes, que sao chamadas de propriedades e metodos

var pessoa = {
  nome: 'Gustavo',
  idade: 24,
}

//Métodos: É uma propriedade que possui uma funcao no local do seu valor.

var quadrado = {
  lados: 4,
  area: function(lado){
    return lado * lado
  },
  perimetro: function(lado){
    return this.lados *  lado; //this -> referencia ao objeto quadrado.
  }
}

console.log(quadrado.area(5));
console.log(quadrado.perimetro(4));

//Objetos servem para organizar o codigo em pequenas partes reutilizaveis

