const cpfsLista = document.querySelectorAll('.cpf li');


//const arrayCpfs = [... cpfs]; ->> retorna uma array dos cpfs.

const  elementsInnerText = ([...elements]) => { //retornando uma array.
  return elements.map(element => element.innerText);
}

const limparCpf = (cpf) => {
  return cpf.replace(/\D/g, '');
}

const construirCpf = (cpf) => {
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4')
}

const formatarCpfs = (cpfs) => {
  return cpfs.map(limparCpf).map(construirCpf);
}

const substituirCpfs = (cpfsElements) => {
  const cpfs = elementsInnerText(cpfsElements);
  const cpfsFormatados = formatarCpfs(cpfs);

  //substituindo no html...
  cpfsElements.forEach((element, index) => {
    element.innerText = cpfsFormatados[index];
  });
}

substituirCpfs(cpfsLista);

