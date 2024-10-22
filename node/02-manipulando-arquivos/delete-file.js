const fs = require('node:fs');

fs.unlink('file.csv', error => {
    if (error) {
        console.error(`Error ao tentar excluír o arquivo do diretório: ${error.message}`);
        return;
    }

    console.log("arquivo excluído com sucesso.");
})