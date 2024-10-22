const fs = require('node:fs');

fs.rename('file.txt', 'file.csv', error => {
    if (error) {
        console.error(`Error ao tentar renomear o arquivo: ${error.message}`);
        return;
    }

    console.log("Arquivo renomeado com sucesso.");
})