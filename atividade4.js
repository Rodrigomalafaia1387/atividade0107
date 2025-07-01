let prompt = require('prompt-sync')();
let a = parseFloat(prompt("Digite o primeiro número:"));
let b = parseFloat(prompt("Digite o segundo número:"));
let c = parseFloat(prompt("Digite o terceiro número:"));

let media = (a + b + c) / 3;
console.log("A média é: " + media);
