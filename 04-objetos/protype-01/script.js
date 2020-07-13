//Exercicios

//Crie uma funcao construtora de Pessoas, deve conter nome, sobrenome e idade
//Crie um metodo no prototipo que retorne o nome completo da pessoa
function Pessoa(nome, sobrenome, idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
}

Pessoa.prototype.nomeCompleto = function(){
  return `${this.nome} ${this.sobrenome}`
}

const andre = new Pessoa ('Andre', 'Rafael', 28);
console.log(andre);

//Liste os metodos acesador por dados criados com Nodelist.
//HTMLCollection, Document
Object.getOwnPropertyNames(NodeList.prototype);
Object.getOwnPropertyNames(HTMLCollection.prototype);
Object.getOwnPropertyNames(Document.prototype);


//Liste os construtores dos dados abaixo

li; //HTMLElement
li.click; //function
li.innerText; //String
li.value; //number
li.hidden; //boolean
li.offsetLeft; //number
li.click(); //underfined

const li = document.querySelector('li');