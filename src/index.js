let current = 0;
const designs = document.querySelectorAll(".product-slider__design");
const sliderBtn = document.querySelector(".navigator");
const rbs = document.querySelectorAll('input[name="control"]');

function handleNext() {
  designs[current].style.transform = "translateX 100%";
  designs[current >= designs.length - 1 ? 0 : current + 1].style.animation =
    "showRight 1.5s forwards";
  if (current < designs.length - 1) {
    current++;
  } else {
    current = 0;
  }
  console.log(current);
  console.log(designs[current]);
}

function handlePrev() {
  designs[current].style.animation = "hideLeft 1.5s forwards";
  designs[current > 0 ? current - 1 : 2].style.animation =
    "showLeft 1.5s forwards";
  if (current > 0) {
    current--;
  } else {
    current = designs.length - 1;
  }
  console.log(current);
  console.log("left current:", designs[current]);
}

sliderBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let status = e.target.className;
  console.log(status);
  if (status === "fas fa-chevron-right") {
    handleNext();
  } else {
    handlePrev();
  }
});

const sliderControlBtn = document.querySelector(".navigator");
