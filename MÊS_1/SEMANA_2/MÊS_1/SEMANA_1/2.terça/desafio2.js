const { stdin, stdout } = require('process');
const readline = require('readline');
const rl = readline.createInterface({
  input: stdin,
  output: stdout
})

rl.question("digite um número: ", (n1) => {
  const numero = Number(n1);

  if (numero % 2 === 0) {
    console.log(`O número ${numero} é par!`)
  } else {
    console.log(`O número ${numero} é impar!`)
  }
  rl.close();
});