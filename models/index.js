const User = require("./User");
const Profile = require("./Profile");
const Role = require("./Role");

//create database table relationships

// Users table linked to Profile table through "user_id"
Profile.belongsTo(User, {
	foreignKey: "user_id",
});

User.hasOne(Profile, {
	foreignKey: "user_id",
});

// Users table linked to Roles table through "role_id"
User.belongsTo(Role, {
	foreignKey: "role_id",
});

Role.hasOne(User, {
	foreignKey: "role_id",
});

module.exports = { User, Profile, Role };
