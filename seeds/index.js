const seedRoles = require("./role-seeds");
const seedUsers = require("./user-seeds");
const seedProfiles = require("./profile-seeds");

const sequelize = require("../config/connection");

const seedAll = async () => {
	await sequelize.sync({ force: true });
	console.log("\n--- DATABASE SYNCED ---\n");
	// seed Roles first so that the Users can be related to them
	await seedRoles();
	console.log("\n--- ROLES SEEDED ---\n");
	// then seed Users so that the Profiles can be related to them
	await seedUsers();
	console.log("\n--- USERS SEEDED ---\n");
	// finally, seed Profiles
	await seedProfiles();
	console.log("\n--- PROFILES SEEDED ---\n");

	process.exit(0);
};

seedAll();
