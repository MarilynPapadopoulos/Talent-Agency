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
	console.log("GENDER", gender);

	// get age value
	const age = document.querySelector("#age").value.trim();
	console.log("AGE", age);

	// get eye colour value
	const eye_colours = document.getElementsByName("eyecolor");
	let eye_colour;
	for (let i = 0; i < eye_colours.length; i++) {
		if (eye_colours[i].checked) {
			eye_colour = eye_colours[i].value;
		}
	}
	console.log("EYES", eye_colour);

	// get languages spoken
	const french = document.querySelector("#french").checked;
	console.log("FRENCH", french);
	const spanish = document.querySelector("#spanish").checked;
	console.log("SPANISH", spanish);
	const italian = document.querySelector("#italian").checked;
	console.log("ITALIAN", italian);
	const mandarin = document.querySelector("#mandarin").checked;
	console.log("MANDARIN", mandarin);

	// get measurables
	const height = document.querySelector("#height").value.trim();
	console.log("HEIGHT", height);
	const weight = document.querySelector("#weight").value.trim();
	console.log("WEIGHT", weight);
	const hair_colour = document.querySelector("#hair-color").value.trim();
	console.log("HAIR", hair_colour);
	const size = document.querySelector("#size").value.trim();
	console.log("SIZE", size);
	const complexion = document.querySelector("#complexion").value.trim();
	console.log("COMPLEXION", complexion);
	const skills = document.querySelector("#skills").value.trim();
	console.log("SKILLS", skills);
}

document
	.querySelector("#create-profile-button")
	.addEventListener("click", createProfileHandler);
