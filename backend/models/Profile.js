import mongoose from 'mongoose';

const profileSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    enrollment_number: {type: String, required: true, unique: true},
    branch: {type: String, required: true},
    year: {type: String, required: true},
    profile_picture: {type: String, default: 'default.jpg'},
    bio: {type: String, default: ''}
})

export const Profile = mongoose.model('Profile', profileSchema);