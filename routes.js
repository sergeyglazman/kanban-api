let cards = [{id: "1", name: 'My card 1', status: 'done', priority: 1},
    {id: "2", name: 'My card 2', status: 'to do', priority: 2}];


function routes(app) {


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

    app.post('/card', (req, res) => {
        const card = req.body;
        cards.push({ id: Math.random().toString(), ...card });
        res.send('Card created')
    })

    app.patch('/card/:cardId', (req, res) => {
        const cardId = req.params.cardId;
        const card = req.body;
        cards = cards.map(el => el.id === cardId ? ({id: el.id, ...card}) : el)
        res.send('Card updated');
    });
}

module.exports = routes;
