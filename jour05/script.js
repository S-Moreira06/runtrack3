document.addEventListener("DOMContentLoaded", function () {
    const lastname = document.getElementById("lastname")
    const lastnameError = document.getElementById("lastnameError")

    const firstname = document.getElementById("firstname")
    const firstnameError = document.getElementById("firstnameError")

    function validateFirstname() {
        if (lastname.value.length < 3) {
            lastnameError.textContent = "Pas assez long"
            lastnameError.style.color = "red"
        }
        else {
            lastnameError.textContent = "Nom valide!"
            lastnameError.style.color = "green"
        }
    }

    lastname.addEventListener("input", validateFirstname)
})