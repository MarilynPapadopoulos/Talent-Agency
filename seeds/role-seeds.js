const { Role } = require('../models');

const roleData = [
    {
        role_name: agent
    },
    {
        role_name: talent
    }
]

const seedRole = () => Role.bulkCreate(roleData);

module.exports = seedRole;