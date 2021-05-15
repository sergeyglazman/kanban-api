const Column = require('./columnModel')


function columnGetAll(req, res)  {
    Column.find()
        .exec()
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json('Column get all error')
        })
}

module.exports = columnGetAll;