const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;
document.addEventListener("DOMContentLoaded", initialiseSlider); //after all the DOM content is loaded, initialise the slider

function initialiseSlider() {
    if(slides.length > 0) { //for NodeList if we have images, then show them
        slides[slideIndex].classList.add("displaySlide");
        intervalId = setInterval(nextSlide, 5000); //after 5s the nextSlide() will be invoked
    }
}
function showSlide(index){
    if(index >= slides.length){ //if we're on the last slide and press the "next" button
        slideIndex = 0; //set it to the 1st slide/image (according to the NodeList)
    }
    else if(index < 0) { //if we're on the 1st slide and press the "previous" button
        slideIndex = slides.length - 1; //set it to the last slide/image (according to the NodeList)
    }
    slides.forEach(slide => {
        slide.classList.remove("displaySlide"); //removing the current displaySlide class to show the next image with it
    });
    slides[slideIndex].classList.add("displaySlide"); //adding this class to the next image (so, it shows on the web page)
}
function prevSlide(){
    clearInterval(intervalId); //stops the 5s rule and watch the image more
    slideIndex--;
    showSlide(slideIndex);
}
function nextSlide(){
    //won't use clearInterval() for the nextSlide() since it won't be looping at all
    slideIndex++;
    showSlide(slideIndex);
}