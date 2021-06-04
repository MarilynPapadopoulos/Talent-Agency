const express = require("express");
const path = require("path");
const session = require("express-session");
const exphbs = require("express-handlebars");

// if we need to use helpers
// const helpers = require("./utils/helpers")

// initialize the app
const app = express();
const PORT = process.env.PORT || 3001;

// --- uncomment when connection.js is set up ---
const sequelize = require("./config/connection");

// --- uncomment when sessions are set up ---
 const SequelizeStore = require("connect-session-sequelize")(session.Store)

// --- uncomment when sessions are set up ---
// set up sessions
 const sess = {
 	secret: "4g4JCTF3",
	cookie: {},
 	resave: false,
 	saveUninitialized: true,
	store: new SequelizeStore({
		db: sequelize,
	}),
 };

 app.use(session(sess));

// require express-handlebars
const hbs = exphbs.create({});

// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
// 	apiKey: "AIzaSyAFHLNtdAy4uUbqgBV83M0Q8ejPZCx59xE",
// 	authDomain: "talent-agency-65095.firebaseapp.com",
// 	projectId: "talent-agency-65095",
// 	storageBucket: "talent-agency-65095.appspot.com",
// 	messagingSenderId: "961070160730",
// 	appId: "1:961070160730:web:c982dd07f84adde2b43163",
// 	measurementId: "G-1P8H2SFYSC"
//   };

//   // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// set up express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// set up express handlebars
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(require("./controllers/"));

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
	app.listen(PORT, () => console.log("Now listening"));
});
