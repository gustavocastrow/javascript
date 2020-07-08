//Native -> objetos nativos sao aqueles definidos na especificacao da linguagem 
//e sao implementados independente do host

//Host -> Objetos do host sao aqueles implementados pelo proprio ambiente
//por exemplo no browser possuimos objetos do DOM, como DomList, HTMLCollection
//e outros, em Node.JS os objetos do Host sao diferentes, ja que nao estamos em
//um ambiente do browser


if(typeof Array.from !== "undefined"){
  console.log('Existe');
}else {
  console.log('Nao Existe');
};

//API -> Application Programming Interfac, e uma interface de software criada 
//para a integracao com outros softwares. Ou seja, toda interacao que fazemos
//com o browser utilizando Objetos, Meotodos e Propriedades, estamos na verdade
//interagindo com a API do browser