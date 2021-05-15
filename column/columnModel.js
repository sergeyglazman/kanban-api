const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const columnSchema = new Schema({
    title: {
        type: String,
        select: true,
        required: true,
        unique: true,
    },
    status: {
        type: String,
        select: true,
        required: true,
        unique: true,
    }
});

columnSchema.set('timestamps', true);

module.exports = mongoose.model('Column', columnSchema)