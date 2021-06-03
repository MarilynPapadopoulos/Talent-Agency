const router = require("express").Router();
const { User, Role, Profile } = require("../models");

// route to show to talent dashboard
router.get("/", (req, res) => {
	res.render("talent-dashboard");
});

// route to show the update route
// WE NEED TO INCLUDE THE USER ID IN THIS ROUTE AS req.params.id
router.get("/update", (req, res) => {
	res.render("update-profile");
});

module.exports = router;
