// Selecting Elements for offer section

var offerMsg = document.getElementById("OfferMsg")
var closeicon = document.getElementById("closeicon")

console.log(close)

closeicon.addEventListener("click",function()
{
    offerMsg.style.display="none"
})

let currentIndex = 0;

function showSlide(index) {
    const slider = document.querySelector('.slider');
    const totalSlides = document.querySelectorAll('.slide').length;
   
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }
    const offset = -currentIndex * 100;
    slider.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}