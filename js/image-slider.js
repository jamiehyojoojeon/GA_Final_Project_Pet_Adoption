const prevBtn = document.querySelector('.prev');
const slideImage = document.querySelector('#slideImages');
const nextBtn = document.querySelector('.next');

const images = ['./css/images/pet-adoption1.jpg', './css/images/pet-adoption2.jpg', './css/images/pet-adoption3.jpg'];

let currentImage = 0;

// Set a first main image
slideImage.setAttribute('src', images[currentImage]);


// Slide images right 
const slideRight = () => {
  currentImage++;
  if (currentImage >= images.length) {
    currentImage = 0;
  }
  slideImage.setAttribute('src', images[currentImage]);
}

// Auto image slider
setInterval(slideRight, 3000);

// Next button
nextBtn.addEventListener('click', slideRight);

// Previous button
prevBtn.addEventListener('click', () => {
  currentImage--;
  if (currentImage <= -1) {
    currentImage = images.length - 1;
  }
  slideImage.setAttribute('src', images[currentImage]);
})
