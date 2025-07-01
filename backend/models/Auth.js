const mongoose = require('mongoose');

const authSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    role: {type: String, enum: ['user', 'admin'], required: true},
    enrollment_number: {type: String, required: true, unique: true},
    branch: {type: String, required: true},
    year: {type: String, required: true}
})

module.exports = mongoose.model('Auth', authSchema);