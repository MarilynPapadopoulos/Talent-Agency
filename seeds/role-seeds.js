const { Role } = require("../models");

const roleData = [
	{
		role_name: "agent",
	},
	{
		role_name: "talent",
	},
];

const seedRoles = () => Role.bulkCreate(roleData);

module.exports = seedRoles;
