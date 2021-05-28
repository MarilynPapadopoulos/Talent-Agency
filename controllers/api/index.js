const router = require("express").Router();

// get the routes for each table
const userRoutes = require("./user-routes");
const profileRoutes = require("./profile-routes");

// set the addresses for routes
router.use("/users", userRoutes);
router.use("/profiles", profileRoutes);

module.exports = router;
