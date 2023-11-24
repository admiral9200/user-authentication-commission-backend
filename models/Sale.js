const mongoose = require('mongoose');

const SaleSchema = new mongoose.Schema({
    date: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    place: {
        type: String,
        required: true
    },
    roomNum: {
        type: Number,
        required: true
    },
    receiver: {
        type: String,
        required: true
    },
    box: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: true
    },
    flag: {
        type: Number,
        required: true
    }
}, { timestamps: true });

const Sale = mongoose.model('Sale', SaleSchema);

module.exports = Sale;