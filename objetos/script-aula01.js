//Constructor Functions -> Para isso existem as Constructors Functions, ou seja
//funcoes construtoras que sao responsaveis por construir novos objetos sempre que 
//chamamos a mesma.

//new Keyword -> A palavra chave new é responsavel por criar um novo objeto
//baseado na funcao que passarmos a frente dela.

//5 Passos

/*
1. Cria um novo objeto
  honda = {};

2. Define o prototipo
  honda.prototype = Carro.prototype;

3. Aponta a variavel this para o objeto
  this = honda;

4. Executa a funcao, substituindo this pelo objeto
  honda.marca = 'Marca'
  honda.preco = 0;

5. Retorna o novo objeto
  return honda = {
    marca: 'Marca'
    preco: 0,
  }
*/

//this -> faz referencia ao proprio objeto construido com a constructor function


function Carro(marcaAtribuida, precoAtribuido){ //funcao construtora sempre comeca com letra maiuscula
  this.marca =  marcaAtribuida;
  this.preco = precoAtribuido; //this -> objeto carro
}

const honda = new Carro('Honda', 3000); //honda é um objeto que vem do construtor Carro.
const fiat = new Carro('Fiat', 2000);

function Carro2(marca, precoInicial){
  const taxa = 1.2;
  const precoFinal = precoInicial * taxa;
  this.marca = marca;
  this.preco = precoFinal;
}

const mazda = new Carro2('Mazda', 4200);
console.log(mazda);

