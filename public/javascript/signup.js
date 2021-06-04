async function signupHandler(event) {
	// stop the default behaviour of page reload
	event.preventDefault();

	// get the values from the signup form
	const first_name = document.querySelector("#first_name").value.trim();
	const last_name = document.querySelector("#last_name").value.trim();
	const email = document.querySelector("#email").value.trim();

	// check that both passwords entered match
	const password = document.querySelector("#password").value.trim();
	const confirm = document.querySelector("#conpassword").value.trim();

	if (password !== confirm) {
		alert("Please make sure the entered passwords match!");
		return;
	}

	// set role as either talent or agent
	const talentChecked = document.querySelector("#talent").checked;
	const agentChecked = document.querySelector("#agent").checked;
	let role_id;

	// if both checkboxes are checked, send an alert and return from the function
	// we should only allow one to be selected by changing the input type
	if (talentChecked && agentChecked) {
		alert("Please select either Talent or Agent.");
		return;
	} else if (talentChecked && !agentChecked) {
		// if only talent is selected, set the role_id to 2 (talent)
		role_id = 2;
	} else if (!talentChecked && agentChecked) {
		// if only agent is selected, set the role_id to 1 (agent)
		role_id = 1;
	} else {
		// if neither are selected, force the user to select one
		alert("Please select either Talent or Agent.");
		return;
	}

	// create the account in firebase

	await firebase
		.auth()
		.createUserWithEmailAndPassword(email, password)
		.then((userCredential) => {
			var user = userCredential.user;
		})
		.catch((error) => {
			var errorCode = error.code;
			var errorMessage = error.message;
		});

	// if all fields have been populated, send the POST request to create the account
	if (first_name && last_name && email && password) {
		const response = await fetch("/api/users", {
			method: "post",
			body: JSON.stringify({
				first_name,
				last_name,
				email,
				password,
				role_id,
			}),
			headers: {
				"Content-Type": "application/json",
			},
		});

		if (response.ok) {
			// if response is good, redirect to the talent management page
			if (role_id === 2) {
				document.location.replace("/create-profile");
			} else {
				document.location.replace("/redirect");
			}
		} else {
			alert(response.statusText);
		}
	}
}

document
	.querySelector("#signup-button")
	.addEventListener("click", signupHandler);
