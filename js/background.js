const imagesBox = document.querySelector("#images-box");
const images = ["0.jpeg", "1.jpeg", "2.jpeg"];
const bgImage = document.createElement("img");
imagesBox.appendChild(bgImage);
const imgButton = document.createElement("button");
imagesBox.appendChild(imgButton);
imgButton.innerText = "click me";
imgButton.className = "img-click_button";

function handleBgImages() {
  const chosenImage = images[Math.floor(Math.random() * images.length)];
  bgImage.src = `images/${chosenImage}`;
  console.log(chosenImage);
}
handleBgImages();
imgButton.addEventListener("click", handleBgImages);
