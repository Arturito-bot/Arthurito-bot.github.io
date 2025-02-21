document.addEventListener("DOMContentLoaded", function () {
    const emailForm = document.getElementById("email-form");
    const passwordForm = document.getElementById("password-form");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const backBtn = document.getElementById("back-btn");

    emailForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Empêche le rechargement de la page

        if (emailInput.value.trim() !== "") {
            history.pushState({ page: "password" }, "", "#password"); // Ajout à l'historique
            emailForm.style.display = "none";
            passwordForm.style.display = "block";
        } else {
            alert("Veuillez entrer votre adresse e-mail.");
        }
    });

    passwordForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Empêche le rechargement de la page

        if (passwordInput.value.trim() !== "") {
            alert("Connexion réussie !");
        } else {
            alert("Veuillez entrer votre mot de passe.");
        }
    });

    backBtn.addEventListener("click", function () {
        history.back(); // Revenir en arrière dans l'historique
    });

    // Gère le bouton retour du navigateur
    window.addEventListener("popstate", function (event) {
        if (!event.state || event.state.page === "email") {
            emailForm.style.display = "block";
            passwordForm.style.display = "none";
        }
    });

    // Initialisation de l'état par défaut
    history.replaceState({ page: "email" }, "", "#email");
});
