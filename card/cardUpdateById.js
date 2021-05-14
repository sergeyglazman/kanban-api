const Card = require('./cardModel');

function cardUpdateById(req, res)  {
    const cardId = req.params.cardId;

    Card.updateOne({ _id: cardId }, req.body)
        .exec()
        .then(() => {
            res.status(200).json('Card was successfully updated')
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json('Card update error');
        })
}

module.exports = cardUpdateById;