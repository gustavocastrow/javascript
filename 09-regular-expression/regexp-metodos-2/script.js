//STR.MATCH() ->> O match() é um método de strings que pode receber como 
//argumento uma Regexp. Existe uma diferença de resultado quando utilizamos a 
//flag g ou não.

const frase = 'Javascript, TypeScript, CoffeeScript, Java';

const regexp = /\w+/g;

const resultado = frase.match(regexp);

console.log(resultado);

//STR.SPLIT() ->> O split serve para distribuirmos uma string em uma array, quebrando a string no argumento que for
// passado. Este método irá remover o match da array final.

const frase = 'JavaScript, TypeScript, CoffeeScript';

frase.split(', ');
// ["JavaScript", "TypeScript", "CoffeeScript"]
frase.split(/Script/g);
// ["Java", ", Type", ", Coffee", ""]

const tags = `
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
`;

tags.split(/(?<=<\/?)\w+/g).join('div');
// <div>
//   <div>Item 1</div>
//   <div>Item 2</div>
// <div>

//STR.REPLACE() ->> O método replace() é o mais interessante por permitir a
// utilização de funções de callback para cada match que ele der com a Regexp.

const tags = `
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
`;

tags.replace(/(?<=<\/?)\w+/g, 'div');
// <div>
//   <div>Item 1</div>
//   <div>Item 2</div>
// <div>


//CAPTURA ->> É possível fazer uma referência ao grupo de captura dentro do 
//argumento do replace. Então podemos utilizar $&, $1 e mais.

const tags = `
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
`;

tags.replace(/<li/g, '$& class="ativo"');
// <ul>
//   <li class="ativo">Item 1</li>
//   <li class="ativo">Item 2</li>
// </ul>


//GRUPOS DE CAPTURA ->> É possível definirmos quantos grupos de captura quisermos.

const emails = `
empresa@email.com
contato@email.com
suporte@email.com
`;

emails.replace(/(\w+@)[\w.]+/g, '$1gmail.com');
// empresa@gmail.com
// contato@gmail.com
// suporte@gmail.com


//CALLBACK ->> Para substituições mais complexas, podemos utilizar um callback como segundo argumento do replace. 
//O valor do return será o que irá substituir cada match.

const regexp = /(\w+)(@[\w]+)/g;
const emails = `joao@homail.com.br
marta@ggmail.com.br
bruna@oulook.com.br`

emails.replace(regexp, function(...args) {
  console.log(args);
  if(args[2] === '@homail') {
    return `${args[1]}@hotmail`;
  } else if(args[2] === '@ggmail') {
    return `${args[1]}@gmail`;
  } else if(args[2] === '@oulook') {
    return `${args[1]}@outlook`;
  } else {
    return 'x';
  }
});

// joao@hotmail.com.br
// marta@gmail.com.br
// bruna@outlook.com.br
