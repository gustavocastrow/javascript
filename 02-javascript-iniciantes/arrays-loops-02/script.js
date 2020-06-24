//Exercicio

//Crie um array com os anos que o brasil ganhou a copa

var brasilCampeao = [1959, 1962, 1970, 1994, 2002];

//Interaja com o array utilizando um lopp, para mostrar no console a seguinte
//mensagem: 'O brasil ganhou a copa de  ${ano}

for(var i = 0; i < brasilCampeao.length; i++){
  console.log(`O Brasil ganhou a copa de ${brasilCampeao[i]}`)
}

//Interaja com um lopp nas frutas abaixo e para ao chegar em pera.

var frutas = ['Banana', 'Maca', 'Pera', 'Uva', 'Melancia'];

for(var fruta = 0; fruta < frutas.length; fruta++ ){
  console.log(frutas[fruta]);
  if(frutas[fruta] === 'Pera'){
    break;
  }
}

//Coloque a ultima fruta da array acima de uma variavel
//sem remover a mesma do array

var ultimaFruta = frutas[frutas.length -1];
console.log(ultimaFruta)
