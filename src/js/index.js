const slide = document.querySelectorAll(".slide");
const arrowBack = document.getElementById("arrow-back");
const forwardArrow = document.getElementById("forward-arrow");

let currentImage = 0;

forwardArrow.addEventListener("click", () => {
  if (currentImage === slide.length - 1) {
    return;
  }
  hideOpenImage();

  currentImage++;

  slide[currentImage].classList.add("show");

  showOrHideArrows();
});

arrowBack.addEventListener("click", () => {
  if (currentImage === 0) {
    return;
  }

  hideOpenImage();

  currentImage--;

  slide[currentImage].classList.add("show");

  showOrHideArrows();
});

function hideOpenImage() {
  const imagemAberta = document.querySelector(".show");
  imagemAberta.classList.remove("show");
}

function showOrHideArrows() {
  const notFirstImage = currentImage !== 0;

  if (notFirstImage) {
    arrowBack.classList.remove("opacity");
  } else {
    arrowBack.classList.add("opacity");
  }

  const lastImage = currentImage !== 0 && currentImage === slide.length - 1;

  if (lastImage) {
    forwardArrow.classList.add("opacity");
  } else {
    forwardArrow.classList.remove("opacity");
  }
}
