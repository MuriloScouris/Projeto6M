const { stdout } = require('process');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question("Digite seu nome: ", (nome) => {
  rl.question("digite sua idade: ", (idade) => {
    const idade1 = Number(idade);

    if (idade1 >= 18) {
      console.log(`${nome} ,você é maior de idade!`)
    } else {
      console.log(`${nome} ,você é menor de idade!`)
    }
    rl.close();
  })
})