let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


let slideIndexScd = 0;
showSlidesScd();

function showSlidesScd() {
  let i;
  let slides_scd = document.getElementsByClassName("mySlides-two");
  for (i = 0; i < slides_scd.length; i++) {
    slides_scd[i].style.display = "none";
  }
  slideIndexScd++;
  if (slideIndexScd > slides_scd.length) {slideIndexScd = 1}
  slides_scd[slideIndexScd-1].style.display = "block";
  setTimeout(showSlidesScd, 2000); // Change image every 2 seconds
}

 
 