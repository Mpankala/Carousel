const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let index = 0;

// Fonction pour afficher une image
function showSlide(i) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[i].classList.add("active");
}
setInterval(() => {
    index = (index + 1) % slides.length;
    showSlide(index);
}, 3000);

// Bouton suivant
nextBtn.addEventListener("click", () => {
    index++;

    if (index >= slides.length) {
        index = 0;
    }

    showSlide(index);
});

// Bouton précédent
prevBtn.addEventListener("click", () => {
    index--;

    if (index < 0) {
        index = slides.length - 1;
    }

    showSlide(index);
});