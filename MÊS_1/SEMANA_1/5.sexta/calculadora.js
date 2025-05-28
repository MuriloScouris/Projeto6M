const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function calculadora() {
  rl.question('digite o primeiro número: ', (n1) => {
    rl.question('digite o segundo número: ', (n2) => {
      rl.question('Escolha a operação: (+, -, *, %, /, **)', (op) => {
        let valor;
        switch (op) {
          case '+':
            valor = n1 + n2
            break;
          case '-':
            valor = n1 - n2
            break;
          case '*':
            valor = n1 * n2
            break;
          case '%':
            valor = n1 % n2
            break;
          case '/':
            valor = n1 / n2;
            break;
          case '**':
            valor = n1 ** n2
            break;
          default:
            console.log('Operação não identificada!')
            calculadora();
        }

        console.log(`Resultado: ${valor}`)

        rl.close();
      })
    })
  })
}
calculadora();