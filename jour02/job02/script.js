function showhide(){
    let article = document.getElementById("citation")
    if (article){
        article.remove()
    }
    else {
        let newArticle = document.createElement("article") // on cree notre balise , il faudra la placer
        newArticle.textContent = "L'important n'est pas la chute, mais l'atterrissage." // on crée le contenu de notre
        newArticle.id = "citation"
        let parentContainer = document.querySelector("body")
        parentContainer.appendChild(newArticle)
        console.log(parentContainer)
    }
}