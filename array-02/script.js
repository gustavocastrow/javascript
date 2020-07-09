//Exercicios

const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrao'];
//remova o primeiro valor de comidas e coloque em uma variavel.
const primeiroValor = comidas.shift();
console.log(primeiroValor);

//remova do ultimo valor de comidas e coloque em uma variavel
const ultimoValor = comidas.pop();
console.log(ultimoValor);

//adicione arroz ao final do array
comidas.push('Arroz');
console.log(comidas);

//adicione peixe e batata ao inicio do array
comidas.unshift('Peixe', 'Batata');
console.log(comidas);

const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
//arrume os estudantes em ordem alfabetica;
estudantes.sort();
console.log(estudantes);

//Inverta a ordem dos estudantes
estudantes.reverse();
console.log(estudantes);

//verifique se joana faz parte do estudantes
console.log(estudantes.includes('Joana'));

//verifique se juliana faz parte dos estudantes
console.log(estudantes.includes('Juliana'));

let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`
//substitua section por ul e div com li, utilizando split e join
html = html.split('section');
html = html.join('ul');
console.log(html);

const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
//remova o ultimo carro, mas antes de remover salve a array original em outra
//variavel

const carrosCopia = carros.slice();
carros.pop();
console.log(carros);
