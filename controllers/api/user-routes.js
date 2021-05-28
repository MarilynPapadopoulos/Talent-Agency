const router = require("express").Router();
const { User, Profile, Role } = require("../../models");
// add authentication here for routes

// GET all users - /api/users/
// this may not be needed - if not it can be removed
router.get("/", (req, res) => {
	// access User model and run .findAll() method
	User.findAll({
		attributes: { exclude: ["password"] },
		include: [
			{
				model: Role,
				attributes: ["role_name"],
			},
			{
				model: Profile,
				attributes: [
					"gender",
					"age",
					"height",
					"weight",
					"eye_colour",
					"hair_colour",
					"size",
					"complexion",
					"speak_french",
					"speak_spanish",
					"speak_italian",
					"speak_mandarin",
					"skills",
				],
			},
		],
	})
		.then((dbUserData) => res.status(200).json(dbUserData))
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

// GET all talent= - /api/users/talent
// this will be used on the agent landing page to populate the page with all talent prior to filtering

module.exports = router;
