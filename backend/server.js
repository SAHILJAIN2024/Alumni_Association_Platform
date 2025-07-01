const express = require('express');
const router = express.Router();   
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose'); // use this directly

dotenv.config();

const AuthRoutes = require('./routes/AuthRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', AuthRoutes);

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log('✅ Connected to MongoDB');
    app.listen(process.env.PORT || 5000, () => {
        console.log(`🚀 Server is running on port ${process.env.PORT || 5000}`);
    });
}).catch(err => {
    console.error('❌ MongoDB connection error:', err);
});
