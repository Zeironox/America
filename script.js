document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => {
        alert("Hai cliccato su: " + card.querySelector("h2").textContent);
    });
});
