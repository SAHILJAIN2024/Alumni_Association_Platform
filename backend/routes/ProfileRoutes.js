const express = require('express');
const router = express.Router();
const Profile = require('../models/Profile');

router.get('/:username', async (req,res) => {
    const {username, email, enrollment_number, branch, profile_picture, year, bio} = req.params;

    try {
        const profile = Profile.findOne({email: email || enrollment_number})
        if(!profile) {
            return res.status(404).json({message: 'Profile not found'});
        }
        res.status(200).json({
            username: profile.username,
            email: profile.email,
            enrollment_number: profile.enrollment_number,
            branch: profile.branch,
            year: profile.year,
            profile_picture: profile.profile_picture,
            bio: profile.bio
        });

    } catch (err) {
        console.log(err);
        res.status(500).json({message: 'Server Error'});
    }
});

router.put('/:username', async (req,res) => {
    const {username,email, enrollment_number, branch, year, bio} = req.body;
    try {
        new updateprofile = await Profile.findOneAndUpdate(
            {username: req.params.username},
            {email, enrollment_number, branch, year, bio},
            {new: true}
        );
        if(!updateprofile) {
            return res.status(404).json({message: 'Profile not found'});
        }
        res.status(200).json({
            message: 'Profile updated successfully',
            profile: {
                username: updateprofile.username,
                email: updateprofile.email,
                enrollment_number: updateprofile.enrollment_number,
                branch: updateprofile.branch,
                year: updateprofile.year,
                bio: updateprofile.bio
            }
        });
        updateprofile.save();
        
    } catch (err) {
        console.log(err);
        res.status(500).json({message: 'server error'});
    }

})