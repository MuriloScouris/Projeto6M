const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite seu nome: ', (name) => {
  rl.question('Digite sua idade: ', (age) => {
    rl.question('digite sua 1° nota: ', (n1) => {
      rl.question('Digite sua 2° nota: ', (n2) => {
        rl.question('Digite sua 3° nota: ', (n3) => {
          const nome = String(name);
          const idade = Number(age);
          const nota1 = Number(n1);
          const nota2 = Number(n2);
          const nota3 = Number(n3);
          let media;

          console.log(`Nome: ${nome}`)
          console.log(`Idade: ${idade}`)
          if (age >= 18) {
            console.log('você é maior de idade')
          } else {
            console.log('você é menor de idade')
          }

          media = (nota1 + nota2 + nota3) / 3;
          console.log(`Media: ${media}`)
          if (media >= 7) {
            console.log('Aprovado!')
          } else if (media < 7) {
            console.log('Recuperação')
          } else {
            console.log('Reprovado')
          }
          rl.close();
        })
      })
    })
  })
})