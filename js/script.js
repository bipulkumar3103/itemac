function sendMail(formId, event) {
    event.preventDefault();  // Prevent form submission

    let form = document.getElementById(formId); // Dynamically get the form using its ID
    let params = {
        name: capitalizeName(form.querySelector('.input-name').value),
        email: form.querySelector('.input-email').value.toLowerCase(),
        phone: form.querySelector('.input-phone').value,
        message: formatMessage(form.querySelector('.input-textarea').value),
    };

    emailjs.send("service_qogntcd", "template_cc15app", params).then(
        response => {
            console.log(response);
            if (response.status === 200) {
                alert("Your message has been sent successfully!");
                form.reset(); // Reset the form after successful submission
            } else {
                alert("There was an error sending your message: " + JSON.stringify(response));
            }
        },
        error => {
            console.error("Error sending email: ", error);
            alert("There was an error sending your message. Please try again. Error: " + JSON.stringify(error));
        }
    );
}

// Function to capitalize the first letter of the name
function capitalizeName(name) {
    return name.charAt(0).toUpperCase() + name.slice(1);
}

// Function to capitalize the first letter of the message and make the rest lowercase
function formatMessage(message) {
    return message.charAt(0).toUpperCase() + message.slice(1).toLowerCase();
}
