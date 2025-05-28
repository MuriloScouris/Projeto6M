const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
function iniciar() {
  rl.question('Qual o destino da viagem? (Praia, campo, cidade) ', (dest) => {
    rl.question('Quantos dias de viagem? ', (days) => {
      rl.question('Gostaria de incluir seguro viagem? ', (seguro) => {

        const destino = dest.toLowerCase();
        let daily;
        let valorFinal;


        switch (destino) {
          case 'praia':
            daily = 200;
            break;

          case 'campo':
            daily = 150;
            break;

          case 'cidade':
            daily = 180;
            break;

          default:
            console.log('Destino não encontrado')
            iniciar();
            return;
        }

        valorFinal = daily * Number(days)

        if (seguro.toLowerCase() === 'sim') {
          valorFinal = valorFinal + 50;
        } else { }

        if (Number(days) >= 7) {
          valorFinal = valorFinal * 0.9;
          console.log('Sua viagem recebeu um desconto de 10%! ')
        } else { }

        console.log(`O valor final da foi de $${valorFinal.toFixed(2)}`)

        rl.question('Deseja fazer outro orçamento? ', (resp) => {
          if (resp.toLowerCase() === 'sim') {
            iniciar();
          } else {
            console.log('Programa finalizado!')
            rl.close();
          }
        })

      })
    })
  })
}
iniciar();