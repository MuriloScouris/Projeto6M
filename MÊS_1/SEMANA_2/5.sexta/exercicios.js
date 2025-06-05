//fatorial
function fatorial(n) {
  let resultado = 1;

  for (let i = n; i > 1; i--) {
    resultado *= i;

  }
  return resultado;

}
console.log(fatorial(5))

//com recursão
function contagem(n) {
  if (n >= 1) {
    console.log(n)
    n--;
    contagem(n)
  } else {
    console.log('lançamento')
  }

}
contagem(10);
function contagemCrescente(x, y) {

  if (x <= y) {
    console.log(x)
    return contagemCrescente(x + 1, y)
  } else {
    console.log('fim da contagem')
  }
}
contagemCrescente(5, 15)

function calculoFatorial(n) {
  if (n === 1 || n === 0) {
    return 1;
  } else {
    return n * calculoFatorial(n - 1);
  }
}

console.log(calculoFatorial(10))

function somaRecursiva(n) {
  if (n === 0) {
    return 1;
  } else {
    return n + somaRecursiva(n - 1)
  }

}
console.log(somaRecursiva(20))

//fibonacci
function fibonacci(n) {

  if (n === 1) {
    return 1;
  } else if (n === 0) {
    return 0;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2)
  }
}
console.log(fibonacci(6))