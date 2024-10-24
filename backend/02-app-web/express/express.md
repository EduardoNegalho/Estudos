- 1°: Inicie um projeto node.js: ``npm init -y``
- 2°: Instale o express: ``npm install express``
- 3°: Importe o express:
``` javascript
 const express = require('express');
```
- 4°: Instâncie o express
``` javascript
const app = express();
```
- 5°: Crie uma rota inicial tipo "GET":
``` javascript
app.get('/', (req, res) => {
    res.send('Hello World!');
})
```
- 6°: Crie uma rota tipo "POST":
``` javascript
app.post('/', (req, res) => {
    res.send('Rota do tipo POST');
})
```
- 7°: Crie uma rota tipo "PUT":
``` javascript
app.put('/users', (req, res) => {
    res.send('Rota do tipo PUT');
})
```
- 8°: Crie uma rota tipo "DELETE":
``` javascript
app.delete('/users', (req, res) => {
    res.send('Rota do tipo DELETE');
})
```
- 9°: Crie uma porta para o servidor:
``` javascript
const PORT = process.env.PORT || 3000;
```
- 10°: Crie uma ouvinte para o servidor:
``` javascript
app.listen(PORT, () => {
    console.log(`Servidor ON: http://localhost:${PORT}/`)
})
```