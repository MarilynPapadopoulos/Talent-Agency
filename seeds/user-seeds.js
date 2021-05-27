const { User } = require('../models');

const userData = [
    {
        first_name: 'Iona',
        last_name: 'Mink',
        email: 'ionamink@mail.com',
        password: 'password'
    }
]
const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;