
// Version simplifiée pour exercice - Junior Developer
const form = document.getElementById('form-inscription');
const bouton = document.getElementById('bouton-inscription');

// État simple : true/false pour chaque champ
let champValides = {
    nom: false,
    prenom: false, 
    email: false,
    password: false,
    adresse: false,
    codepostal: false
};


async function validerChamp(nomChamp, valeur) {
    const divErreur = document.getElementById(nomChamp + '-erreur');
    const input = document.getElementById(nomChamp);
    
   
    divErreur.textContent = 'Vérification...';
    await new Promise(resolve => setTimeout(resolve, 200));
    
    let messageErreur = '';
    

    if (nomChamp === 'nom') {
        messageErreur = validerNom(valeur);
    } else if (nomChamp === 'prenom') {
        messageErreur = validerPrenom(valeur);
    } else if (nomChamp === 'email') {
        messageErreur = validerEmail(valeur);
    } else if (nomChamp === 'password') {
        messageErreur = validerPassword(valeur);
    } else if (nomChamp === 'adresse') {
        messageErreur = validerAdresse(valeur);
    } else if (nomChamp === 'codepostal') {
        messageErreur = validerCodePostal(valeur);
    }
    
    
    divErreur.textContent = messageErreur;
    input.className = messageErreur ? 'error' : 'valid';
    champValides[nomChamp] = !messageErreur;
    
 
    activerBoutonSiToutValide();
}


function validerNom(nom) {
    if (!nom) return 'Le nom est obligatoire';
    if (nom.length > 50) return 'Le nom est trop long (max 50 caractères)';
    return '';
}

function validerPrenom(prenom) {
    if (!prenom) return 'Le prénom est obligatoire';
    if (prenom.length > 30) return 'Le prénom est trop long (max 30 caractères)';
    return '';
}

function validerEmail(email) {
    if (!email) return 'L\'email est obligatoire';
    
   
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) return 'Format d\'email invalide';
    
    return '';
}

function validerPassword(password) {
    if (!password) return 'Le mot de passe est obligatoire';
    
    let manque = [];
    
    
    if (password.length < 12) {
        manque.push(`${12 - password.length} caractère(s) supplémentaire(s)`);
    }
    
    if (!/[A-Z]/.test(password)) {
        manque.push('une majuscule');
    }
    if (!/[a-z]/.test(password)) {
        manque.push('une minuscule');
    }
    if (!/[0-9]/.test(password)) {
        manque.push('un chiffre');
    }
    if (!/[!@#$%^&_+\-=\[\].<>?]/.test(password)) {
        manque.push('un caractère spécial (!@#$%^&_+...)');
    }
    
    if (manque.length > 0) {
        if (manque.length === 1) {
            return `Il manque : ${manque[0]}`;
        } else {
            const dernierElement = manque.pop();
            return `Il manque : ${manque.join(', ')} et ${dernierElement}`;
        }
    }
    
    return '';
}

function validerAdresse(adresse) {
    if (!adresse) return 'L\'adresse est obligatoire';
    if (adresse.length < 5) return 'L\'adresse est trop courte (min 5 caractères)';
    return '';
}

function validerCodePostal(codePostal) {
    if (!codePostal) return 'Le code postal est obligatoire';
    if (!/^\d{5}$/.test(codePostal)) return 'Le code postal doit contenir 5 chiffres';
    return '';
}


function activerBoutonSiToutValide() {
    const toutEstValide = Object.values(champValides).every(valide => valide);
    bouton.disabled = !toutEstValide;
}

// Écouteurs d'événements temps réel 

document.getElementById('nom').addEventListener('blur', (e) => {
    validerChamp('nom', e.target.value.trim());
});

document.getElementById('prenom').addEventListener('blur', (e) => {
    validerChamp('prenom', e.target.value.trim());
});

document.getElementById('email').addEventListener('blur', (e) => {
    validerChamp('email', e.target.value.trim());
});

document.getElementById('password').addEventListener('blur', (e) => {
    validerChamp('password', e.target.value);
});

document.getElementById('adresse').addEventListener('blur', (e) => {
    validerChamp('adresse', e.target.value.trim());
});

document.getElementById('codepostal').addEventListener('blur', (e) => {
    validerChamp('codepostal', e.target.value.trim());
});


form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const toutEstValide = Object.values(champValides).every(valide => valide);
    
    if (toutEstValide) {
        
        bouton.disabled = true;
        bouton.textContent = 'Inscription en cours...';
        
      
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        alert('Inscription réussie !');
        
       
        form.reset();
        Object.keys(champValides).forEach(champ => champValides[champ] = false);
        bouton.disabled = true;
        bouton.textContent = 'S\'inscrire';
        
    } else {
        alert('Veuillez corriger les erreurs avant de continuer.');
    }
});