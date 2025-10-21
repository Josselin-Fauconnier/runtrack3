function bissextile(annee) {
  return (annee % 4 === 0 && annee % 100 !== 0) || (annee % 400 === 0);
}



function Depuis1992() {
  const anneeActuelle = new Date().getFullYear(); 
  const liste = document.getElementById("anneebissex");

  for (let annee = 1992; annee <= anneeActuelle; annee++) {
    const li = document.createElement("li");

    if (bissextile(annee)) {
      li.textContent = `${annee} : bissextile`;
      li.style.color = "purple";
    } else {
      li.textContent = `${annee} : non bissextile`;
    }

    liste.appendChild(li);
  }
}


Depuis1992();


