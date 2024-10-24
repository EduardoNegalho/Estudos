const express = require('express');
const path = require('node:path');
const router = require('./router');

const app = express();

// configurando o ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// configurando o body
app.use(express.urlencoded({ extended: true }));

// configurando arquivos estáticos
app.use(express.static('public'));

// configurando as rotas
app.use(router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Servidor ON... http://localhost:${PORT}/`))