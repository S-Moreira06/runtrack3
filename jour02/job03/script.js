document.addEventListener("DOMContentLoaded",function(){

    let count = 0
    
    function addOne () {
        count++
        document.getElementById("compteur").textContent = count
    }
    
    const button = document.getElementById("button")
    button.addEventListener("click",addOne)
    
})