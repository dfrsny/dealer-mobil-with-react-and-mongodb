const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    trending: {
        type: Boolean, // Mengubah type menjadi Boolean
        required: true,
    },
    coverImage: {
        type: String,
        required: true,
    },
    newPrice: {
        type: Number,
        required: true,
    },
    model: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
    engine: {
        type: String,
        required: true,
    },
    transmission: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
}, {
    timestamps: true,
});

const Car = mongoose.model('Car', carSchema);
module.exports = Car;
