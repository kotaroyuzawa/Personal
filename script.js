/*scrolling
document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
    });
  }
});
*/

const materialToggles = document.querySelectorAll(".material-title");
const materialTexts = document.querySelectorAll(".material-text");
materialToggles.forEach((materialToggle) => {
  materialToggle.addEventListener("click", () => {
    console.log(this.nextSibling);
  });
});

//toggle
const toggles = document.querySelectorAll(".faq-toggle");

toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    toggle.parentNode.classList.toggle("active");
  });
});
