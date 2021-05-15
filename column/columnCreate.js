const Column = require('./columnModel')

function columnCreate(req, res) {
    const newColumn = new Column({
        title: req.body.title,
        status: req.body.status,

    });

    newColumn
        .save()
        .then(() => {
            res.status(200).json('Column successfully created');
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json('Column was not created');
        });
}

module.exports = columnCreate;