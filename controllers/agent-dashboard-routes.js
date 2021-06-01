const router = require("express").Router();
const { User, Role, Profile } = require("../models");

// show the agent dashboard
router.get("/", (req, res) => {
	// find all talent users in the database that match the criteria
	// GET request here
	User.findAll({
		// here will be the get request criteria
	}).then((dbUserData) => {
		// here will be the logic to filter the results by filter criteria
	});
});

module.exports = router;
