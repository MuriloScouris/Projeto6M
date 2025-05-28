const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let saldo = 10000;
console.log(`Seu saldo é R$${saldo}`);

rl.question('O que você deseja fazer: depositar, sacar, verificar saldo: ', (acao) => {
  switch (acao) {
    case 'depositar':
      rl.question('qual o valor que deseja depositar? ', (n1) => {
        const deposito = Number(n1);
        saldo = saldo + deposito;
        console.log(`seu saldo atual é de: R$${saldo}`)
        rl.close();
      });
      break;

    case 'sacar':
      rl.question("qual valor deseja sacar? ", (n2) => {
        const saque = Number(n2);
        saldo = saldo - saque;
        console.log(`seu saldo atual é de: R$${saldo}`)
        rl.close();
      })
      break;

    case 'verificar saldo':
      console.log(`Seu saldo atual é de R$${saldo}`)
      break;
    default:
      console.log("Ação inválida!")
  }
  rl.question('deseja finalizar? ', (resp) => {
    const resposta = String(resp);
    if (resposta === 'sim') {
      rl.close();
    } else {
      console.log(`R$${saldo}`)
    }
  })


})