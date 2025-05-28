
// //callback simples
function saudar(nome, callback) {
  console.log(`Olá, ${nome}`);
  callback()
}

function despedir() {
  console.log('Até mais!')
}

saudar('Murilo', despedir);


//calback com op
function calcular(a, b, operacao) {
  return operacao(a, b);
}

const soma = (x, y) => x + y;
const multiplicar = (x, y) => x * y;

console.log(calcular(5, 3, soma));
console.log(calcular(6, 2, multiplicar));

//callback com setTimeout
console.log('Início')

setTimeout(() => {
  console.log('Executado depois de 2 segundos');
}, 2000);

console.log("Fim")

//callback com array e .foreach
const frutas = ['maçã', 'banana', 'uva'];
frutas.forEach((fruta) => {
  console.log(`Fruta: ${fruta}`)
})

//callback com .map() tranformando dados
const numeros = [1, 2, 3, 4]

const dobro = numeros.map((n) => n * 2);

console.log(dobro)