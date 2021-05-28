const router = require("express").Router();
const { User, Profile, Role } = require("../../models");
// add authentication middleware here for routes

// GET all users - /api/users/
// this may not be needed - if not it can be removed
router.get("/", (req, res) => {
	// access User model and run .findAll() method
	User.findAll({
		attributes: { exclude: ["password"] },
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
		.then((dbUserData) => res.status(200).json(dbUserData))
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

// GET all talent - /api/users/talent
// this will be used on the agent landing page to populate the page with all talent
router.get("/talent", async (req, res) => {
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
		attributes: { exclude: ["password"] },
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
		.then((dbUserData) => res.status(200).json(dbUserData))
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

// GET one user by id - /api/users/:id
router.get("/:id", (req, res) => {
	User.findOne({
		attributes: { exclude: ["password"] },
		where: {
			id: req.params.id,
		},
	})
		.then((dbUserData) => {
			// if no user is returned, send a 404 status
			if (!dbUserData) {
				res.status(404).json({ message: "No user found with this ID!" });
				return;
			}
			// else, return the user data
			res.status(200).json(dbUserData);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

// POST create a new user - /api/users
// note: this does not include the creation of a profile for talent users - that will be in the profile-routes.js file
router.post("/", (req, res) => {
	const { first_name, last_name, email, password, role_id } = req.body;

	User.create({
		first_name,
		last_name,
		email,
		password,
		role_id,
	})
		.then((dbUserData) => {
			//--- need to add the role and logged in status to the session here ---
			res.status(200).json(dbUserData);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

// --- need to add POST routes for login and logout ---

// PUT update a talent user - /api/users/:id
// this request will be sent from the talent update profile page
router.put("/:id", (req, res) => {
	User.update(req.body, {
		where: {
			id: req.params.id,
		},
	})
		.then((dbUserData) => {
			// if no user is returned, send a 404 status
			if (!dbUserData) {
				res.status(404).json({ message: "No user found with this ID!" });
				return;
			}
			// else, return the user data
			res.status(200).json(dbUserData);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

// DELETE route to remove a user by id - /api/users/:id
// this request will be sent from the talent dashboard page
router.delete("/:id", (req, res) => {
	User.destroy({
		where: {
			id: req.params.id,
		},
	})
		.then((dbUserData) => {
			// if no user is returned, send a 404 status
			if (!dbUserData) {
				res.status(404).json({ message: "No user found with this ID!" });
				return;
			}
			// else, return the user data
			res.status(200).json(dbUserData);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

module.exports = router;
