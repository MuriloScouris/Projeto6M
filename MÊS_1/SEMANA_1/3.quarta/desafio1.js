const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Qual sua idade? ', (age) => {
  rl.question('possui CNH? ', (resp) => {
    const idade = Number(age);
    const resposta = resp.toLowerCase()

    if (idade >= 18 && resp === "sim") {
      console.log('Pode dirigir!')
    } else {
      console.log('não pode dirigir')
    }

    rl.close()

  })
})