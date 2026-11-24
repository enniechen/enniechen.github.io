const p22Options = document.querySelectorAll('input[name="p2"]');
const nextLink = document.querySelector(".next");

function updateNextVisibility() {
  const hasSelection = Array.from(p22Options).some((option) => option.checked);
  nextLink.classList.toggle("is-visible", hasSelection);
}

p22Options.forEach((option) => {
  option.addEventListener("change", updateNextVisibility);
});

const deductions = { a: 0, b: 5, c: 10 };
p22Options.forEach((option) => {
  option.addEventListener("change", () => {
    const page = window.location.pathname.match(/p[2-5]/)?.[0];
    if (page) {
      sessionStorage.setItem(`score-${page}`, String(deductions[option.value]));
    }
  });
});

updateNextVisibility();
