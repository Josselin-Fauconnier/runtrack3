function afficherjourssemaines() {
    
    const jourssemaines = [
        "Lundi",
        "Mardi", 
        "Mercredi",
        "Jeudi",
        "Vendredi",
        "Samedi",
        "Dimanche"
    ];
    
    const liste = document.getElementById("jours");

    for (const jour of jourssemaines){
      const elementJour = document.createElement("li");
      elementJour.textContent = jour;
      liste.appendChild(elementJour);
    }
}


afficherjourssemaines();