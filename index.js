const express = require('express')
const bodyParser = require('body-parser');

const app = express()
const PORT = 3000

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

let cards = [{id: "1", name: 'My card 1', status: 'done', priority: 1},
    {id: "2", name: 'My card 2', status: 'to do', priority: 2}];

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/card', (req, res) => {
    res.send(cards)
})

app.delete('/card/:cardId', (req, res) => {
    const cardId = req.params.cardId;
    cards = cards.filter(el => el.id !== cardId);
    res.send(cards);
})

app.patch('/card/:cardId', (req, res) => {
    const cardId = req.params.cardId;
    const card = req.body;
    cards = cards.map(el => el.id === cardId ? ({ id: el.id, ...card }) : el)
  res.send('Card updated');
})

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})