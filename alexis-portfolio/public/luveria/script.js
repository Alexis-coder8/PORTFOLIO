// LUVERIA HERO SLIDESHOW

const heroImages = document.querySelectorAll(".hero-image img");

let currentImage = 0;
heroImages[0].classList.add("active");

function changeHeroImage() {

    heroImages[currentImage].classList.remove("active");

    currentImage++;

    if (currentImage >= heroImages.length) {
        currentImage = 0;
    }

    heroImages[currentImage].classList.add("active");
}

setInterval(changeHeroImage, 5000);