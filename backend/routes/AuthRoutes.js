const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const router = express.Router();
const Auth = require('../models/Auth');

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

router.post('/register', async (req, res) => {
  const { username, password, email, role, enrollment_number, branch, year } = req.body;

  try {
    const existingUser = await Auth.findOne({
      $or: [{ username }, { email }, { enrollment_number }]
    });

    if (existingUser) {
      return res.status(400).json({ message: 'User already exists with this username, email or enrollment number' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new Auth({
      username,
      password: hashedPassword,
      email,
      role,
      enrollment_number,
      branch,
      year
    });

    await newUser.save();

    const token = jwt.sign({ id: newUser._id }, JWT_SECRET, { expiresIn: '1h' });

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
    const { username, password, email, enrollment_number} = req.body;
    try {
        const user = await Auth.findOne({ email });
        if (!user){
            return res.status(400).json({message: 'Id not found'});
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({message: 'Invalid credentials'});
        }
        const token = jwt.sign({ id: user.id}, JWT_SECRET, { expiresIn: '1h' });
        return res.status(200).json( {message: 'login successful', token, user });
    } catch (err){
        console.log(err);
        return res.status(500).json({message: 'server error'});        
    }
})

module.exports = router;
