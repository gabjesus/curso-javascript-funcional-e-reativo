console.log("teste");

// Function Declaration
function bomDia() {
  console.log("Bom dia!");
}

// Function expression
const bomDia = function () {
  console.log("Bom dia!");
};

const notas = [6.7, 7.4, 9.8, 8.1, 7.7];

const somar = (a, b) => a + b;
const dividir = (a, b) => a / b;

const mediaTurma = dividir(
  notas.reduce(somar),
  notas.length
)

console.log(`Média é ${mediaTurma}`);