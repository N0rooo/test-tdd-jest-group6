const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.status(200).send("Bienvenue Monde")
})

app.get('/action', (req, res) => {
    const { name } = req.query;
    if (name) {
        res.status(200).send({ message: `hello ${name}!` });
    } else {
        res.status(400).send({ error: 'Name is required' });
    }
});

app.listen(port, () => {
  console.log(`Example app listening on port localhost${port}`)
})

app.get('/api/some-endpoint', (req, res) => {
    res.status(200).send({ message: 'This is a GET request' });
});

module.exports = app;