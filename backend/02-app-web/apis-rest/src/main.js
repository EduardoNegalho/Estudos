const express = require('express');
const movieController = require('./controllers/moviesController');

const app = express();

app.use(express.json());

app.get('/movies', movieController.index);
app.get('/movies/:id', movieController.show);

app.post('/movies', movieController.save);

app.put('/movies/:id', movieController.update);

app.delete('/movies/:id', movieController.delete);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Servidor ON: http://localhost:${PORT}`))