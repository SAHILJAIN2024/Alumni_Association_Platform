import mongoose from 'mongoose';

const   IdeaSchema = new mongoose.Schema({
    title: { type: String, required: true },
    domain: { type: String, required: true },
    description: { type: String, required: true },
    username: { type: String, required: true },
    status: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' },
    createdAt: { type: Date, default: Date.now }
})

export const Idea = mongoose.model('Idea', IdeaSchema);