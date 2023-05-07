const mongoose = require('mongoose') // to connect server with mongodb & create schema
const greenhouseSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    cluster: {
        type: String,
        required: true,
        trim: true
    },
    plantType: {
        type: String,
        required: true,
        trim: true
    },
    weedRatio: {
        type: Number,
        required: true,
        trim: true
    },
    weedLines: {
        type: Number,
        required: true,
        trim: true
    },
    fruitRatio: {
        type: Number,
        required: true,
        trim: true
    },
    residence: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    notes: [
        {
            type: String,
            required: false,
            trim: true
        }

    ],
    owner: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'User',
    }
}, {
    timestamps: true,
})

const Greenhouse = mongoose.model('greenhouse', greenhouseSchema)
module.exports = Greenhouse