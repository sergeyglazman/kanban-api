const Card = require('./cardModel')

function cardDelete(req, res)  {
    const cardId = req.params.cardId;

    Card.deleteOne({_id: cardId})
        .exec()
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json('Card delete error')
        })
}

module.exports = cardDelete;