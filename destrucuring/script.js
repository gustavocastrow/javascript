//Extraia o backgroundColor, color e margin do btn
const btn = document.querySelector('button');
const btnStyles = window.getComputedStyle(btn);

const {backgroundColor, margin, color} = btnStyles;

console.log(backgroundColor);
console.log(margin);
console.log(color);


//Troque os valores das variaveis abaixo
let cursoAtivo = 'Javascript';
let cursoInativo = 'HTML';

[cursoAtivo, cursoInativo] = [cursoInativo, cursoAtivo];

console.log(cursoAtivo, cursoInativo);

//Corrija o erro abaixo

const cachorro = {
  nome: 'Bob',
  raca: 'Labrador',
  cor: 'Amarelo'
}

const {cor: bobCor} = cachorro;
console.log(bobCor);