// Fonction d'assistance pour vérifier si un nombre est premier
function estPremier(nombre) {
    if (nombre <= 1) return false; // Les nombres <= 1 ne sont pas premiers
    for (let i = 2; i <= Math.sqrt(nombre); i++) {
        if (nombre % i === 0) {
            return false; // Si divisible par i, n'est pas premier
        }
    }
    return true;
}

// Fonction principale
function sommenombrespremiers(nombre1, nombre2) {
    // Vérifie si les deux nombres sont premiers
    if (estPremier(nombre1) && estPremier(nombre2)) {
        return nombre1 + nombre2; // Retourne la somme
    } else {
        return false; // Retourne false si l'un ou les deux ne sont pas premiers
    }
}

// Exemples d'utilisation
console.log(sommenombrespremiers(3, 5));    // Retourne 8 (3 et 5 sont premiers)
console.log(sommenombrespremiers(4, 5));    // Retourne false (4 n'est pas premier)
console.log(sommenombrespremiers(11, 13));  // Retourne 24 (11 et 13 sont premiers)
console.log(sommenombrespremiers(8, 10));   // Retourne false (8 et 10 ne sont pas premiers)
