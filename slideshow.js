const items = document.querySelectorAll(".certificate-item");
let currentIndex = 0;
const intervalTime = 4000; // 3 seconds

function showSlide(index) {
  items.forEach(item => item.classList.remove("active"));
  items[index].classList.add("active");
}

function nextSlide() {
  currentIndex++;
  if (currentIndex >= items.length) {
    currentIndex = 0;
  }
  showSlide(currentIndex);
}

// Start auto slideshow
setInterval(nextSlide, intervalTime);
