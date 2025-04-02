document.addEventListener("scroll", function() {
    document.querySelectorAll(".parallax").forEach(section => {
        let speed = 0.5;
        let yOffset = window.scrollY * speed;
        section.style.backgroundPosition = `center ${yOffset}px`;
    });
});
