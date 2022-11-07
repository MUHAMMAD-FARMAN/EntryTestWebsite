const mongoose = require('mongoose');

const McqSchema = new mongoose.Schema(
    {
        question: { type: String, required: true, unique: true },
        options: { type: [String], required: true },
        answer: { type: Number, required: true },
        Subject: { type: String, required: false },
        explanation: { type: String, required: false },
        Chapter: { type: String, required: false },
        Topic: { type: String, required: false },
        Image: { type: String, required: false }
    },
    { collection: 'mcqs' }
);

const model = mongoose.model('McqSchema', McqSchema);

module.exports = model;