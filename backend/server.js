import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import mongoose from 'mongoose';
import connectDB from './db/connectdb.js'; 
import cors from 'cors';
const router = express.Router();  


// Importing routes
import authRoutes from '../backend/routes/AuthRoutes.js';
import userRoutes from '../backend/routes/User.routes.js';



const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);

connectDB().then(() => {
    console.log('✅ Connected to MongoDB');
    app.listen(process.env.PORT || 5000, () => {
        console.log(`🚀 Server is running on port ${process.env.PORT || 5000}`);
    });
}).catch(err => {
    console.error('❌ MongoDB connection error:', err);
});
