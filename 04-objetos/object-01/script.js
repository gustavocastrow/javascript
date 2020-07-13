//object ->> Todo objeto e criado com o construtor Object, e por isso
//herda as propriedades e metodos do seu prototype.


const pessoa = new Object({
  nome: 'Andre',
  idade: 28,
});

console.log(pessoa);

//Metodos de Object ->> object.create(obj, defineProperties) retorna um novo objeto
//que tera como prototipo o objeto do primeiro argumento.

const carro = {
  marca: 'Marca',
  rodas: 4,
  init(valor){
    this.marca = valor;
    return this;
  },
  acelerar() {
    return this.marca + ' acelerou'
  },
  buzinar(){
    return this.marca + ' buzinou'
  }
}

const honda = Object.create(carro).init('Honda');
const ferrari = Object.create(carro).init('Ferrari');

//Object.assign(alvo, obj1, obj2) ->> adiciona ao alvo as propriedades e metodos enumeraveis dos 
//demais objetos. O assign ira modificar o objeto alvo.


const funcaoAutomovel = {
  acelerar() {
    return 'acelerou';
  },
  buzinar() {
    return 'buzinou';
  },
}

const moto = {
}

Object.assign(moto, funcaoAutomovel, carro);
console.log(moto);

//object.defineProperties(alvo, propriedades) ->> adiciona ao alvo novas
//propriedades, a diferenca aqui e a possibilidade de serem definidas as
//caracteristicas dessas propriedades

Object.defineProperties(moto, {
  rodas:  {
    value: 2,
    configurable: false, // impede deletar e mudanca de valor
    enumerable: true, // torna enumeravel
  },
  capacete: {
    value: true,
    configurable: true,
    writable: false, // impede mudanca de valor
  }, 
});

moto.rodas = 3;
console.log(moto);

//get e set ->> E possivel definirmos diferentes comportamentos para get e set
//de uma propriedade, lembrando que ao acionarmos uma propriedade
//obj.propriedade, a funcao get e ativada e ao setarmos
//obj.propriedade = 'valor'  a funcao de set e ativada.