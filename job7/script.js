function jourTravaille(date) {
    const jour = date.getDate();
    const mois = date.getMonth() + 1;
    const annee = date.getFullYear();
    
  
    if (annee === 2020) {
        if ((jour === 1 && mois === 1) ||   
            (jour === 13 && mois === 4) ||  
            (jour === 1 && mois === 5) ||   
            (jour === 8 && mois === 5) ||   
            (jour === 21 && mois === 5) ||  
            (jour === 1 && mois === 6) ||   
            (jour === 14 && mois === 7) ||  
            (jour === 15 && mois === 8) ||  
            (jour === 1 && mois === 11) ||  
            (jour === 11 && mois === 11) || 
            (jour === 25 && mois === 12)) { 
            console.log(`Le ${jour} ${mois} ${annee} est un jour férié`);
            return;
        }
    }
    
    const jourSemaine = date.getDay();
    if (jourSemaine === 0 || jourSemaine === 6) {
        console.log(`Non, ${jour} ${mois} ${annee} est un week-end`);
        return;
    }
    
    console.log(`Oui, ${jour} ${mois} ${annee} est un jour travaillé`);
}

