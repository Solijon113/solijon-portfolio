  const modal = document.getElementById("certModal");
  const modalImg = document.getElementById("modalImage");
  const closeBtn = document.querySelector(".modal .close");

  document.querySelectorAll(".project-link").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      modal.style.display = "flex";
      modalImg.src = link.href;
    });
  });

  closeBtn.onclick = () => {
    modal.style.display = "none";
  };

  modal.onclick = e => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  };