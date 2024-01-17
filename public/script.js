var slides = document.querySelectorAll('.mySlides');
var currentSlide = 0;

function showSlides() {
    slides.forEach(function(slide) {
        slide.style.opacity = 0;
    });

    currentSlide = (currentSlide + 1) % slides.length;

    slides[currentSlide].style.opacity = 1;

    setTimeout(showSlides, 5000); // 5000 milliseconds (5 seconds) between image changes
}

// Start the slideshow
showSlides();