let prompt = require('prompt-sync')();
let nome = prompt("Digite o nome do funcionário:");
let salario = parseFloat(prompt("Digite o salário:"));

let novoSalario = salario * 1.10;
console.log(nome + " teve o salário reajustado para R$" + novoSalario.toFixed(2));
