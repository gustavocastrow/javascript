// Mude a cor da tela para azul e depois para vermelho a cada 2s.
function mudarClasse(){
  document.body.classList.toggle('active');
}

setInterval(mudarClasse, 9000);

// Crie um cronometro utilizando o setInterval. Deve ser possível
// iniciar, pausar e resetar (duplo clique no pausar).

const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const tempo = document.querySelector('.tempo');

iniciar.addEventListener('click', iniciarTempo);
pausar.addEventListener('click', pausarTempo);
pausar.addEventListener('dblclick', resetarTempo);

let i = 0;
let timer;

function iniciarTempo(){
  timer = setInterval(() => {
    tempo.innerText = i++;
  }, 100);
  iniciar.setAttribute('disable', '');
} 

function pausarTempo(){
  clearInterval(timer);
  iniciar.removeAttribute('disable');
}

function resetarTempo(){
  tempo.innerText = 0;
  i = 0;
}

