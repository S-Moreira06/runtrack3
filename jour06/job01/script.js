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
    ];
    const reboot = document.getElementById("reboot")
    const update1 = document.getElementById("link1")
    const update2 = document.getElementById("link2")
    const update3 = document.getElementById("link3")
    const update4 = document.getElementById("link4")
    const update5 = document.getElementById("link5")

    function rebootWorld() {
        const randomIndex = Math.floor(Math.random() * quotes.length)
        const jumbotronText = document.getElementById("jumbotronText")
        jumbotronText.textContent = quotes[randomIndex]
    }
    
    function updateJumbotron(pageNumber) {
        const jumbotronMain = document.getElementById("jumbotronMain")
        jumbotronMain.textContent = jumbotronQuotes[pageNumber - 1]
    }
    
    reboot.addEventListener("click",rebootWorld)
    update1.addEventListener("click", function() { updateJumbotron(1); })
    update2.addEventListener("click", function() { updateJumbotron(2); })
    update3.addEventListener("click", function() { updateJumbotron(3); })
    update4.addEventListener("click", function() { updateJumbotron(4); })
    update5.addEventListener("click", function() { updateJumbotron(5); })
})
