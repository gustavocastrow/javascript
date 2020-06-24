var videoGames = ['Switch', 'PS4', 'XBOX', '3DS'];

for(var item = 0; item < videoGames.length; item++){
  console.log(videoGames[item]);
  if(videoGames[item] === 'PS4'){
    break;
  }
}

//forEach: E um metodo que executa uma funcao para cada item da array, e uma
//forma mais simples de utilizarmos um loop com array ou array-like

var frutas = ['Banana', 'Pera', 'Maca', 'Abacaxi', 'Uva'];

frutas.forEach(function(fruta, index, array){
  console.log(fruta, index, array)
});


