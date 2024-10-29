document.addEventListener("DOMContentLoaded",function(){

    window.addEventListener('scroll', function() {
        const footer = document.getElementById('footer');
        const scrollTop = window.scrollY;
        const windowHeight = window.innerHeight;
        const bodyHeight = document.body.scrollHeight;

        // Calcul du pourcentage de défilement
        const scrollPercentage = (scrollTop / (bodyHeight - windowHeight)) * 100;

        // Changement de couleur du footer en fonction du pourcentage
        footer.style.backgroundColor = `hsl(${scrollPercentage}, 100%, 50%)`;
    })
})