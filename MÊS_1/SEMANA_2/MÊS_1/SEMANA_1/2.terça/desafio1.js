const { stdin, stdout } = require('process');
const readline = require('readline');

const rl = readline.createInterface({
  input: stdin,
  output: stdout
});

rl.question('digite o primeiro núemero: ', (n1) => {
  rl.question('digite o segundo numero: ', (n2) => {
    rl.question('escolha a operação: +, -, *, /, %, **: ', (operacao) => {

      const numero1 = Number(n1);
      const numero2 = Number(n2);
      let resultado;

      if (operacao === '+') {
        resultado = numero1 + numero2;
      } else if (operacao === "-") {
        resultado = numero1 - numero2;
      } else if (operacao === "*") {
        resultado = numero1 * numero2;
      } else if (operacao === "/") {
        resultado = numero1 / numero2;
      } else if (operacao === "%") {
        resultado = numero1 % numero2;
      } else if (operacao === "**") {
        resultado = numero1 ** numero2;
      } else {
        console.log("operação inválida");
        rl.close();
        return;
      }
      console.log(`Resultado: ${resultado}`);

      rl.close();

    })
  })
});