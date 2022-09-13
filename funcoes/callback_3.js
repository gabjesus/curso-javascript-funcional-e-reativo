const carrinho = [
  { nome: "Caneta", qtde: 10, preco: 7.99 },
  { nome: "Impressora", qtde: 0, preco: 649.5 },
  { nome: "Caderno", qtde: 4, preco: 27.1 },
  { nome: "Lapis", qtde: 3, preco: 5.82 },
  { nome: "Tesoura", qtde: 1, preco: 19.2 },
];

// Custom map
Array.prototype.meuMap = function(callback) {
  const novoArray = [];

  for (let i = 0; i < this.length; i++) {
    novoArray.push(callback(this[i], i, this));
  }

  return novoArray;
}

console.log(carrinho.meuMap(el => el.nome))