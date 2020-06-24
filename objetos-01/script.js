var menu = {
  width: 800,
  height: 50,
  backgroundColor: '#8443',
  metadeHeight(){
    return this.height / 2; //this = menu(objeto)
  }
}

menu.backgroundColor = '#FFF';
menu.color = 'blue';
var bg = menu.backgroundColor;

//Objeto: Sempre herda propriedades e metodos do objeto que foi utilizado para cirar o mesmo
