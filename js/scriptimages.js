

var slide = new Array("images/desktop-image-hero-1.jpg", "images/desktop-image-hero-2.jpg", "images/desktop-image-hero-3.jpg");
var slideMobile = new Array("images/mobile-image-hero-1.jpg", "images/mobile-image-hero-2.jpg", "images/mobile-image-hero-3.jpg");
var numero = 0;


function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = slide.length - 1;
    if (numero > slide.length - 1)
        numero = 0;
    document.getElementById("slide").src = slide[numero];
}


function ChangeSlideMobile(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = slide.length - 1;
    if (numero > slide.length - 1)
        numero = 0;
    document.getElementById("slideMobile").src = slideMobile[numero];
}








