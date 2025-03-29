var slideIndex = 1;
function showSlides(n){
    var i;
    var slides = document.getElementsByClassName("slide");

    console.log(slides)
    console.log(slides.length)
    for (i=0; i < slides.length; i++){
        slides[i].style.display = "none"
    }

    console.log(n)

    if(n > slides.length){
        slideIndex =1;
    }

    if (n < 1) {
        slideIndex = slideIndex.length
    }

    slides[slideIndex - 1].style.display = "block"
}

showSlides(1);


function plusSlide(n){
    slideIndex += n;
    showSlides(slideIndex)
}

setInterval(plusSlide, 3000, 1)
