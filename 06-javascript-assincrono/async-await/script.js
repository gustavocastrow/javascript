async function puxarDados(){
  const responseDados = fetch('./dados.json');
  const responseClientes = fetch('./clientes.json');

  const jsonDados = await (await responseDados).json();
  const jsonClientes = await (await responseClientes).json();

  console.log(jsonDados);
  console.log(jsonClientes);
}

puxarDados();

//Promise ->> O resultado da expressao a frente de await tem que ser uma promise
//E o retorno do await sera sempre o resultado desta promise.

async function asyncSemPromise() {
  // Console não irá esperar.
  await setTimeout(() => console.log('Depois de 1s'), 1000);
  console.log('acabou');
}
asyncSemPromise();

async function iniciarAsync() {
  await new Promise(resolve => {
    setTimeout(() => resolve(), 1000)
  });
  console.log('Depois de 1s');
}
iniciarAsync();
