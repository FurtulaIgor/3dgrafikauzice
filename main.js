/** @format */

const parent = document.querySelector(".header");

parent.addEventListener("click", (event) => {
  const clickedElement = event.target.closest(".nav-item");

  if (clickedElement) {
    clickedElement.classList.toggle("active");
    const panel = clickedElement.nextElementSibling;

    if (panel.style.display === "flex") {
      panel.classList.remove("active");
      panel.style.display = "none";
    } else {
      panel.classList.add("active");
      panel.style.display = "flex";
    }
  }
});
