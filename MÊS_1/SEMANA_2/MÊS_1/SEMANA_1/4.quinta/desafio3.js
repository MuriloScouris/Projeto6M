const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
function iniciar() {
  rl.question('Qual o modelo do carro: (Eco, sedan, SUV) ', (model) => {
    rl.question('Quantos dias de locação? ', (days) => {
      rl.question('Gostaria de adicionar seguro? ', (seguro) => {
        rl.question('você é um cliente vip? ', (vip) => {

          let precoFinal;
          let diaria;
          let valorSeguro;

          switch (model) {
            case 'eco':
              diaria = 150;
              break;

            case 'sedan':
              diaria = 200;
              break;

            case 'suv':
              diaria = 280;
              break;

            default:
              console.log('Modelo não disponível!')
              iniciar();
              return;
          }

          precoFinal = Number(days) * diaria;
          valorSeguro = Number(days) * 30;

          if (seguro.toLowerCase() === 'sim') {
            precoFinal = precoFinal + valorSeguro;
          } else { }

          if (vip === 'sim') {
            precoFinal = precoFinal * 0.90;
          } else { }

          console.log(`Modelo: ${model}`)
          console.log(`Dias: ${days}`)
          console.log(`Seguro: ${seguro}`)
          console.log(`Valor final: R$${precoFinal.toFixed(2)}`)

          rl.question('Deseja iniciar outro orçamento? ', (resp) => {
            if (resp === 'sim') {
              iniciar();
            } else {
              console.log('Programa finalizado!')
              rl.close();
            }
          })

        })
      })
    })
  })
}
iniciar();
