const router = require("express").Router();
const { User, Role, Profile } = require("../models");

// show the agent dashboard
router.get("/", async (req, res) => {
	// if the user if not logged in, send them to the login page
	if (!req.session.loggedIn) {
		res.redirect("/login");
	}

	// if it is a talent user trying to access, send them to the talent dashboard
	if (req.session.role_id === 2) {
		res.redirect("/talent");
	}

	// get the id for "talent" in the Roles table
	let talent_id;

	await Role.findOne({
		where: { role_name: "talent" },
	})
		.then((dbRoleData) => {
			talent_id = dbRoleData.id;
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});

	// access User model and run .findAll() method
	User.findAll({
		where: {
			role_id: talent_id,
		},
		include: [
			{
				// include the role name
				model: Role,
				attributes: ["role_name"],
			},
			{
				// include all profile details - if the user is an agent, it will be null
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
		.then((dbUserData) => {
			// serialize data
			const users = dbUserData.map((user) => user.get({ plain: true }));

			// // res.json(dbUserData);
			res.render("agent-dashboard", { users });
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

module.exports = router;
