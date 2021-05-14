const Card = require('./cardModel')


function cardGetAll(req, res)  {
    Card.find()
        .exec()
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json('Card get all error')
        })
}

module.exports = cardGetAll;