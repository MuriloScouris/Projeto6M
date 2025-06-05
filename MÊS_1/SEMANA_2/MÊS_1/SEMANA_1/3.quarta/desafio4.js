const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('Nome: ', (name) => {
  rl.question('Idade: ', (age) => {
    rl.question('Possui passaporte? Sim/Não ', (pass) => {
      rl.question('É cliente VIP? Sim/Não ', (vip) => {

        const nome = name;
        const idade = Number(age);
        const passaporte = pass.toLowerCase();
        const cliente = vip.toLowerCase();
        var agree;

        if (idade >= 18 && passaporte === "sim") {
          agree = 1;
        } else {
          agree = 2;
        }

        rl.question('Qual valor total da viagem? ', (n1) => {

          let valor = Number(n1);

          if (valor >= 5000 || cliente === 'sim') {
            valor = valor * 0.85;
          } else {

          }

          console.log(`${nome}`)
          if (agree === 1) {
            console.log('Você está apto para viajar!')
          } else {
            console.log('Você não está apto para viajar!')
          }

          console.log(`O valor final da viagem ficou em: R$${valor.toFixed(2)}`)

          rl.close();

        })

      })
    })
  })
})