function jourTravaille(date) {
    const joursFeries = [
        new Date(2020, 0, 1),   // 1er janvier (Nouvel An)
        new Date(2020, 4, 1),   // 1er mai (Fête du Travail)
        new Date(2020, 6, 14),  // 14 juillet (Fête Nationale)
        new Date(2020, 10, 11), // 11 novembre (Armistice)
        new Date(2020, 11, 25), // 25 décembre (Noël)
    ];

    // Format de la date pour l'affichage
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const jour = date.toLocaleDateString('fr-FR', options);

    const jourDeLaSemaine = date.getDay(); // 0 = dimanche, 6 = samedi
    if (jourDeLaSemaine === 0 || jourDeLaSemaine === 6) {
        console.log(`Non, ${jour} est un week-end`);
        return;
    }

    // Vérifie si la date est un jour férié
    for (let jourFerie of joursFeries) {
        // Comparer les dates sans tenir compte de l'heure
        if (date.getFullYear() === jourFerie.getFullYear() &&
            date.getMonth() === jourFerie.getMonth() &&
            date.getDate() === jourFerie.getDate()) {
            console.log(`Le ${jour} est un jour férié`);
            return;
        }
    }

    console.log(`Oui, ${jour} est un jour travaillé`);
}

jourTravaille(new Date(2020, 0, 1));   // 1er janvier 2020
jourTravaille(new Date(2020, 4, 1));   // 1er mai 2020
jourTravaille(new Date(2020, 6, 14));  // 14 juillet 2020
jourTravaille(new Date(2020, 9, 31));  // 31 octobre 2020 (jour travaillé)
jourTravaille(new Date(2020, 11, 25)); // 25 décembre 2020
jourTravaille(new Date(2020, 6, 18));  // Un jeudi normal


