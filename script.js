// Contenu du fichier script.js
let currentIndex = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll('.carousel img');
    const totalSlides = slides.length;

    currentIndex = (currentIndex + step + totalSlides) % totalSlides;
    document.querySelector('.carousel').style.transform = `translateX(-${currentIndex * 100}%)`;
}
