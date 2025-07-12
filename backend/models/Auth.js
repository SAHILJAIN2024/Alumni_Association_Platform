import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const authSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  role: { 
    type: String, 
    enum: ['student', 'alumni', 'admin'],  // ✅ Accepting all three roles
    required: true 
  },
  enrollment_number: { type: String, required: true, unique: true },
  branch: { type: String, required: true },
  year: { type: String, required: true }
});

authSchema.pre('save', async function(next) {
  if (!this.isModified('password')) {
    return next();
  }

  this.password = await bcrypt.hash(this.password, 10); 
  next();
})

authSchema.methods.isPasswordCorrect = async function(password) {
  return await bcrypt.compare(password, this.password);
}

authSchema.methods.generateAuthToken = function() {
  return jwt.sign({ id: this._id, role: this.role },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: '1h' });
}

authSchema.methods.generateRefreshToken = function() {
  return jwt.sign({ id: this._id, role: this.role },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: '1d' });
}
const Auth = mongoose.model('Auth', authSchema);
export default Auth;
