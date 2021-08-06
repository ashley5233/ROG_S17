let current = 0;
const designs = document.querySelectorAll(".product-slider__design");
const sliderBtn = document.querySelector(".navigator");

// handle slider next and prev btn
function handleNext() {
  console.log("current:", current);
  document.getElementById(`control-${current + 1}`).checked = true;
  if (current < designs.length - 1) {
    current++;
  } else {
    current = 0;
  }
}

function handlePrev() {
  console.log("current:", current);

  if (current > 0) {
    current--;
  } else {
    current = designs.length - 1;
  }
  document.getElementById(`control-${current + 1}`).checked = true;
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
