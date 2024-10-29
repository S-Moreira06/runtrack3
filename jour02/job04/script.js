document.addEventListener("DOMContentLoaded",function(){

    document.addEventListener("keydown", function(event) {
        console.log("Touche pressée :", event.key);
        if (event.key.match(/[a-z]/)){
            document.getElementById("keylogger").value += event.key
        }
    })
    
})