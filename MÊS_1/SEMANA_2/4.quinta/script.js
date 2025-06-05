testeHoisting();

function testeHoisting() {
  console.log('Função chamada antes da declaração')
}

testeOutra();

function testeOutra() {
  console.log('isso funciona?')
}

//corrigindo o hoisting
saudar();

function saudar() {
  console.log('vai funcionar')
}

mensagemAtrasada();

function mensagemAtrasada() {
  setTimeout(function () {
    console.log('Executado após 2 segundos');
  }, 2000);
}

function somar(a, b) {
  return (a + b) / 2
}

console.log(nome);
var nome = 'Murilo'
console.log(sobrenome)
let sobrenome = 'scouris'