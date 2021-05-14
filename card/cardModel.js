const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cardSchema = new Schema({
    name: {
        type: String,
        select: true,
        required: true,
        unique: false,
    },
    description: {
        type: String,
        select: true,
        required: true,
    },
    status: {
        type: String,
        select: true,
        required: true,
    },
    priority: {
        type: Number,
        select: true,
        required: true,
    }
});

cardSchema.set('timestamps', true);

module.exports = mongoose.model('Card', cardSchema)

