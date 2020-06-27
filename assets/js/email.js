console.log("hi!");
    
    function sendMail(contactForm) {
	emailjs.send("outlook", "project_requests", {
		"from_name": contactForm.fullname.value,
		"from_email": contactForm.email.value,
		"service_request": contactForm.projectsummary.value
		})
		.then(
			function(response) {
				console.log("SUCCESS", response);
			},
			function(error) {
				console.log("FAILED", error);
			});
}