# Retornando Json em APIs

### O que é Json?
JavaScript Object Notation (JSON), é um formato de dados que permite a troca de informações entre sistemas computacionais.

### Estrutura do Json:
```javascript
{
    {message: "Acesso Permitido"},
    {error: "Não Autorizado"}
}
```

### Como retornar Json no express:
* Configure o express para receber dados no formato JSON.
```javascript
app.use(express.json());
```

* Ao criar a rota, deve-se ser passado uma função de callback, esta função tem dois parâmetros "request" e "response", no corpo da função quando desejamos retornar um json como resposta usamos o seguinte método.
```javascript
res.json(); // dentro dos () coloca-se o objeto com o conteúdo que será enviado
```