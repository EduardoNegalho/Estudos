const express = require('express');

const app = express();

const movies = [
    { titulo: 'O Poderoso Chefão', ano: 1972, genero: 'Crime' },
    { titulo: 'Pulp Fiction', ano: 1994, genero: 'Crime' },
    { titulo: 'O Senhor dos Anéis: A Sociedade do Anel', ano: 2001, genero: 'Fantasia' },
    { titulo: 'Matrix', ano: 1999, genero: 'Ficção Científica' },
    { titulo: 'Forrest Gump', ano: 1994, genero: 'Drama' }
];

app.get('/', (req, res) => {
    res.json(movies);
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor ON: http://localhost:${PORT}/`);
})