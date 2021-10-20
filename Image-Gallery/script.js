const imgPlaceholder = document.querySelector("img");
const prevButton = document.querySelector("button[name=prev]");
const nextButton = document.querySelector("button[name=next]");

let arrayImages = [
  "images/flowers.jpg",
  "images/goat.jpg",
  "images/rosewater.jpg",
];

let defaultImage = arrayImages[1];
imgPlaceholder.src = defaultImage;
let currentIndex = 1;

prevButton.addEventListener("click", displayImage);
nextButton.addEventListener("click", displayImage);

function displayImage(event) {
  if (event.target.name === "prev") {
    currentIndex = currentIndex - 1;
  } else {
    currentIndex = currentIndex + 1;
  }
  if (currentIndex < 0) {
    currentIndex = arrayImages.length - 1;
  }
  if (currentIndex > arrayImages.length - 1) {
    currentIndex = 0;
  }
  imgPlaceholder.src = arrayImages[currentIndex];
}
