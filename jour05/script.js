document.addEventListener("DOMContentLoaded", function () {
    const lastname = document.getElementById("lastname")
    const lastnameError = document.getElementById("lastnameError")

    const firstname = document.getElementById("firstname")
    const firstnameError = document.getElementById("firstnameError")

    const pass1 = document.getElementById("pass1")
    const pass1Error = document.getElementById("pass1Error")

    const pass2 = document.getElementById("pass2")
    const pass2Error = document.getElementById("pass2Error")

    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).+$/;


    function validateLastname() {
        if (lastname.value.length < 3) {
            lastnameError.textContent = "Pas assez long"
            lastnameError.style.color = "red"
        }
        else {
            lastnameError.textContent = "Nom valide!"
            lastnameError.style.color = "green"
        }
    }

    function validateFirstname() {
        if (firstname.value.length < 3) {
            firstnameError.textContent = "Pas assez long"
            firstnameError.style.color = "red"
        }
        else {
            firstnameError.textContent = "Nom valide!"
            firstnameError.style.color = "green"
        }
    }

    function validatePass1() {
        if (regex.test(pass1.value)) {
            pass1Error.textContent = "Mot de passe valide"
            pass1Error.style.color = "green"
        }
        else {
            pass1Error.textContent = "Le mot de passe doit contenir au moins une maj, une min, un chiffre et un carac. spécial"
            pass1Error.style.color = "red"
        }
    }
    function validatePass2() {
        if (regex.test(pass2.value)) {
            pass2Error.textContent = "Mot de passe valide"
            pass2Error.style.color = "green"
        }
        else {
            pass2Error.textContent = "Le mot de passe doit contenir au moins une maj, une min, un chiffre et un carac. spécial"
            pass2Error.style.color = "red"
        }
    }

    lastname.addEventListener("input", validateLastname)
    firstname.addEventListener("input", validateFirstname)
    pass1.addEventListener("input", validatePass1)
    pass2.addEventListener("input", validatePass2)
})