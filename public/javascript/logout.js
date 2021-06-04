async function logoutHandler(event) {
	// prevent page reload
	event.preventDefault();

	// sign out of firebase
	await firebase
		.auth()
		.signOut()
		.then(() => {
			console.log("Sign out successful");
		})
		.catch((err) => {
			console.log(err);
			console.log("Sign out not successful");
		});

	// destroy the session
}

// need an event listener on the logout button
