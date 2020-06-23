function imc(peso, altura){
  const imc = peso / (altura ** 2);
  console.log(imc);
}

imc(90, 1.80); //retorna o imc
//console.log(imc(80, 1.80)); //retorna o imc e da undenfined;

function terceiraIdade(idade) {
  if(typeof idade !== 'number') {
    return 'Por favor preenche um numero';
  }else if(idade >= 60){
    return true;
  } else {
    return false;
  }
  console.log('testando');
}
console.log(terceiraIdade(99));

//Variavel tem escopo fechado dentro de funcoes.
//Variaveis criadas do lado de fora é possivel ver dentro da funcao, porem
//variaveis criadas dentro de funcoes nao sao possiveis ver fora delas.

var totalPaises = 193;
function faltaVisitar(paisesVisitados){
  return `Faltam visitar ${totalPaises - paisesVisitados} paises`
}

var profissao = 'Desenvolvedor';

function dados(){
  var nome = 'Andre';
  var idade = 28;

  function outrosDados(){
    var endereco = 'Rio de Janeiro';
    var idade = 29;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`
  }

  return outrosDados();
}

console.log(dados()); //Retorna 'Andre, 29, Rio de Janeiro, Desenvolvedor'
//outrosDados() //retorna erro pois nao da para retornar uma funcao que esta dentro de outra
