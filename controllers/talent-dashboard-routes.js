const router = require("express").Router();
const { User, Role, Profile } = require("../models");

// route to show to talent dashboard
router.get("/", (req, res) => {
	res.render("talent-dashboard");
});

module.exports = router;
