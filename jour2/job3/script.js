
let counter = 0;


function addone() {
    
    counter++;
    
    const compteurElement = document.getElementById('compteur');
    
    compteurElement.textContent = counter;
}

document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('button');
    
    button.addEventListener('click', addone);
});