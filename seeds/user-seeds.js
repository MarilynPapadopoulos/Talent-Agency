const { User } = require("../models");

const userData = [
	{
		first_name: "Iona",
		last_name: "Mink",
		email: "ionamink@mail.com",
		role_id: 2,
	},
	{
		first_name: "John",
		last_name: "Doe",
		email: "johndoe@mail.com",
		role_id: 2,
	},
	{
		first_name: "Jimmy",
		last_name: "Doe",
		email: "jimmydoe@mail.com",
		role_id: 2,
	},
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
