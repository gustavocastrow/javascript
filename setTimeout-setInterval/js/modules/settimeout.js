export default function initTimeout(){

};

//setTimeout(callback, tempo, arg1, arg2, ...) metodo assincrono que ativa o 
//callback apos o tempo. Nao existe garantia de que o codigo sera executado
//exatamente apos o tempo, pois o callback entra na fila e espera pela Call
//Stack estar vazia.

function espera(texto) {
  console.log(texto);
}
setTimeout(espera, 5000, 'Depois de 5000 segundos.');

//Imeditato ->> se nao passarmos o argumento de tempo ele ira assumir o valor 0
//e entrara na fila imediatamente para ser executado. Podemos passar uma funcao
//anonima diretamente como argumento.

//setTimeout(() => {
//  console.log('Apos 0?')
//});

//Loop e setTimeout ->> Um loop é executado rapidamente, em milissegundos
//Se colocarmos um setTimeout dentro do loop, todos eles serao adicionados
//a Web API praticamente no mesmo tempo. Um evento de setTimeout nao espera o tempo
//do anterior acabar para iniciar

for(let i = 0; i < 20; i++){
  setTimeout(() => {
    console.log(i)
  }, 2000 * i);
}

//This e Window ->> setTimeout e um metodo do objeto window. O valor de THIS
//dentro do mesmo callback é uma referencia ao seu objeto no caso window.

//setInterval(callback, tempo, arg1, arg2 ...) ->> ira ativar o callback toda
//vez que a quantidade de tempo passar.

function loop(texto){
  console.log(texto)
}

setInterval(loop, 1000, 'Passou 1s');

//loop a cada segundo

let i = 0;
setInterval(() => {
  console.log(i++);
}, 1000);

//clearInterval(var) ->>, podemos parar um intervalo com o clearInterval. Para
//isso precisamos atribuir o setInterval a uma variavel.

const contarAte10 = setInterval(callback, 1000);

let j = 0;
function callback(){
  console.log(j++);
  if(j > 10){
    clearInterval(contarAte10);
  }
}