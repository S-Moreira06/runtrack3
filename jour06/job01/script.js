document.addEventListener("DOMContentLoaded", function () {
    const quotes = [
        "Tous ces moments se perdront dans l'oubli, comme des larmes dans la pluie.",
        "C'est étrange de vivre dans la peur, n'est-ce pas ? C'est cela, être un esclave.",
        "J'ai vu des choses que vous, humains, ne pourriez pas croire.",
        "La lumière qui brûle deux fois plus fort brûle deux fois moins longtemps.",
        "J'ai vécu assez pour voir devenir cendre ce qui aurait dû être éternité."
    ];
    const jumbotronQuotes = [
        "le monde est la matière, lespace et les phénomènes qui nous sont accessible par les sens, l'expèrience ou la raison. Le sens le plus courant désigne notre planète, la Terre, avec ses habitants, et son nvironnement plus ou moins naturel.",
        "Vous êtes sur la page 2. Profitez du contenu spécial pour cette section.",
        "Page 3 : Un nouveau chapitre avec des informations captivantes.",
        "Page 4 : Continuez à explorer, le contenu change ici aussi !",
        "Page 5 : Dernière page, mais pas la moindre ! Découvrez les derniers détails."
    ]
    const classes = ['text-primary', 'text-secondary', 'text-success']
    const reboot = document.getElementById("reboot")
    const update1 = document.getElementById("link1")
    const update2 = document.getElementById("link2")
    const update3 = document.getElementById("link3")
    const update4 = document.getElementById("link4")
    const update5 = document.getElementById("link5")
    const moins = document.getElementById("moins")
    const plus = document.getElementById("plus")
    const signin = document.getElementById("signin")

    let keySequence = ['d', 'g', 'c']
    let currentIndex = 0

    function rebootWorld() {
        const randomIndex = Math.floor(Math.random() * quotes.length)
        const jumbotronText = document.getElementById("jumbotronText")
        jumbotronText.textContent = quotes[randomIndex]
    }
    
    function updateJumbotron(pageNumber) {
        const jumbotronMain = document.getElementById("jumbotronMain")
        jumbotronMain.textContent = jumbotronQuotes[pageNumber - 1]
    }

    function increaseProgress() {
        let progressBar = document.getElementById('progressBar')
        let currentWidth = parseInt(progressBar.style.width)
        
        if (currentWidth < 100) { // S'assurer que la barre ne dépasse pas 100%
            currentWidth += 5
            progressBar.style.width = currentWidth + '%'
            progressBar.setAttribute('aria-valuenow', currentWidth)
        }
    }

    function decreaseProgress() {
        let progressBar = document.getElementById('progressBar')
        let currentWidth = parseInt(progressBar.style.width);
        
        if (currentWidth > 0) { // S'assurer que la barre ne passe pas en dessous de 0%
            currentWidth -= 5;
            progressBar.style.width = currentWidth + '%'
            progressBar.setAttribute('aria-valuenow', currentWidth)
        }
    }

    function showModal() {
        // Récupère les valeurs des champs du formulaire
        const email = document.getElementById("inputEmail4").value;
        const password = document.getElementById("inputPassword4").value;
        const isChecked = document.getElementById("gridCheck").checked ? "Oui" : "Non";
    
        // Prépare le contenu de la modale
        const modalContent = document.getElementById("modalContent");
        modalContent.innerHTML = `<p><strong>Email :</strong> ${email}</p><br><p><strong>Mot de passe :</strong> ${password}</p><br><p><strong>Check me out :</strong> ${isChecked}</p>`;
    
        // Affiche la modale
        const infoModal = new bootstrap.Modal(document.getElementById("infoModal"))
        infoModal.show()
    }

    function spinerColor () {
        const color = document.getElementById("spin")
        let currentClassIndex = classes.findIndex(className => element.classList.contains(className))
                // Supprimer la classe actuelle
                if (currentClassIndex !== -1) {
                    element.classList.remove(classes[currentClassIndex])
                }
                // Calculer l'index de la classe suivante
                const nextClassIndex = (currentClassIndex + 1) % classes.length// ici le modulo permet de revenir au debut de la liste lorsque l'index atteind la lenght du tableau
                // Ajouter la nouvelle classe
                element.classList.add(classes[nextClassIndex])
    }

    
    
    reboot.addEventListener("click",rebootWorld)
    update1.addEventListener("click", function() { updateJumbotron(1); })
    update2.addEventListener("click", function() { updateJumbotron(2); })
    update3.addEventListener("click", function() { updateJumbotron(3); })
    update4.addEventListener("click", function() { updateJumbotron(4); })
    update5.addEventListener("click", function() { updateJumbotron(5); })
    moins.addEventListener("click", decreaseProgress)
    plus.addEventListener("click", increaseProgress)
    document.addEventListener('keydown', (event) => {
        const key = event.key.toLowerCase();
        
        // Vérifie si la touche correspond à la prochaine de la séquence
        if (key === keySequence[currentIndex]) {
            currentIndex++;
            
            // Si la séquence est complète, affiche la modale
            if (currentIndex === keySequence.length) {
                showModal();
                currentIndex = 0; // Réinitialise la séquence
            }
        } else {
            // Réinitialise la séquence si une touche incorrecte est pressée
            currentIndex = 0;
        }
    });
})
