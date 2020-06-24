//Atribuicao
var x = 5;
var y = 10;
x += y; // x = x+y (15)
x -= y; // x = x-y (-5)
x *= y; // x = x*y (50)
x /= y; // x = x/y (0.5)
x %= y; // x = x%y (0)
x **= y // x = x ** y (9765625)

//Opeador ternario: Abreviacao de condicionais com if e else
// condicao ? true : false

var idade = 20;
var naoPossuiDiabates = true;
var podeBeber;

podeBeber = (idade >= 18 && naoPossuiDiabates) ? 'Pode beber' : 'Nao pode beber';
console.log(podeBeber);

//If abreviado: nao e necessario abrir e fechar as chaves {} quando retornamos
//apenas um linha de codigo

var possuiFaculdade = true;
if(possuiFaculdade) console.log('Possui faculdade');
else console.log('Nao possui faculdade');

//ou

if(possuiFaculdade)
  console.log('Possui faculdade')
else 
  console.log('Nao possui faculdade');