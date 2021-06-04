async function loginHandler(event) {
	// prevent the default behaviour of page reload
	event.preventDefault();

	// get the email and password from the form
	const email = document.querySelector("#email").value.trim();
	const password = document.querySelector("#password").value.trim();

	console.log("EMAIL: ", email, " PASSWORD: ", password);

	// log in with firebase
	await firebase
		.auth()
		.signInWithEmailAndPassword(email, password)
		.then((userCredential) => {
			var user = userCredential.user;

			console.log("Login Successful!");
		})
		.catch((err) => {
			var errorCode = err.code;
			var errorMessage = err.message;
			alert("No user found with this username and password combination");
			return;
		});

	var user = firebase.auth().currentUser;
	console.log(user);

	if (user) {
		console.log("Signed in Successfully");
	} else {
		console.log("did not work");
		return;
	}

	// send request to api login route to create a session
	const response = await fetch("/api/users/login", {
		method: "post",
		body: JSON.stringify({
			email: email,
		}),
		headers: {
			"Content-Type": "application/json",
		},
	});

	// check the response status
	if (response.ok) {
		console.log("success");
		document.location.replace("/redirect");
	} else {
		alert(response.statusText);
	}
}

document.querySelector("#login-button").addEventListener("click", loginHandler);
