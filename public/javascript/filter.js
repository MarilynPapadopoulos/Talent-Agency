async function filterHandler(event) {
	event.preventDefault();

	// initialize the query string
	let query = "";

	// get the filter values from the page and add to query string if a value has been entered
	const gender = document.querySelector("#gender").value.trim();
	if (gender !== "") {
		query += `gender=${gender}&`;
	}

	const age = document.querySelector("#age").value.trim();
	if (age !== "") {
		query += `age=${age}&`;
	}

	const height = document.querySelector("#height").value.trim();
	if (height !== "") {
		query += `height=${height}&`;
	}

	const weight = document.querySelector("#weight").value.trim();
	if (weight !== "") {
		query += `weight=${weight}&`;
	}

	const eye_colour = document.querySelector("#eye-colour").value.trim();
	if (eye_colour !== "") {
		query += `eye_colour=${eye_colour}&`;
	}

	const hair_colour = document.querySelector("#hair-colour").value.trim();
	if (hair_colour !== "") {
		query += `hair_colour=${hair_colour}&`;
	}

	const size = document.querySelector("#size").value.trim();
	if (size !== "") {
		query += `size=${size}&`;
	}

	const complexion = document.querySelector("#complexion").value.trim();
	if (complexion !== "") {
		query += `complexion=${complexion}&`;
	}

	const speaks_french = document.querySelector("#speaks-french").checked;
	if (speaks_french === true) {
		query += `speaks_french=true&`;
	}

	const speaks_spanish = document.querySelector("#speaks-spanish").checked;
	if (speaks_spanish === true) {
		query += `speaks_spanish=true&`;
	}

	const speaks_italian = document.querySelector("#speaks-italian").checked;
	if (speaks_italian === true) {
		query += `speaks_italian=true&`;
	}

	const speaks_mandarin = document.querySelector("#speaks-mandarin").checked;
	if (speaks_mandarin === true) {
		query += `speaks_mandarin=true&`;
	}

	// remove the "&" from the last index of the query string
	query = query.slice(0, query.length - 1);

	// route the user to the appropriate route
	document.location.replace(`/agent/filtered?${query}`);
}

document
	.querySelector("#filter-button")
	.addEventListener("click", filterHandler);
