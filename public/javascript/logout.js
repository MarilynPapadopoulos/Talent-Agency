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
	const response = fetch("/api/users/logout", {
		method: "post",
		headers: {
			"Content-Type": "application/json",
		},
	});

	// check the response status
	if (response.ok) {
		document.location.replace("/");
	} else {
		document.location.replace("/");
		// alert(response.statusText);
	}
}

document
	.querySelector("#signout-button")
	.addEventListener("click", logoutHandler);
