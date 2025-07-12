import mongoose from 'mongoose';

const querySchema = new mongoose.Schema({
    username: { type: String, required: true },
    message: { type: String, required: true }
})

export const Query = mongoose.model('Query', querySchema);