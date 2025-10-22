
window.addEventListener('scroll', function() {
    let scrollTop = window.scrollY;
    let documentHeight = document.body.scrollHeight - window.innerHeight;
    let percentage = Math.round((scrollTop / documentHeight) * 100);
    
    document.getElementById('percent').textContent = percentage + '%';
    
    let footer = document.querySelector('footer');
    
    if (percentage < 25) {
        footer.style.backgroundColor = 'red';
    } else if (percentage < 50) {
        footer.style.backgroundColor = 'orange';
    } else if (percentage < 75) {
        footer.style.backgroundColor = 'purple';
    } else {
        footer.style.backgroundColor = 'green';
    }
});