const fs = require('node:fs');

const content = "Escrevendo meu primeiro arquivo de forma assíncrona";

fs.writeFile('./file.txt', content, "utf-8", error => {
    if (error) {
        console.error(`Error ao tentar escrver um arquivo: ${error.message}`);
    }
})