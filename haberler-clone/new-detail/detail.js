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

 