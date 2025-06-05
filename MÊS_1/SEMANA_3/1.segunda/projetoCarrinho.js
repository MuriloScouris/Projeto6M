const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const carrinho = [];

function adicionarProduto(nome, preco) {
  const produto = { nome, preco };
  carrinho.push(produto);
  console.log(`Produto ${nome} adicionado com sucesso!`);
}

function listarItens() {
  if (carrinho.length === 0) {
    console.log('O carrinho está vazio.');
  } else {
    carrinho.forEach((produto, index) => {
      console.log(`${index + 1}. ${produto.nome} - R$${produto.preco.toFixed(2)}`);
    });
  }
}

function removerItem() {
  rl.question('Digite o nome do produto que deseja remover: ', (nome) => {
    const index = carrinho.findIndex(produto => produto.nome.toLowerCase() === nome.toLowerCase());
    if (index !== -1) {
      carrinho.splice(index, 1);
      console.log(`Produto ${nome} removido com sucesso!`);
    } else {
      console.log(`Produto ${nome} não encontrado.`);
    }
    menu();
  });
}

function calcularTotal() {
  const total = carrinho.reduce((acc, produto) => acc + produto.preco, 0);
  console.log(`Total do carrinho: R$${total.toFixed(2)}`);
}

function limparCarrinho() {
  carrinho.length = 0;
  console.log('Carrinho limpo com sucesso!');
}

function verificarDuplicados(nome) {
  const index = carrinho.findIndex(produto => produto.nome.toLowerCase() === nome.toLowerCase());
  if (index !== -1) {
    console.log(`O produto ${nome} já está no carrinho.`);
    return true;
  }
  return false;
}

function buscarProduto(nome) {
  const produto = carrinho.find(produto => produto.nome.toLowerCase() === nome.toLowerCase());
  if (produto) {
    console.log(`Produto encontrado: ${produto.nome} - R$${produto.preco.toFixed(2)}`);
  } else {
    console.log(`Produto ${nome} não encontrado.`);
  }
}

function ordenarPreco() {
  carrinho.sort((a, b) => a.preco - b.preco);
  console.log('Carrinho ordenado por preço:');
  listarItens();
}

function menu() {
  console.log('\n=== MENU ===');
  console.log('1. Adicionar produto');
  console.log('2. Listar itens do carrinho');
  console.log('3. Remover item do carrinho');
  console.log('4. Calcular total do carrinho');
  console.log('5. Limpar carrinho');
  console.log('6. Verificar duplicados');
  console.log('7. Buscar produto');
  console.log('8. Ordenar por preço');
  console.log('9. Sair');

  rl.question('Escolha uma opção: ', (opcao) => {
    switch (opcao) {
      case '1':
        rl.question('Digite o nome do produto: ', (nome) => {
          rl.question('Digite o preço do produto: ', (preco) => {
            if (!verificarDuplicados(nome)) {
              adicionarProduto(nome, parseFloat(preco));
            }
            menu();
          });
        });
        break;
      case '2':
        listarItens();
        menu();
        break;
      case '3':
        removerItem();
        break;
      case '4':
        calcularTotal();
        menu();
        break;
      case '5':
        limparCarrinho();
        menu();
        break;
      case '6':
        rl.question('Digite o nome do produto para verificar duplicados: ', (nome) => {
          verificarDuplicados(nome);
          menu();
        });
        break;
      case '7':
        rl.question('Digite o nome do produto para buscar: ', (nome) => {
          buscarProduto(nome);
          menu();
        });
        break;
      case '8':
        ordenarPreco();
        menu();
        break;
      case '9':
        console.log('Saindo...');
        rl.close();
        break;
      default:
        console.log('Opção inválida, tente novamente.');
        menu();
    }
  });
}

menu();


// Projeto de Carrinho de Compras em Node.js
// O código acima implementa um sistema de carrinho de compras em Node.js, permitindo adicionar, listar, remover produtos, calcular o total, limpar o carrinho, verificar duplicados, buscar produtos e ordenar por preço.
// Ele utiliza o módulo 'readline' para interagir com o usuário via terminal, oferecendo um menu de opções para gerenciar os itens do carrinho.
// O carrinho é representado por um array de objetos, onde cada objeto contém o nome e o preço do produto. As funções implementam as funcionalidades solicitadas, garantindo uma experiência interativa e prática para o usuário.
// O código é modular e organizado, facilitando a manutenção e a adição de novas funcionalidades no futuro.