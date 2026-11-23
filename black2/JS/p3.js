const p22Options = document.querySelectorAll('input[name="p2"]');
const nextLink = document.querySelector(".next");

function updateNextVisibility() {
  const hasSelection = Array.from(p22Options).some((option) => option.checked);
  nextLink.classList.toggle("is-visible", hasSelection);
}

p22Options.forEach((option) => {
  option.addEventListener("change", updateNextVisibility);
});

updateNextVisibility();
