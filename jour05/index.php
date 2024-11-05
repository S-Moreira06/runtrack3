<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <script src="script.js" defer></script>
    <title>Inscription - Jour 05</title>
</head>
<body>

    <nav>
        <h1>Jour 05</h1>
        <a href="">Connexion</a>
        <a href="">Inscription</a>
    </nav>

    <main>
        <form action="" method="post">
            <label class="label-inscription" for="lastname">Nom*:</label>
            <input class="input-inscription" type="text" id="lastname" name="lastname" placeholder="Votre nom" value="" required>
            <span id="lastnameError"></span>

            <label class="label-inscription" for="firstname">Prénom*:</label>
            <input class="input-inscription" type="text" id="firstname" name="firstname" placeholder="Votre prenom" value="">
            <span id="firstnameError"></span>

            <!-- <label class="label-inscription" for="email">E-Mail*:</label>
            <input class="input-inscription" type="email" id="email" name="email" placeholder="Adresse e-mail valide" required>
            <span id="emailError"></span> -->

            <!-- <label class="label-inscription" for="pass1">Mot de Passe*:</label>
            <input class="input-inscription" type="password" id="pass1" name="pass1" placeholder="1min/1MAJ/1chiffre/carac. spécial/ 8 carac mini" required>
            <span id="pass1Error"></span>

            <label class="label-inscription" for="pass2">Confirmer le mot de passe*:</label>
            <input class="input-inscription" type="password" id="pass2" name="pass2"required>
            <span id="pass2Error"></span>-->



            <input class="btn-bleu" type="submit" name="submit-btn" value="Inscription">

        </form>
    </main>

</body>
</html>