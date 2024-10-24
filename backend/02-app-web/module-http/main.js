// importando o módulo http 
const http = require('node:http');

// criando um servidor http
const server = http.createServer((req, res) => {
    const path = req.url; // pega a url
    
    // navega entre rotas
    switch (path) {
        case '/': // rota inicial
            res.writeHead(200);
            res.write('Pagina inicial')
            break;
        case '/ge': // rota do ge
            res.writeHead(200);
            res.write('Pagina do globo esporte')
            break;
        case '/jn': // rota do jornal nacional
            res.writeHead(200);
            res.write('Pagina do jornal nacional')
            break;
        default: // caso não encontre a rota
            res.writeHead(404);
            res.write('Pagina nao encontrada');
            break;
    }

    res.end(); // encerra a resposta
})

// cria a porta que o servidor irá rodar o servidor
const PORT = process.env.PORT || 3000;

//  cria um ouvinte para o servidor
server.listen(PORT, () => {
    console.log(`Servidor ON: http://localhost:${PORT}/`);
})