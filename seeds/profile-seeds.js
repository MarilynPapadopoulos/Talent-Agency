const { Profile } = require('../models');

const profileData = [
    {
        gender: 'F',
        age: 24,
        height: 175,
        weight: 50,
        eye_colour: "green",
        hair_colour: "red",
        size: 4,
        complexion: "tan",
        speak_french: true,
        speak_spanish: false,
        speak_italian: false,
        speak_mandarin: false,
        skills: 'Horseback Riding'
    }
];
const seedProfile = () => Profile.bulkCreate(profileData);

module.exports = seedProfile; 