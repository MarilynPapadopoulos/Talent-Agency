const router = require("express").Router();
const { User, Role, Profile } = require("../models");

// show the agent dashboard
router.get("/", (req, res) => {
	// if the user if not logged in, send them to the login page
	if (!req.session.loggedIn) {
		res.redirect("/login");
	}
	// find all talent users in the database that match the criteria
	// GET request here
	User.findAll({
		// here will be the get request criteria
	}).then((dbUserData) => {
		// here will be the logic to filter the results by filter criteria
	});

	res.render("agent-dashboard");
});

module.exports = router;
