import jwt from 'jsonwebtoken';

const accesstoken = process.env.ACCESS_TOKEN_SECRET;

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  
  // Format: "Bearer <token>"
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Access Denied. No token provided.' });
  }

  try {
    const verified = jwt.verify(token, accesstoken);
    req.user = verified; // Add user info to request object
    next(); // Move to next middleware or controller
  } catch (err) {
    return res.status(403).json({ message: 'Invalid or expired token' });
  }
};

export default authenticateToken;
