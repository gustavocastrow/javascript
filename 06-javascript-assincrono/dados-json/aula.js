const sobre = fetch('http://viacep.com.br/ws/01001000/json/');

const div = document.createElement('div');
sobre.then(r => r.text())
.then(body => {
  console.log(body);
  div.innerHTML = body;
  const titulo = div.querySelector('h1');
  console.log(titulo);
  console.log(div);
});