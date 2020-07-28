/*function Button(text, background){
  this.text = text;
  this.background = background;
}

Button.prototype.element = function(){
  const buttonElement = document.createElement('button');
  buttonElement.innerText = this.text;
  buttonElement.style.background = this.background;
  return buttonElement;
}

*/


class Button {
  constructor(text, background, color){
    this.text = text;
    this.background = background;
    this.color = color;
  }
  element() {
    const buttonElement = document.createElement('button');
    buttonElement.innerText = this.text;
    buttonElement.style.background = this.background;
    buttonElement.style.color = this.color;
    return buttonElement;
  }
  appendTo(target){
    const targetElement = document.querySelector(target);
    targetElement.appendChild(this.element());
    console.log(this);
    return targetElement;
  }
  static blueButton(text){
    return new Button(text, 'blue', 'white');
  }
}

const botaoAzul = Button.blueButton('Comprar');



/*
class Button {
  constructor(options){
    this.options = options;
  }
  static createButton(text, background){
    const buttonElement = document.createElement('button');
    buttonElement.innerText = text;
    buttonElement.style.background = background;
    return blueButton;
  }
}

const optionsBlue = {
    backgroundColor: 'blue',
    text: "Comprar",
    color: 'white'
}

const blueButton = new Button(optionsBlue);

const blueButtonStatic = Button.createButton('Clique', 'blue');

console.log(blueButtonStatic);
*/