const router = require("express").Router();
const { User, Profile, Role } = require("../../models");
// add authentication middleware here for routes

// POST create a new profile - /api/profiles
// this request will be sent from the second part of the signup page (for talent)
router.post("/", (req, res) => {
	const {
		gender,
		age,
		height,
		weight,
		eye_colour,
		hair_colour,
		size,
		complexion,
		speak_french,
		speak_spanish,
		speak_italian,
		speak_mandarin,
		skills,
	} = req.body;

	Profile.create({
		gender,
		age,
		height,
		weight,
		eye_colour,
		hair_colour,
		size,
		complexion,
		speak_french,
		speak_spanish,
		speak_italian,
		speak_mandarin,
		skills,
		user_id: req.session.user_id,
	})
		.then((dbProfileData) => {
			//--- need to add the role and logged in status to the session here ---
			res.status(200).json(dbProfileData);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

// PUT update a profile - /api/profiles/:id
// this request will be sent from the talent update profile page
router.put("/:id", async (req, res) => {
	Profile.update(req.body, {
		where: {
			user_id: req.params.id,
		},
	})
		.then((dbProfileData) => {
			// if no user is returned, send a 404 status
			if (!dbProfileData) {
				res.status(404).json({ message: "No user found with this ID!" });
				return;
			}
			// else, return the user data
			res.status(200).json(dbProfileData);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

module.exports = router;
