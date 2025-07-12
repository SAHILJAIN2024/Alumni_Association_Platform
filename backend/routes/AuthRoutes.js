import express from 'express';
import bcrypt from 'bcrypt';

import Auth from '../models/Auth.js';

const router = express.Router();


const JWT_SECRET = process.env.ACCESS_TOKEN_SECRET ;

router.post('/register', async (req, res) => {
  const { username, password, email, role, enrollment_number, branch, year } = req.body;

  try {
    const existingUser = await Auth.findOne({
      $or: [{ username }, { email }, { enrollment_number }]
    });

    if (existingUser) {
      return res.status(400).json({ message: 'User already exists with this username, email or enrollment number' });
    }

    const newUser = new Auth({
      username,
      password,
      email,
      role,
      enrollment_number,
      branch,
      year
    });

    await newUser.save();

    const token = newUser.generateAuthToken();

    return res.status(201).json({
      message: 'User registered successfully',
      token,
      user: {
        id: newUser._id,
        username: newUser.username,
        role: newUser.role
      }
    });

  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: 'Server error' });
  }
});


router.post('/login', async (req, res) => {
    const { password, email} = req.body;
    try {
        const user = await Auth.findOne({ email });
        if (!user){
            return res.status(400).json({message: 'Id not found'});
        }

        const isMatch = await user.isPasswordCorrect(password);
        if (!isMatch) {
            return res.status(400).json({message: 'Invalid credentials'});
        }
        const accessToken = user.generateAuthToken();
        const refreshToken = user.generateRefreshToken();

        return res.status(200).json( {
          message: 'login successful',
          accessToken,
          refreshToken,
          user: {
            id: user._id,
            username: user.username,
            role: user.role
          }
          });
    } catch (err){
        console.log(err);
        return res.status(500).json({message: 'server error'});        
    }
})

export default router;
