//Quando mudamos a propriedade seletor, o objeto Dom ira passar a selecionar
//o novo seletor em seus metodos

/* const Dom = {
  seletor: 'li',
  element(){
    return document.querySelector(this.seletor);
  },
  ativar(){
    this.element().classList.add('ativar');
  }
}

Dom.seletor = 'ul';
Dom.ativar(); */

function Dom(seletor){
  this.element = function(){
    return document.querySelector(seletor);
  }
  this.ativar = function(){
    this.element().classList.add('ativar');
  }
}

const li = new Dom('li');
const ul = new Dom('ul');

