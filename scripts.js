// Aggiungi una funzionalità di scroll liscio per il menu di navigazione
document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
