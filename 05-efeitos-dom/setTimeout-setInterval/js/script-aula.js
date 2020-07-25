//HTML Element ->> todo elemento HTML do DOM herda propriedades e metodos
//do contrutor HTMLElement.

const div = document.querySelector('[data-cor]');
div.dataset.height = 1000;
delete div.dataset.width;

console.log(div.dataset);

//dataset ->> é uma propriedade de HTMLElement, essa propriedade e um objeto do
//tipo DOMStringMap. Dentro desse objeto existe uma colecao de chave / valor
//com todos os atributos do elemento html que comecaremm com data-

//Data Atributes ->> Os atributos e valotes que comecarem com data- poderao
//ser utilizados como forma de configuracao de plugins e iteracoes DOM/JS

//Data Vs Class ->> A vantagem de se utilizar data atributes e que torna mais facil
//evitarmos conflitos com estilos do CSS. Alem de deixar a estrutra da tag
//mais organizada.

//Nomemclatura ->> Por padrao o javascript nao aceita -(traco) como caracter
//valido para nomear propriedades. Entao qualquer traco sera removido e a
//letra seguinte transformada em maiuscula.

//Use strict ->> O modo estrito previne que algumas acoes consideradas erros.
//Basta adicionarmos 'use strict' no topo de um arquivo, que
//ele entrata neste modo.






