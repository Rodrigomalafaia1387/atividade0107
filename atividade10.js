let prompt = require('prompt-sync')();
let a = parseFloat(prompt("Digite o primeiro número:"));
let b = parseFloat(prompt("Digite o segundo número:"));

if (a > b) {
    console.log(a + " é maior que " + b);
} else if (b > a) {
    console.log(b + " é maior que " + a);
} else {
    console.log("Os dois números são iguais.");
}
