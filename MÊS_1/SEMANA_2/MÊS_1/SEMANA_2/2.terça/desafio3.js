function criarContador() {
  let contador = 0;

  return function () {
    contador += 1;
    console.log(contador)
  }

}
const meuContador = criarContador();
meuContador()
meuContador()
meuContador()
meuContador()