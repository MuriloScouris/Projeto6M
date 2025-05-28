function criarCarrinho() {
  const itens = [];
  return {
    adicionarItem({ item, preco }) {
      itens.push({ item, preco });
      console.log(`${item} adicionado ao carrinho.`);
    },
    removerItem(item) {
      const index = itens.findIndex((i) => i.item === item);
      if (index !== -1) {
        itens.splice(index, 1);
        console.log(`${item} removido do carrinho`);
      } else {
        console.log(`${item} não encontrado no carrinho`);
      }
    },
    listarItens() {
      if (itens.length === 0) {
        console.log('O carrinho está vazio');
      } else {
        console.log('Itens no carrinho:');
        itens.forEach((i) => {
          console.log(`- ${i.item}: R$${i.preco}`);
        });
      }
    },
    total() {
      const total = itens.reduce((soma, i) => soma + i.preco, 0);
      console.log(`Total: R$${total}`);
      return total;
    },
    limparCarrinho() {
      itens.length = 0;
      console.log('O carrinho foi limpo');
    }
  }
}

const meuCarrinho = criarCarrinho();

meuCarrinho.adicionarItem({ item: 'Camiseta', preco: 50 });
meuCarrinho.adicionarItem({ item: 'Calça', preco: 100 });
meuCarrinho.adicionarItem({ item: 'Tênis', preco: 200 });

meuCarrinho.listarItens();

meuCarrinho.total();

meuCarrinho.removerItem('Calça');

meuCarrinho.listarItens();

meuCarrinho.total();

meuCarrinho.limparCarrinho();

meuCarrinho.listarItens();
