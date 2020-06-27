//ForEach -> Constantemente vamos selecionar uma lista de items do dom
//A melhor forma para interagirmos com os mesmos é utilizado o metod forEach

//Fazer loop com forEach

//const imgs = document.querySelectorAll('img');

//imgs.forEach(function(item, index, array){
  //console.log(item, index, array)
//});

//index: mostra a posicao no array.

//forEach -> E um meteodo de array, alguns objetos array-like possuem
//este metodo, caso nao possua o ideal e transforma-los em uma array like

const titulos = document.getElementsByClassName('titulo'); //retorna uma html collection
console.log(titulos);

const titulosArray = Array.from(titulos);
console.log(titulosArray);

titulosArray.forEach(function(item){
  console.log(item);
});

//Arrow Function -> Sintaxe curta em relacao a function expression. Basta
//remover a palavra chave function e adicionar a fat arrow "=>" apos os
//argumentos

//const imgs2 = document.querySelectorAll('img');

//imgs2.forEach((item) => {
 // console.log(item);
//});

//Argumentos e parenteses

const imgs = document.querySelectorAll('img');

//argumento unico nao precia de parenteses
imgs.forEach(item => {
  console.log(item);
});

//multiplos argumentos precisam de parenteses
imgs.forEach((item, index) => {
  console.log(item, index);
});

//sem argumentos precisa dos paranteses, mesmo vazio
let i = 0;
imgs.forEach(() => {console.log(i++);});


//versao "longa":
imgs.forEach(function() {
  console.log(i++)
});

//versao "curta":
imgs.forEach(() => console.log(i++));

