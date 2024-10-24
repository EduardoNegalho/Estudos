const path = require('node:path');

// pega a última parte do caminho
console.log(path.basename("..\\arquivos\\relatorio.pdf"));

// retorna o caminho absoluto até onde o arquivo está
console.log(__dirname);

// retorna a extensão do arquivo
console.log(path.extname(__filename));

// junta todos os dados do caminho 
console.log(path.join('src', 'server', 'controller', 'usersController.js'));

// retorna um objeto onde as propriedes representam as partes do caminho
console.log(path.parse('/home/user/dir/file.txt'));

// retorna a resolução de uma sequência de caminhos ou segmentos de caminho em um caminho absoluto.
console.log(path.resolve(__dirname, "../arquivo/relatorio/print.pdf"));