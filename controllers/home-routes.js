const router = require("express").Router();
const { User, Role, Profile } = require("../models");

router.get("/", (req, res) => {
	// route users to login
	res.redirect("/login");
});

// show login page
router.get("/login", (req, res) => {
	// add logic to redirect to dashboard if the user is already logged in
	if (req.session.loggedIn) {
		if (req.session.role_id === 1) {
			res.redirect("/agent");
			return;
		} else {
			res.redirect("/talent");
			return;
		}
	}
	// otherwise, render the homepage
	res.status(200).render("login");
});

// show general signup page
router.get("/signup", (req, res) => {
	// add logic to redirect to dashboard if the user is already logged in
	if (req.session.loggedIn) {
		res.redirect("/");
		return;
	}
	// otherwise, render the general signup page
	res.status(200).render("signup");
});

// show create profile page (for talent users)
router.get("/create-profile", (req, res) => {
	// need logic here to prevent users that already have profiles from accessing

	// otherwise, render the profile creation page
	res.status(200).render("create-profile");
});

// redirect user based on account type
router.get("/redirect", (req, res) => {
	if (!req.session.loggedIn) {
		res.redirect("/login");
	}
	// redirect to the corresponding dashboard based on the user type
	if (req.session.role_id === 1) {
		res.redirect("/agent");
	} else if (req.session.role_id === 2) {
		res.redirect("talent");
	}
});

module.exports = router;
