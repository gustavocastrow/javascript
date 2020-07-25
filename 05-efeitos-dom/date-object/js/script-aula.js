const agora = new Date();
const futuro = new Date('DEC 31 2021');
console.log(futuro);
console.log(agora.getDate());

//getTime() ->> O metodo getTime() mostra o tempo total em milessegundos desde
//o dia 01 de janeiro de 1970.

function transformarDias(tempo){
  return tempo / (24 * 60 * 60 * 1000);
}

const diasAgora = transformarDias(agora.getTime());
const diasFuturo = transformarDias(futuro.getTime());

console.log(diasFuturo - diasAgora);

console.log(agora.getTime());
console.log(transformarDias(agora.getTime()));
