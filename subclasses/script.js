class Veiculo {
  constructor(rodas) {
    this.rodas = rodas;
  }
  acelerar(){
    console.log('Acelerou');
  }
}

class Moto extends Veiculo {
  constructor(rodas, combustivel, capacete){
    super(rodas, combustivel);
    this.capacete = capacete;
  }
  acelerar(){
    console.log('Acelerou rapido')
  }
  empinar(){
    console.log('Moto empinou com ' + this.rodas + ' rodas') 
  }
}

const honda = new Moto(2);
const civic = new Veiculo(4);