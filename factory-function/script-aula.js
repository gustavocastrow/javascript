
function createButton(text){
  const numeroSecreto = '1111111111'
  function element(){
    const buttonElement = document.createElement('button');
    buttonElement.innerHTML = text;
    return buttonElement;
  }
  return Object.freeze({
    text,
    element
  })
}

const btnComprar = createButton('Comprar');
const btnVender = createButton('Vender');

console.log(btnComprar, btnVender);