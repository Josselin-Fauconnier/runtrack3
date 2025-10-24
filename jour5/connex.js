const form = document.getElementById('form-log');
const bouton = document.getElementById('bouton');
let estValide = { email: false, password: false };

async function validation(field, value) {
    const erreurDiv = document.getElementById(field + '-erreur');
    const input = document.getElementById(field);

    erreurDiv.textContent = 'Vérification...';
    await new Promise(resolve => setTimeout(resolve, 500));

    let error = '';

    if (field === 'email') {
        if (!value) error = 'Email ';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) error = 'Email invalide';
    }

    if (field === 'password') {
        if (!value) {
            error = 'Mot de passe obligatoire';
        } else {
            const manque = [];
            
            if (value.length < 12) {
                manque.push(`${12 - value.length} caractère(s) supplémentaire(s)`);
            }
            if (!/[A-Z]/.test(value)) {
                manque.push('une majuscule');
            }
            if (!/[a-z]/.test(value)) {
                manque.push('une minuscule');
            }
            if (!/[0-9]/.test(value)) {
                manque.push('un chiffre');
            }
            if (!/[!@#$%^&_+\-=\[\].<>?]/.test(value)) {
                manque.push('un caractère spécial (!@#$%^&_+...)');
            }
            
            if (manque.length > 0) {
                if (manque.length === 1) {
                    error = `Il manque : ${manque[0]}`;
                } else {
                    const dernierElement = manque.pop();
                    error = `Il manque : ${manque.join(', ')} et ${dernierElement}`;
                }
            }
        }
    }

    erreurDiv.textContent = error;
    input.className = error ? 'error' : 'valid';
    estValide[field] = !error;

    bouton.disabled = !(estValide.email && estValide.password);
}


document.getElementById('email').addEventListener('blur', (e) => 
    validation('email', e.target.value.trim())
);

document.getElementById('password').addEventListener('blur', (e) => 
    validation('password', e.target.value)
);

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (estValide.email && estValide.password) {
        alert('Connexion réussie !');
    }
});