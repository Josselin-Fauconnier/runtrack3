document.addEventListener('DOMContentLoaded', function() {
    const updateButton = document.getElementById('updateButton');
    const usersTableBody = document.getElementById('usersTableBody');
    const statusDiv = document.getElementById('status');
    
    function showStatus(message, isError = false) {
        statusDiv.innerHTML = `<div class="${isError ? 'error' : ''}">${message}</div>`;
        setTimeout(() => {
            statusDiv.innerHTML = '';
        }, 3000);
    }
    
    function updateTable(users) {
        usersTableBody.innerHTML = '';
        
        if (!users || users.length === 0) {
            usersTableBody.innerHTML = `
                <tr>
                    <td colspan="4" class="loading">
                        Aucun utilisateur trouvé
                    </td>
                </tr>
            `;
            return;
        }
        
        users.forEach(user => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${user.id}</td>
                <td>${user.nom}</td>
                <td>${user.prenom}</td>
                <td>${user.email}</td>
            `;
            usersTableBody.appendChild(row);
        });
    }
    
    async function loadUsers() {
        try {
            updateButton.disabled = true;
            updateButton.textContent = 'Chargement...';
            
            usersTableBody.innerHTML = '<tr><td colspan="4" class="loading">Chargement...</td></tr>';
            
            const response = await fetch('users.php');
            
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }
            
            const text = await response.text();
            console.log('Réponse brute:', text); 
            
            let data;
            try {
                data = JSON.parse(text);
            } catch (jsonError) {
                throw new Error(`Réponse invalide du serveur: ${text.substring(0, 100)}...`);
            }
            
            if (data.error) {
                throw new Error(data.error);
            }
            
            updateTable(data);
            showStatus(`${data.length} utilisateur(s) chargé(s)`);
            
        } catch (error) {
            console.error('Erreur:', error);
            usersTableBody.innerHTML = `
                <tr>
                    <td colspan="4" class="error">
                        Erreur: ${error.message}
                    </td>
                </tr>
            `;
            showStatus(`Erreur: ${error.message}`, true);
        } finally {
            updateButton.disabled = false;
            updateButton.textContent = 'Mettre à jour';
        }
    }
    
    updateButton.addEventListener('click', loadUsers);
});