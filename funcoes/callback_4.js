const carrinho = [
  { nome: "Caneta", qtde: 10, preco: 7.99 },
  { nome: "Impressora", qtde: 0, preco: 649.5 },
  { nome: "Caderno", qtde: 4, preco: 27.1 },
  { nome: "Lapis", qtde: 3, preco: 5.82 },
  { nome: "Tesoura", qtde: 1, preco: 19.2 },
];

// Custom filter
Array.prototype.meuFilter = function (callback) {
  const novoArray = [];

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      novoArray.push(this[i]);
    }
  }

  return novoArray;
};

console.log(carrinho.meuFilter((el) => el.qtde > 1));
