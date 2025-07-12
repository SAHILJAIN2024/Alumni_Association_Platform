import express from 'express';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/profile', authMiddleware, async (req, res) => {
    res.json({
        message: 'User profile fetched successfully',
        user: req.user,
    })
});

export default router;