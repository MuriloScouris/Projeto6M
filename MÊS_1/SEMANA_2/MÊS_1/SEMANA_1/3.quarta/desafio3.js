const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('Qual o valor da compra? ', (n1) => {
  rl.question('é cliente vip? ', (resp) => {
    const valor = Number(n1)
    const vip = resp.toLowerCase()
    let desconto = valor * 0.9;

    if (valor >= 500 || vip === "sim") {

      console.log(`Você ganhou 10% de desconto, o valor atualizado é R$${desconto.toFixed(2)}`)
    } else {
      console.log(`Valor total R$${valor.toFixed(2)}`)
    }

    rl.close()

  })
})