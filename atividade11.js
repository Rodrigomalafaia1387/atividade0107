let prompt = require('prompt-sync')();
let sexo = prompt("Digite o sexo (M/F):").toUpperCase();

if (sexo === "F") {
    console.log("Sexo: Feminino");
} else if (sexo === "M") {
    console.log("Sexo: Masculino");
} else {
    console.log("Sexo inválido.");
}
