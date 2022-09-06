const express = require('express')
const wordsEn = require('./data/words-en')
const wordsSp = require('./data/words-sp')

const app = express()

app.get('/', (req, res) => {
    res.send('API is running...')
})

app.get('/api/words', (req, res) => {
    res.json(wordsEn)
})

app.listen(5000, console.log('Server running on port 5000'))