document.addEventListener("DOMContentLoaded", function () {
    const firstname = document.getElementById("firstname")
    const lastname = document.getElementById("lastname")
    const email = document.getElementById("email")
    const pass1 = document.getElementById("pass1")
    const pass2 = document.getElementById("pass2")

    const firstnameError = document.getElementById("firstnameError")
    const lastnameError = document.getElementById("lastnameError")
    const emailError = document.getElementById("emailError")
    const pass1Error = document.getElementById("pass1Error")
    const pass2Error = document.getElementById("pass2Error")

    function validateFirstname() {
        if (firstname.value.length < 3) {
            firstnameError.textContent = "Le nom d'utilisateur doit comporter au moins 3 caractères."
            firstnameError.style.display = "inline"
        } else {
            firstnameError.style.display = "none"
        }
    }
    function validateLastname() {
        if (lastname.value.length < 3) {
            lastnameError.textContent = "Le nom d'utilisateur doit comporter au moins 3 caractères."
            lastnameError.style.display = "inline"
        } else {
            lastnameError.style.display = "none"
        }
    }



    function validatePassword() {
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
        if (!passwordPattern.test(password.value)) {
        passwordError.textContent = "Le mot de passe doit comporter au moins 8 caractères, dont une majuscule, une minuscule, un chiffre et un caractère spécial.";
        passwordError.style.display = "inline"
        } else {
        passwordError.style.display = "none"
        }
    }

    firstname.addEventListener("input", validateFirstname);
    lastname.addEventListener("input", validateLastname);
    email.addEventListener("input", validateEmail);
    pass1.addEventListener("input", validatePassword);
    pass2.addEventListener("input", validatePassword);
    confirmPassword.addEventListener("input", validateConfirmPassword);

})