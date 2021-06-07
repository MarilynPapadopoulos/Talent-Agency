async function createProfileHandler(event) {
	// prevent default behaviour of reloading
	event.preventDefault();

	// get gender values
	const genders = document.getElementsByName("gender");
	let gender;
	for (let i = 0; i < genders.length; i++) {
		if (genders[i].checked) {
			gender = genders[i].value;
		}
	}

	// get age value
	const age = document.querySelector("#age").value.trim();

	// get eye colour value
	const eye_colours = document.getElementsByName("eyecolor");
	let eye_colour;
	for (let i = 0; i < eye_colours.length; i++) {
		if (eye_colours[i].checked) {
			eye_colour = eye_colours[i].value;
		}
	}

	// get languages spoken
	const speak_french = document.querySelector("#french").checked;
	const speak_spanish = document.querySelector("#spanish").checked;
	const speak_italian = document.querySelector("#italian").checked;
	const speak_mandarin = document.querySelector("#mandarin").checked;

	// get measurables
	const height = document.querySelector("#height").value.trim();
	const weight = document.querySelector("#weight").value.trim();
	const hair_colour = document.querySelector("#hair-color").value.trim();
	const size = document.querySelector("#size").value.trim();
	const complexion = document.querySelector("#complexion").value.trim();
	const skills = document.querySelector("#skills").value.trim();

	if (
		!(
			gender &&
			age &&
			height !== "" &&
			weight !== "" &&
			hair_colour !== "" &&
			size !== "" &&
			complexion !== "" &&
			skills !== ""
		)
	) {
		alert("Please fill out all fields");
		return;
	}

	// only execute logic if relevant inputs are filled in
	if (
		gender &&
		age &&
		height !== "" &&
		weight !== "" &&
		hair_colour !== "" &&
		size !== "" &&
		complexion !== "" &&
		skills !== ""
	) {
		const response = await fetch("/api/profiles", {
			method: "post",
			body: JSON.stringify({
				gender,
				age,
				height,
				weight,
				eye_colour,
				hair_colour,
				size,
				complexion,
				speak_french,
				speak_spanish,
				speak_italian,
				speak_mandarin,
				skills,
			}),
			headers: {
				"Content-Type": "application/json",
			},
		});

		if (response.ok) {
			document.location.replace("/talent");
		} else {
			alert(response.statusText);
		}
	}

	// temporary redirect since this function is not currently linked to the db
	document.location.replace("/talent");
}

document
	.querySelector("#create-profile-button")
	.addEventListener("click", createProfileHandler);
