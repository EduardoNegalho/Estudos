const fs = require('node:fs');

const exist = fs.existsSync('file.txt'); // busca arquivo no diretorio

if (exist) {
    // se existir , ler o arquivo
    fs.readFile('file.txt', "utf-8", (error, data) => {
        if (error) {
            console.error(`Error ao tentar ler o arquivo: ${error.message}`);
            return;
        }

        console.log(data);
    })
} else {
    // se não existir
    console.log('O arquivo não existe.');
}