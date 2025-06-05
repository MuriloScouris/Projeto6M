// digaOla();
// function digaOla() {
//   console.log('Olá, desenvolvedor')
// }
// mostrarMensagem();
// const mostrarMensagem = function () {
//   console.log('vai dar erro')
// }

// function mensagemAtrasada() {
//   console.log('Esta mensagem aparece depois de 3 segundos')
// }
// setTimeout(mensagemAtrasada, 3000)
// console.log(calcularMedia(1, 2))
// function calcularMedia(a, b) {
//   return (a + b) / 2;
// }
// contadorRegressivo();

// function contadorRegressivo() {
//   for (let i = 5; i >= 1; i--) {
//     setTimeout(() => {
//       console.log(`contagem: ${i}`)
//     }, (5 - i) * 1000);
//   }
// }


contagemRegressiva();
function contagemRegressiva() {
  for (let i = 10; i >= 1; i--) {
    setTimeout(() => {
      console.log(i)
    }, (10 - i) * 1000);
  }
  setTimeout(() => {
    console.log('lançamento!')
  }, 11000);
}


