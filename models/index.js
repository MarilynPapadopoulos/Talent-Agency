const User = require('./User');
const Profile = require('/Profile');
const Role = require('./Role');

//create associations

User.hasOne(Profile, {
    foreignKey: 'profile_id'
});
Profile.belongsTo(User, {
    foreignKey: 'profile_id'
});
User.hasOne(Role, {
    foreignKey: 'role_id'
});
Role.belongsTo(User, {
    foreignKey: 'role_id'
});

module.exports = { User, Profile, Role };