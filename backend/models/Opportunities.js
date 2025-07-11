import mongoose from 'mongoose';

const opportunitySchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    domain: { type: String, required: true },
    branch: { type: String, required: true },
    type: { type: String, enum: ['internship', 'job', 'research', 'team invite'], required: true },
    createdBy: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
})

export const Opportunity = mongoose.model('Opportunity', opportunitySchema);