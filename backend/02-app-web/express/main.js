// Importando o express
const express = require('express');

// Instânciado o express
const app = express();

// Criando a rota inicial '/'
app.get('/', (req, res) => {
    res.send('Hello World!');
})

// Criando rota POST 
app.post('/', (req, res) => {
    res.send('Rota do tipo POST');
})

// Criando rota PUT
app.put('/users', (req, res) => {
    res.send('Rota do tipo PUT');
})

// Criando rota DELETE
app.delete('/users', (req, res) => {
    res.send('Rota do tipo DELETE');
})

// Cria porta para o servidor
const PORT = process.env.PORT || 3000;

// Cria um ouvinte para o servidor
app.listen(PORT, () => {
    console.log(`Servidor ON: http://localhost:${PORT}/`)
})