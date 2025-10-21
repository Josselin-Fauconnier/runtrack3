function showhide() {
    const article = document.getElementById('citation');
    
    if (article) {
        article.remove(); 
    } else {
        const newArticle = document.createElement('article');
        newArticle.id = 'citation';
        newArticle.textContent = "L'important n'est pas la chute, mais l'atterrissage.";
        document.body.appendChild(newArticle);
    }
}