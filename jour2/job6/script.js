

class CodeKonami {
    constructor() {
        this.sequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; 
        this.userInput = [];
        this.init();
    }
    
    init() {
        document.addEventListener('keydown', (e) => this.handleKeyPress(e));
    }
    
    handleKeyPress(event) {
        this.userInput.push(event.keyCode);
        
        if (this.userInput.length > this.sequence.length) {
            this.userInput.shift();
        }
        
        if (this.isSequenceMatch()) {
            this.activateTheme();
        }
    }
    
    isSequenceMatch() {
        return this.userInput.length === this.sequence.length &&
               this.userInput.every((key, index) => key === this.sequence[index]);
    }
    
    activateTheme() {
        document.body.classList.add('plateforme-theme');
        
        localStorage.setItem('konamiActivated', 'true');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new CodeKonami();
});