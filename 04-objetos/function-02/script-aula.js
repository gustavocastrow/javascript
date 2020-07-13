//function.apply() ->> O apple(this, [arg1, arg2, ...] funciona como o call),
//a unica diferenca e que os argumentos da funcao sao passados atraves de uma
//array.

const numeros = [3, 4, 6, 1, 34, 44, 32];
Math.max.apply(null, numeros);
Math.max.call(null, 3, 4, 5, 6, 7, 20);

//Podemos passar null para o valor de this, caso a funcao nao utilize
//o objeto principal para funcionar.

//function.bind() ->> Diferente do call e apply, bind(this, arg1, arg2, ...)
//nao ira executar a funcao mas sim retornar a mesma com o novo contexto de this

const li = document.querySelectorAll('li');

const filtrarLi = Array.prototype.filter.bind(li, function(item) {
  return item.classList.contains('ativo');
});

filtrarLi();

const carro = {
  marca: 'Ford',
  ano: 2018,
  acelerar: function(aceleracao, tempo) {
    return `${this.marca} acelerou ${aceleracao} em ${tempo}`;
  }
}
carro.acelerar(100, 20);
// Ford acelerou 100 em 20

const honda = {
  marca: 'Honda',
};
const acelerarHonda = carro.acelerar.bind(honda);
acelerarHonda(200, 10);
// Honda acelerou 200 em 10


//Argumentos Comuns ->> Podemos passar argumentos padroes para um funcao e
//retornar uma nova funcao.

function imc(altura, peso) {
  return peso / (altura * altura);
}

const imc180 = imc.bind(null, 1.80);

imc(1.80, 70); //21.6
imc180(70); //21. 6