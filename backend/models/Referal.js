import mongoose from 'mongoose';

const referalSchema = new mongoose.Schema({
    username: { type: String, required: true },
    referredBy: { type: String, required: true },
    referralCode: { type: String, required: true, unique: true },
    referralMessage: { type: String, required: true }, 
    status: { type: String, enum: ['pending', 'accepted', 'rejected'], default: 'pending' },
    createdAt: { type: Date, default: Date.now }
})

export const Referal = mongoose.model('Referal', referalSchema);