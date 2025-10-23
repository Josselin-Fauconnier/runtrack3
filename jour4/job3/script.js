let pokemon = [];


async function chargerPokemon() {
    const response = await fetch('./pokemon.json');
    pokemon = await response.json();
    remplirTypes();
}

// Ex : Pour "salamèche " et "salameche" sont trouvable

function gestionAccentuation(str){
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function remplirTypes() {
    const types = [...new Set(pokemon.flatMap(p => p.type))].sort();
    const select = document.getElementById('filtretype');
    types.forEach(type => {
        const option = document.createElement('option');
        option.value = type;
        option.textContent = type;
        select.appendChild(option);
    });
}

function filtrer() {
    const id = document.getElementById('idfiltre').value;
    const nom = document.getElementById('idnom').value.toLowerCase();
    const type = document.getElementById('filtretype').value;
    
    const filtres = pokemon.filter(p => {
        const noms = Object.values(p.name).join(' ').toLowerCase();
        const nomsSansAccents = gestionAccentuation(noms);
        const rechercheSansAccents = gestionAccentuation(nom);
        return (!id || p.id.toString() === id) &&
               (!nom || noms.includes(nom) || nomsSansAccents.includes(rechercheSansAccents)) &&
               (!type || p.type.includes(type))
    });
    
    document.getElementById('resultats').innerHTML = filtres.map(p => 
        `<div><h3>#${p.id} - ${p.name.english} </h3><p>${p.type.join(', ')}</p></div>`
    ).join('');

    document.getElementById('idfiltre').value = '';
    document.getElementById('idnom').value = '';
    document.getElementById('filtretype').value = '';
    
}

document.getElementById('boutton').addEventListener('click', filtrer);
chargerPokemon();