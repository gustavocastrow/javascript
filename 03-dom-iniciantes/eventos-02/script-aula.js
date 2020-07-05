//forEach e Eventos -> O metodo addEventListner é adicionado a um unico elemento
//entao e necessario um loop entre os elementos de uma lista, para adicionarmos 
//a cada um deles.

const imgs = document.querySelectorAll('img');

function handleImg(event){
  console.log(event.target);
}

imgs.forEach((img) => {
  img.addEventListener('click', handleImg);
});