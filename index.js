const express = require('express')
const { sayHelloTo } = require('./strings/strings')
const faker = require('faker-br')
const app = express()
const port = 3000


app.get('/', (req, res) => {
    let name = faker.company.companyName()
    
  res.send(sayHelloTo(name))
})

app.listen(port, () => {
  console.log(`Example app listening on port localhost${port}`)
})