const router = require("express").Router();

// import routes from folder locations
const apiRoutes = require("./api");
const homeRoutes = require("./home-routes");
const agentRoutes = require("./agent-dashboard-routes");
const talentRoutes = require("./talent-dashboard-routes");

// set route paths
router.use("/api", apiRoutes);
router.use("/", homeRoutes);
router.use("/agent", agentRoutes);
router.use("/talent", talentRoutes);

router.use((req, res) => {
	res.send("<h1>Wrong Route!</h1>");
});

module.exports = router;
