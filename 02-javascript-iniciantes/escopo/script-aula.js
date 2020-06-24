//Escopo de funcao: Variaves declaradas dentro de funcoes nao sao acessadas 
//fora das mesmas

//Escopo de bloco: Variaves criadas com var, vazam o bloco, por isso
//com a introducao do eS6 a melhor forma de declararmos uma variavel
//e utilizando const e let, pois estas respeitam o escopo de bloco.

//Var vaza o bloco

if(true) {
  const carro = 'Fusca';
  console.log(carro);
}

//console.log(carro); //erro, carro is not defined 

for(let i = 0; i < 10; i++){
  console.log(`Numero ${i}`);
}

//Const: Mantem o escopo de bloco, impede a redeclaracao e impede
//a modifiacao de valor da variavel, eveitando bugs no codigo

const semana =  'sexta';
console.log(semana);

//Let: Mantem o escopo no bloco, impede a redeclaracao, mas permite a modificacao
//do valor da variavel

let ano;
ano = 2018;
ano++;
console.log(ano)