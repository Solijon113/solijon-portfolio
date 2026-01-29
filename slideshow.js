const track = document.querySelector('.certificate-track');
  const items = document.querySelectorAll('.certificate-item');
  const nextBtn = document.querySelector('.slider-btn.next');
  const prevBtn = document.querySelector('.slider-btn.prev');

  let index = 0;
  const totalItems = items.length - 1; // Exclude the cloned item

  function updateSlide(transition = true) {
    if (transition) {
      track.style.transition = 'transform 0.5s ease-in-out';
    } else {
      track.style.transition = 'none';
    }
    track.style.transform = `translateX(-${index * 100}%)`;
  }

  nextBtn.addEventListener('click', () => {
    index++;
    updateSlide();
    
    if (index === totalItems) {
      setTimeout(() => {
        index = 0;
        updateSlide(false);
      }, 500);
    }
  });

  prevBtn.addEventListener('click', () => {
    if (index === 0) {
      index = totalItems;
      updateSlide(false);
      setTimeout(() => {
        index = totalItems - 1;
        updateSlide();
      }, 20);
    } else {
      index--;
      updateSlide();
    }
  });

  // Auto slide
  setInterval(() => {
    index++;
    updateSlide();
    
    if (index === totalItems) {
      setTimeout(() => {
        index = 0;
        updateSlide(false);
      }, 500);
    }
  }, 4000);