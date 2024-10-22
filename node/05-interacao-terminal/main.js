// Importar o módulo 
const readline = require('readline');

// Usar os métodos Métodos 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let userName;

// Metódo para fazer uma pergunda para o user
rl.question("Qual seu nome?\n", answer => {
    userName = answer;
    console.log(`Seja bem-vindo(a) ${userName}`);
    rl.close(); // fecha a interface
})