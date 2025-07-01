const mongoose = require('mongoose');

const communitypostSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    username: { type: String, required: true },
    domain: { type: String, required: true },
    branch: { type: String, required: true },
    picture: { type: String, default: 'default.jpg' },
    createdAt: { type: Date, default: Date.now }
})