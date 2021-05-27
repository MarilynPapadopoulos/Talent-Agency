const { Profile } = require('../models');

const profileData = [
    {
        profile_gender: 'F',
        profile_age: 24,
        profile_height: 175,
        profile_weight: 50,
        profile_eye_color: green,
        profile_hair_color: red,
        profile_size: 4,
        profile_complexion: tan,
        profile_speak_french: true,
        profile_speak_spanish: false,
        profile_speak_italian: false,
        profile_speak_mandarin: false,
        profile_skills: 'horseback riding'
    }
];
const seedProfile = () => Profile.bulkCreate(profileData);

module.exports = seedProfile; 