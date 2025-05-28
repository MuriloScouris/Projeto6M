const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function iniciar() {
  rl.question('Qual o tipo de carro você quer: Popular, Sedan, SUV, LUXO ', (model) => {
    rl.question('Quantos dias? ', (days) => {
      rl.question('Já é cliente vip? ', (resp) => {

        const modelo = model.toLowerCase();
        const dias = days.toLowerCase();
        const vip = resp.toLowerCase();
        let valor;

        let diaria;

        switch (modelo) {
          case 'popular':
            console.log(`O modelo selecionado foi ${modelo}`)
            diaria = 100
            break;

          case 'sedan':
            console.log(`O modelo selecionado foi ${modelo}`)
            diaria = 150
            break;

          case 'suv':
            console.log(`O modelo selecionado foi ${modelo}`)
            diaria = 200
            break;

          case 'luxo':
            console.log(`O modelo selecionado foi ${modelo}`)
            diaria = 400
            break;

          default:
            console.log('modelo desconhecido!')
            iniciar();
            return;
        }

        valor = dias * diaria;

        if (vip === 'sim') {
          console.log('Você ganhou 15% de desconto!')
          valor = valor * 0.85;
        } else {
          console.log('O valor permanece o mesmo!')
        }

        console.log(`O valor final foi de: R$${valor}`)

        rl.question('Deseja fazer outro orçamento? (S/N) ', (other) => {
          if (other.toLowerCase() === 'sim') {
            iniciar();
          } else {
            console.log('Programa finalizado!')
            rl.close()
          }
        })
      })
    })
  })
}
iniciar();