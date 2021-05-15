const Column = require('./columnModel')

function columnDelete(req, res)  {
    const columnId = req.params.columnId;

    Column.deleteOne({_id: columnId})
        .exec()
        .then(() => {
            res.status(200).json('Column was deleted');
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json('Column delete error')
        })
}

module.exports = columnDelete;