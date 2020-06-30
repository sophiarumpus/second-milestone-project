
function sendMail(contactForm) {
	emailjs.send("outlook", "project_requests", {
		"from_name": contactForm.fullname.value,
		"from_email": contactForm.email.value,
		"service_request": contactForm.description.value
		})
		.then(
			function(response) {
                console.log("SUCCESS", response);
                emailAlert(true);
			},
			function(error) {
                console.log("FAILED", error);
                emailAlert(false);
            }
        );
        return false; // To block from loading a new page
}

// Adapted from GitHub: Code-Institute-Solutions Code-Institute-Solutions/InteractiveFrontEndDevelopment-Resume //

// Notifies user of email submission

function emailAlert(success) {
    document.getElementById("email-form").reset();
    if (success) {
        Swal.fire("Thank you! We will get back to you shortly.")
    }
    else {
        Swal.fire("Uh oh, something went wrong! Please check and try again.")
    }
}