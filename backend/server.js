const express = require('express')
const wordsEn = require('./data/words-en')
const wordsSp = require('./data/words-sp')
const methods = require('./data/methods')

const app = express()

app.get('/', (req, res) => {
  res.send('API is running...')
})

app.get('/api/words', (req, res) => {
  res.json(wordsEn)
})

app.get('/api/methods', (req, res) => {
  res.json(methods)
})

app.get('/api/methods/:id', (req, res) => {
  const id = Number(req.params.id)
  const method = methods.find((m) => m._id === id)
  res.json(method)
})

app.listen(5000, console.log('Server running on port 5000'))
