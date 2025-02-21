document.addEventListener("DOMContentLoaded", function () {
    const emailForm = document.getElementById("email-form");
    const passwordForm = document.getElementById("password-form");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const backBtn = document.getElementById("back-btn");
    const themeToggle = document.getElementById("theme-toggle");

    // Fonction pour appliquer le mode sombre ou clair
    function applyTheme(isDarkMode) {
        if (isDarkMode) {
            document.body.classList.add("dark-mode");
            themeToggle.textContent = "Basculer en mode clair";
        } else {
            document.body.classList.remove("dark-mode");
            themeToggle.textContent = "Basculer en mode sombre";
        }
    }

    // Détecter la préférence de l'utilisateur pour le mode sombre
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(prefersDarkScheme);

    // Écouter les changements de préférence de l'utilisateur
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        applyTheme(e.matches);
    });

    // Basculer manuellement entre les modes sombre et clair
    themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        const isDarkMode = document.body.classList.contains("dark-mode");
        themeToggle.textContent = isDarkMode ? "Basculer en mode clair" : "Basculer en mode sombre";
    });

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
