let nomes = ['Murilo', 'Scouris', 'Gomes'];
nomes.push('Maria');
nomes.shift(0);
nomes.unshift('Paulo');
console.log(nomes);

let numeros = [5, 10, 15, 20];
numeros.pop()
numeros.unshift(0);
console.log(numeros[2]);

let vazio = [];
vazio.push(1, 2, 3);
vazio.shift();
vazio.unshift(0);
console.log(vazio);

