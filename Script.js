const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const formMessage = document.getElementById("formMessage");

    if (name === "" || email === "" || message === "") {
        formMessage.textContent = "Please fill in all fields.";
        return;
    }

    if (!email.includes("@")) {
        formMessage.textContent = "Please enter a valid email.";
        return;
    }

    formMessage.textContent = "Message sent successfully!";

    form.reset();
});