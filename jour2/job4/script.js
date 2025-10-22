
function isLetter(char) {
    return /^[a-zA-Z]$/.test(char);
}

function addLetterToTextarea(letter) {
    const textarea = document.getElementById('keylogger');
    textarea.value += letter;
}

function handleKeyPress(event) {
    const key = event.key;
    
    if (isLetter(key)) {
        const textarea = document.getElementById('keylogger');
        
        if (document.activeElement === textarea) {
            addLetterToTextarea(key);
            addLetterToTextarea(key);
        } else {
            addLetterToTextarea(key);
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('keydown', handleKeyPress);
    
    console.log('Keylogger initialisé - Tapez des lettres !');
});