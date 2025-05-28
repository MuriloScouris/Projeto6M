const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('Digite o primeiro número: ', (n1) => {
  if (Number(n1) % 2 === 0) {
    console.log(`${n1} é um número par!`)
  } else {
    console.log(`${n1} é ímpar!`)
  }
  rl.close();
})
