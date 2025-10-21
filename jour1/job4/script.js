function bissextile(annee) {
  return (annee % 4 === 0 && annee % 100 !== 0) || (annee % 400 === 0);
}



function Depuis1992() {
  const anneeActuelle = new Date().getFullYear(); 
  const liste = document.getElementById("anneebissex");

  for (let annee = 1992; annee <= anneeActuelle; annee++) {
    if (bissextile(annee)) {
      const li = document.createElement("li");
      li.textContent = `${annee} : bissextile`;
      li.style.color = "purple";
      liste.appendChild(li);
    } 
  }
}

Depuis1992();


