const router = require("express").Router();
const { User, Role, Profile } = require("../models");

// show login page
router.get("/login", (req, res) => {
	// add logic to redirect to dashboard if the user is already logged in

	// otherwise, render the homepage
	res.status(200).render("login");
});

// show general signup page
router.get("/signup", (req, res) => {
	// add logic to redirect to dashboard if the user is already logged in

	// otherwise, render the general signup page
	res.status(200).render("signup");
});

// show create profile page (for talent users)
router.get("/create-profile", (req, res) => {
	// all logic to redirect to dashboard if the user already has a profile

	// otherwise, render the profile creation page
	res.status(200).render("create-profile");
});

module.exports = router;
