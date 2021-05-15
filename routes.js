const cardCreate = require("./card/cardCreate");
const cardDelete = require("./card/cardDelete");
const cardGetAll = require("./card/cardGetAll");
const cardUpdateById = require("./card/cardUpdateById");
const columnCreate = require("./column/columnCreate");
const columnGetAll = require("./column/columnGetAll");
const columnDelete = require("./column/columnDelete");


function routes(app) {

    app.get('/', (req, res) => {
        res.send('Hello!')
    })

    app.get('/card', cardGetAll);
    app.delete('/card/:cardId', cardDelete);
    app.post('/card', cardCreate);
    app.patch('/card/:cardId', cardUpdateById);
    app.get('/column', columnGetAll);
    app.post('/column', columnCreate);
    app.delete('/column/:columnId', columnDelete)
}

module.exports = routes;
