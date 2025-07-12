import mongoose from 'mongoose';

const councellingSchema = new mongoose.Schema({
    username: { type: String, required: true },
    problem_description: { type: String, required: true },
    solution: { type: String, multiple : true },
    createdAt: { type: Date, default: Date.now }
})

export const Councelling = mongoose.model('Councelling', councellingSchema);