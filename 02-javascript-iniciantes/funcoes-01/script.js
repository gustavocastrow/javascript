function areaQuadrado(lado) {
  return lado * lado
}
console.log(areaQuadrado(4));

//Parametros e argumentos
//Ao CRIAR uma funcao, voce pode definir PARAMETROS
//Ao EXECUTAR uma funcao, voce pode pssar ARGUMENTOS

function imc (peso, altura) {//peso e altura sao os parametros
  const imc = peso / (altura ** 2);
  return imc
}

imc(80, 1.80) //80 e 1.80 sao os argumentos
imc(60, 1.70) //60 e 1.70 sao os argumentos

function corFavorita(cor){
  if(cor === 'Azul'){
    return 'Eu gosto do ceu';
  } else if (cor === 'Verde'){
    return 'Eu gosto de mato'
  } else {
    return 'Eu nao gosto de cores'
  }
}

console.log(corFavorita('aaa'));

addEventListener('click', function(){
  console.log('oi')
});