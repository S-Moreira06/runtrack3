<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exemple de Code Konami</title>
    <link rel="stylesheet" href="style.css">
    <style>
        body {
    font-family: Arial, sans-serif;
    text-align: center;
    padding: 50px;
    transition: background-color 0.5s, color 0.5s;
}

.konami-style {
    background-color: #ff4c4c; /* Couleur de fond */
    color: white; /* Couleur du texte */
}

.konami-style h1 {
    color: #ffe600; /* Couleur spécifique pour le titre */
}

    </style>
</head>
<body>

<h1>Bienvenue sur La Plateforme_</h1>
<p>Effectuez le code Konami pour changer le style de la page !</p>

<script>
    // Code Konami : ↑ ↑ ↓ ↓ ← → ← → B A
    const konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
    let userInput = [];

    document.addEventListener('keydown', function(event) {
        userInput.push(event.keyCode);
        if (userInput.length > konamiCode.length) {
            userInput.shift(); // Garder seulement les derniers éléments
        }
        if (JSON.stringify(userInput) === JSON.stringify(konamiCode)) {
            document.body.classList.add('konami-style');
            alert("Bravo ! Vous avez activé le style Konami !");
        }
    });
</script>

</body>
</html>
