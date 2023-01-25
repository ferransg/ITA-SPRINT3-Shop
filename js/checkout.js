
// Exercise 7
function validate() {
	let error = 0;

	// Get the input fields
	let fName = document.getElementById("fName");
	let fLastN = document.getElementById("fLastN");
	let fEmail = document.getElementById("fEmail");
	let fPassword = document.getElementById("fPassword");
	let fAddress = document.getElementById("fAddress");
	let fPhone = document.getElementById("fPhone");

	const inputFields = [fName, fLastN, fEmail, fPassword, fAddress, fPhone];

	// Get the error elements
	let errorName = document.getElementById("errorName");
	let errorLastN = document.getElementById("errorLastN");
	let errorEmail = document.getElementById("errorEmail");
	let errorPassword = document.getElementById("errorPassword");
	let errorAddress = document.getElementById("errorAddress");
	let errorPhone = document.getElementById("errorPhone");

	const errorFields = [errorName, errorLastN, errorEmail, errorPassword, errorAddress, errorPhone];

	// Expressiones regulares para testear condiciones del formulario
	const REGEX_FNAME = /^(?! )[A-Za-zÀ-ÿ\s]{3,}$/i;
	const REGEX_FLASTN = /^(?! )[A-Za-zÀ-ÿ\s]{3,}$/i;
	const REGEX_FEMAIL = /^[\w-\.]+@([\w-\.]+\.)+[a-z]{2,3}$/i;
	const REGEX_FPASSWORD = /^.{4,8}$/;
	const REGEX_FADDRESS = /^(?! )[/\\0-9A-Za-zÀ-ÿ\s]{3,}$/i;
	const REGEX_FPHONE = /^[0-9]{9}$/;

	const REGEX = [REGEX_FNAME, REGEX_FLASTN, REGEX_FEMAIL, REGEX_FPASSWORD, REGEX_FADDRESS, REGEX_FPHONE];

	// Validate fields entered by the user: name, phone, password, and email
	for (let i = 0; i < 6; i++) {
		if (inputFields[i].value == "" || REGEX[i].test(inputFields[i].value) == false) {
			inputFields[i].style.borderColor = "red";
			errorFields[i].style.display = "block";
			error = 1;
		}
	}

	let form = document.querySelector("form");

	if (error > 0) {
		alert("Error");
		form.onsubmit = event.preventDefault(); // Previene el envio del formulario si contiene errores
	} else {
		alert("OK");
		form.onsubmit = true;
	}
}