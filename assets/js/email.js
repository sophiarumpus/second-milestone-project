
function sendMail(contactForm) {
	emailjs.send("outlook", "project_requests", {
		"from_name": contactForm.fullname.value,
		"from_email": contactForm.email.value,
		"service_request": contactForm.description.value
		})
		.then(
			function(response, emailAlert) {
                console.log("SUCCESS", response);
                emailAlert(true);
			},
			function(error, emailAlert) {
                console.log("FAILED", error);
                emailAlert(false);
            }
        );
        return false; // To block from loading a new page
}
        
// Adapted from GitHub: Code-Institute-Solutions Code-Institute-Solutions/InteractiveFrontEndDevelopment-Resume //

// Notifies user of sent email 

function emailAlert(success) {
    document.getElementById("email-form").reset();
    if (success) {
        //add pop up window
    }
    else {
        //add pop up window
    }
}