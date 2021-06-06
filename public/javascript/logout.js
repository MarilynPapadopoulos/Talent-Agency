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
	const response = await fetch("/api/users/logout", {
		method: "post",
		headers: {
			"Content-Type": "application/json",
		},
	});

	// check the response status
	if (response.ok) {
		document.location.replace("/login");
	} else {
		document.location.replace("/login");
		// alert(response.statusText);
	}
}

document
	.querySelector("#signout-button")
	.addEventListener("click", logoutHandler);
