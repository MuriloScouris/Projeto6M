const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('Digite a primeira nota: ', (n1) => {
  rl.question('Digite a segunda nota: ', (n2) => {
    rl.question('Digite a terceira nota: ', (n3) => {
      let media;

      media = (Number(n1) + Number(n2) + Number(n3)) / 3

      if (media >= 7) {
        console.log(`Você foi aprovado, sua média foi de: ${media}`)
      } else if (media < 7 && media >= 5) {
        console.log(`Você ficou de recuperção, sua média foi de: ${media}`)
      } else {
        console.log(`Você foi reprovado, sua média foi de: ${media}`)
      }
      rl.close()
    })
  })
})