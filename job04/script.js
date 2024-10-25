let annee = prompt("spécifiez l'année a verifier")

function bisextile(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}

let estBisextil = bisextile(annee)

console.log(estBisextil)