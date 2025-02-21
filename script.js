document.addEventListener("DOMContentLoaded", function () {
    const emailForm = document.getElementById("email-form");
    const passwordForm = document.getElementById("password-form");
    const emailInput = document.getElementById("email");

    emailForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Empêche le rechargement de la page

        if (emailInput.value.trim() !== "") {
            // Masquer le formulaire de l'email et afficher celui du mot de passe
            emailForm.style.display = "none";
            passwordForm.style.display = "block";
        }
    });
});
