//Object.getOwnPropertyDescriptors(obj) ->> Lista todos os metodos e propriedades
//de um objeto, com as suas devidas configuracoes.

Object.getOwnPropertyDescriptor(Array);
//List com metodos e propriedades e Array.

Object.getOwnPropertyDescriptor(Array.prototype);
//Lista com metodos e propriedades do prototipo de array.

Object.getOwnPropertyDescriptor(window, 'innerHeight');
//Puxa de uma unica propriedade.

//Object.keys(obj) ->> retorna um array com as chaves de todas as propriedades
//diretas e enumeraveis do objeto.

//Object.values(obj) ->> retorna uma array com os valores do objeto

//Object.entries(obj) ->> retorna uma array com arrays contendo a chave e o valor

//OBJECT.GETOWNPROPERTYNAMES(OBJ) ->> Retorna uma array com todas as 
//propriedades diretas do objeto (não retorna as do protótipo).

const frutas = ['BANANA'];
console.log(Object.getPrototypeOf);