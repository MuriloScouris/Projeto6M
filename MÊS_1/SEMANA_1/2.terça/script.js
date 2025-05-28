// const soma = 5 + 5;
// const sub = 10 - 5;
// const mult = 5 * 3;
// const div = 40 / 4;
// const rest = 40 % 3;
// const pot = 5 ** 2;

// console.log(soma);
// console.log(sub);
// console.log(mult);
// console.log(div);
// console.log(rest);
// console.log(pot);



// Atribuição

// var saldo = 100;
// console.log(saldo);
// const soma = saldo += 50;
// console.log(saldo);
// const sub = saldo -= 30;
// console.log(saldo);
// const mult = saldo *= 2;
// console.log(saldo);
// const div = saldo /= 4;
// console.log(saldo);

// comparação 

// console.log(10 == "10");
// console.log(10 === '10');
// console.log(5 > 3);
// console.log(7 <= 7);
// console.log(20 != '20');
// console.log(20 !== '20');

//desafio #1
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite a primeira idade: ', (idade1) => {
  rl.question('Digite a segunda idade: ', (idade2) => {
    const idadePessoa1 = Number(idade1);
    const idadePessoa2 = Number(idade2);

    if (idadePessoa1 > idadePessoa2) {
      console.log("a primeira pessoa é mais velha");
    } else if (idadePessoa1 < idadePessoa2) {
      console.log("a segunda pessoa é mais velha ")
    } else {
      console.log("as duas tem a mesma idade")
    }

    if (idadePessoa1 === idadePessoa2) {
      console.log("as idades são exatamente iguais")
    } else {
      console.log("as idades são diferentes")
    }
    rl.close();
  });
});