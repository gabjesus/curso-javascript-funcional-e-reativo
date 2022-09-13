const fs = require('fs');
const path = require('path');

const caminho = path.join(__dirname, 'dados.txt');

function exibirConteudo(_, conteudo) {
    console.log(conteudo.toString());
}

// fs.readFile(caminho, exibirConteudo);
// fs.readFile(caminho, (_, conteudo) => console.log(conteudo.toString()));

console.log('antes');
const conteudo = fs.readFileSync(caminho); // Espera leitura finalizar
console.log(conteudo.toString());
console.log('depois');