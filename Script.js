document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Stop form from submitting

    let valid = true;

    // Clear old errors
    document.querySelectorAll(".error").forEach(e => e.textContent = "");

    // First Name
    let firstName = document.getElementById("first-name").value.trim();
    if (firstName === "") {
        document.getElementById("first-name-error").textContent = "First name is required";
        valid = false;
    }

    // Last Name
    let lastName = document.getElementById("last-name").value.trim();
    if (lastName === "") {
        document.getElementById("last-name-error").textContent = "Last name is required";
        valid = false;
    }

    // Email
    let email = document.getElementById("email").value.trim();
    if (email === "") {
        document.getElementById("email-error").textContent = "Email is required";
        valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        document.getElementById("email-error").textContent = "Enter a valid email";
        valid = false;
    }

    // Query Type (radio)
    let querySelected = document.querySelector("input[name='query']:checked");
    if (!querySelected) {
        document.getElementById("query-error").textContent = "Please select a query type";
        valid = false;
    }

    // Message
    let message = document.getElementById("message").value.trim();
    if (message === "") {
        document.getElementById("message-error").textContent = "Message is required";
        valid = false;
    }

    // Consent
    let consent = document.getElementById("consent").checked;
    if (!consent) {
        document.getElementById("consent-error").textContent = "You must agree before submitting";
        valid = false;
    }

    // If all good, show success popup
    if (valid) {
        let successPopup = document.getElementById("success-popup");
        successPopup.style.display = "block";

        // Hide popup after 3 seconds and reset form
        setTimeout(() => {
            successPopup.style.display = "none";
            document.getElementById("contact-form").reset();
        }, 3000);
    }
});

