const p22Options = document.querySelectorAll('input[name="p2"]');
const nextLink = document.querySelector(".next");

function updateNextVisibility() {
  const hasSelection = Array.from(p22Options).some((option) => option.checked);
  nextLink.classList.toggle("is-visible", hasSelection);
}

p22Options.forEach((option) => {
  option.addEventListener("change", updateNextVisibility);
});

const deductions = { a: 10, b: 0, c: 5 };
p22Options.forEach((option) => {
  option.addEventListener("change", () => {
    sessionStorage.setItem("score-p3", String(deductions[option.value]));
  });
});

updateNextVisibility();
