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
	const french = document.querySelector("#french").checked;
	const spanish = document.querySelector("#spanish").checked;
	const italian = document.querySelector("#italian").checked;
	const mandarin = document.querySelector("#mandarin").checked;

	// get measurables
	const height = document.querySelector("#height").value.trim();
	const weight = document.querySelector("#weight").value.trim();
	const hair_colour = document.querySelector("#hair-color").value.trim();
	const size = document.querySelector("#size").value.trim();
	const complexion = document.querySelector("#complexion").value.trim();
	const skills = document.querySelector("#skills").value.trim();
}

document
	.querySelector("#create-profile-button")
	.addEventListener("click", createProfileHandler);
