const Card = require('./cardModel')

function cardCreate(req, res) {
    const newCard = new Card({
        name: req.body.name,
        description: req.body.description,
        status: req.body.status,
        priority: req.body.priority,
    });

    newCard
        .save()
        .then(() => {
            res.status(200).json('Card successfully created');
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json('Card was not created');
        });
}

module.exports = cardCreate;