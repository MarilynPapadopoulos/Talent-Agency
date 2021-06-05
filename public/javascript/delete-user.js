async function deleteUserHandler(event) {
	event.preventDefault();

	// fetch to delete the user
	const response = await fetch("/api/users", {
		method: "delete",
		headers: {
			"Content-Type": "application/json",
		},
	});

	// check the response status
	if (response.ok) {
		console.log("success");
		document.location.replace("/login");
	} else {
		alert(response.statusText);
	}
}

document
	.querySelector("#delete-button")
	.addEventListener("click", deleteUserHandler);
