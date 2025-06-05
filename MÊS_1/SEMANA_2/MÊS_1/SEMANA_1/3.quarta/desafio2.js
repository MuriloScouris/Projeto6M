const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
rl.question('Usuário: ', (user) => {
  rl.question('Senha: ', (pass) => {
    const usuario = String(user)
    const senha = Number(pass)

    if (usuario === 'Murilo' && senha === 1234) {
      console.log('Login bem-sucedido!')
    } else {
      console.log('Usuário ou senha incorretos')
    }

    rl.close()

  })
})