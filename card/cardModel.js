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
    },
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

module.exports = mongoose.model('Card', cardSchema)

