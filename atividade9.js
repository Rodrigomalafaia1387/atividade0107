let prompt = require('prompt-sync')();
let num1 = parseFloat(prompt("Digite o primeiro número:"));
let num2 = parseFloat(prompt("Digite o segundo número:"));
let codigo = parseInt(prompt("Digite o código (1-Soma, 2-Multiplicação, 3-Divisão):"));

if (codigo === 1) {
    console.log("Soma: " + (num1 + num2));
} else if (codigo === 2) {
    console.log("Multiplicação: " + (num1 * num2));
} else if (codigo === 3) {
    if (num2 !== 0) {
        console.log("Divisão: " + (num1 / num2));
    } else {
        console.log("Divisão por zero não é permitida.");
    }
} else {
    console.log("Código inválido.");
}
