let prompt = require('prompt-sync')();
let preco = parseFloat(prompt("Digite o preço à vista do produto:"));
let parcelas = parseInt(prompt("Digite o número de parcelas (3 ou 5):"));
let total;

if (parcelas === 3) {
    total = preco * 1.10;
} else if (parcelas === 5) {
    total = preco * 1.20;
} else {
    total = preco;
}

let prestacao = total / parcelas;
console.log("Total a pagar: R$" + total.toFixed(2) + " em " + parcelas + "x de R$" + prestacao.toFixed(2));
