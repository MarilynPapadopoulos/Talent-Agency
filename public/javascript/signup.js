async function signupHandler(event) {
	// stop the default behaviour of page reload
	event.preventDefault();

	// get the values from the signup form
	const first_name = document.querySelector("#first_name").value.trim();
	const last_name = document.querySelector("#last_name").value.trim();
	const email = document.querySelector("#email").value.trim();
	const password = document.querySelector("#password").value.trim();
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
			// redirect here
			console.log("RESPONSE OK!");
		} else {
			alert(response.statusText);
		}
	}
}

document
	.querySelector("#signup-button")
	.addEventListener("click", signupHandler);
