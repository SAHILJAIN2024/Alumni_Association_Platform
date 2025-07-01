const mongoose = require('mongoose');

const querySchema = new mongoose.Schema({
    username: { type: String, required: true },
    message: { type: String, required: true }
})

module.exports = mongoose.model('Query', querySchema);