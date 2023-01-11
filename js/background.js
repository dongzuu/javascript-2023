const images = ["0.jpeg", "1.jpeg", "2.jpeg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");

const imagesBox = document.querySelector("#images-box");

bgImage.src = `images/${chosenImage}`;

imagesBox.appendChild(bgImage);
