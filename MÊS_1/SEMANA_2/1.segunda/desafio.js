//Primeiro modo
const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function soma(a, b) {
  rl.question('Digite o primeiro número: ', (a) => {
    rl.question('Digite o segundo núemero: ', (b) => {
      const soma = Number(a) + Number(b);
      console.log(`O valor da soma foi: ${soma}`)
      rl.close();
      return;

    })
  })

}
soma();

//segundo modo
function soma(a, b) {
  return a + b;
}

const resultado = soma(10, 15);
console.log(`o resultado é de ${resultado}`);

//terceiro (arrow function)
const soma = (a, b) => a + b;
const resultado2 = soma(10, 5);
console.log(resultado2)