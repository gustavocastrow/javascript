const promessa = new Promise((resolve, reject) =>{
  let condicao = false;

  if(condicao) {
    setTimeout(() => {
      resolve({nome: 'Gustavo', idade: 24});
    }, 1000);
    
  } else {
    reject(Error('Um erro ocorreu na promise'));
  }
});

const retorno = promessa
  .then(resolucao => {
    resolucao.profissao = 'Designer';
    return resolucao;
  })
  .then(resolucao => {
    console.log(resolucao);
  }).catch(rejeitada => {
    console.log(rejeitada);
  })

  console.log(retorno);

const login = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Usuario logado')
  }, 1000);
});

const dados = new Promise((resolve) =>{
  setTimeout(() => {
    resolve('Dados Carregados')
  }, 1500);
});

const carregouTudo = Promise.all([login, dados]);

carregouTudo.then((resolucao) => {
  console.log(resolucao);
})