const router = require("express").Router();
const { User, Role, Profile } = require("../models");

// show the filtered dashboard
router.get("/", async (req, res) => {
	// // if the user if not logged in, send them to the login page
	// if (!req.session.loggedIn) {
	// 	res.redirect("/login");
	// }

	// // if it is a talent user trying to access, send them to the talent dashboard
	// if (req.session.role_id === 2) {
	// 	res.redirect("/talent");
	// }

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
			console.log("DBUSERDATA", dbUserData);
			const results = dbUserData.filter((user) => {
				// console.log(user.dataValues.profile.dataValues);
				let keepUser = false;
				console.log("USER", user);
				const entries = Object.entries(user.dataValues.profile.dataValues);
				// console.log(entries);
				for (let i = 0; i < entries.length; i++) {
					const currentEntry = entries[i];
					if (req.query[currentEntry[0]]) {
						if (req.query[currentEntry[0]] === currentEntry[1].toString()) {
							keepUser = true;
						} else {
							keepUser = false;
							return keepUser;
						}
					}
				}
				return keepUser;
			});
			console.log("RESULTS", results);

			// serialize data
			const users = results.map((user) => user.get({ plain: true }));

			// res.json(results);

			res.render("filtered", { users, filters: req.query });
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

module.exports = router;
