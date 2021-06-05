async function deleteUserHandler(event) {
	event.preventDefault();

	// get the email and password for re-authentication and deletion in firebase
	const email = document.querySelector("#email").value.trim();
	const password = document.querySelector("#password").value.trim();

	console.log("EMAIL: ", email, " PASSWORD: ", password);

	// log in
	await firebase
		.auth()
		.signInWithEmailAndPassword(email, password)
		.then((userCredential) => {
			console.log("Login Successful!");
		})
		.catch((err) => {
			var errorCode = err.code;
			var errorMessage = err.message;
			alert("No user found with this username and password combination");
			return;
		});

	var user = firebase.auth().currentUser;

	// delete
	await user
		.delete()
		.then(function () {
			console.log("Deletion successful!");
		})
		.catch((err) => {
			alert("User could not be deleted");
			return;
		});

	// delete the profile first (because of dependency)
	const response1 = await fetch("/api/profiles", {
		method: "delete",
		headers: {
			"Content-Type": "application/json",
		},
	});

	// check the response status
	if (response1.ok) {
		console.log("profile deleted");
	} else {
		alert(response1.statusText);
	}

	// delete the user
	const response2 = await fetch("/api/users", {
		method: "delete",
		headers: {
			"Content-Type": "application/json",
		},
	});

	// check the response status
	if (response2.ok) {
		console.log("user deleted");
		document.location.replace("/login");
	} else {
		alert(response2.statusText);
	}

	// destroy the session
	const response3 = fetch("/api/users/logout", {
		method: "post",
		headers: {
			"Content-Type": "application/json",
		},
	});

	// check the response status
	if (response3.ok) {
		document.location.replace("/login");
	} else {
		document.location.replace("/login");
	}
}

document
	.querySelector("#delete-button")
	.addEventListener("click", deleteUserHandler);
