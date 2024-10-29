document.addEventListener("DOMContentLoaded",function(){

    document.addEventListener("keydown", function(event) {

        if (event.key.match(/[a-z]/)){
            document.getElementById("keylogger").value += event.key
        }
    })

})