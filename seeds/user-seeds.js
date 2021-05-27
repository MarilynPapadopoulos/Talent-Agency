const { User } = require('../models');

const userData = [
    {
        user_first_name: 'Iona',
        user_last_name: 'Mink',
        user_email: 'ionamink@mail.com',
        user_password: 'password'
    }
]
const seedUser = () => User.bulkCreate(productData);

module.exports = seedUser;