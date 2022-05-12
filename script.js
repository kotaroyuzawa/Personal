//collapse
const materialToggles = document.querySelectorAll(".material-title");
const materialTexts = document.querySelectorAll(".material-text");
materialToggles.forEach((materialToggle) => {
  materialToggle.addEventListener("click", () => {
    console.log(this.nextSibling);
  });
});

//toggle
const toggles = document.querySelectorAll(".faq__toggle");

toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    toggle.parentNode.classList.toggle("active");
  });
});
