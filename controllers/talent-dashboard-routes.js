const router = require("express").Router();
const { User, Role, Profile } = require("../models");

// route to show the update route
router.get("/update", (req, res) => {
	// if the user if not logged in, send them to the login page
	if (!req.session.loggedIn) {
		res.redirect("/login");
	}

	// if it is an agent user trying to access, send them to the agent dashboard
	if (req.session.role_id === 1) {
		res.redirect("/agent");
	}

	// get the profile information for the logged-in user
	Profile.findOne({
		where: {
			user_id: req.session.user_id,
		},
	})
		.then((dbUserData) => {
			// serialize data
			const profile = dbUserData.get({ plain: true });

			res.render("update-profile", { profile });
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

// route to show to talent dashboard
router.get("/", (req, res) => {
	// if the user if not logged in, send them to the login page
	if (!req.session.loggedIn) {
		res.redirect("/login");
	}

	// if it is an agent user trying to access, send them to the agent dashboard
	if (req.session.role_id === 1) {
		res.redirect("/agent");
	}

	res.render("talent-dashboard");
});

module.exports = router;
