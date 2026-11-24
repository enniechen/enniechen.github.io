document.addEventListener("mousemove", (event) => {
  const layers = document.querySelectorAll(".parallax-layer");
  const x = event.clientX / window.innerWidth - 0.5;
  const y = event.clientY / window.innerHeight - 0.5;

  layers.forEach((layer) => {
    const speed = Number(layer.dataset.speed) || 0;
    const moveX = -x * speed * 3;
    const moveY = -y * speed * 1.25;
    layer.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
  });
});
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
    sessionStorage.setItem("score-p5", String(deductions[option.value]));
  });
});

updateNextVisibility();

document.addEventListener("mousemove", (e) => {
  const layers = document.querySelectorAll(".parallax-layer");
  const x = e.clientX / window.innerWidth - 0.5;
  const y = e.clientY / window.innerHeight - 0.5;

  layers.forEach((layer) => {
    const speed = layer.getAttribute("data-speed");
    const moveX = -x * speed * 3;
    const moveY = layer.classList.contains("boat")
      ? 0
      : -y * (speed * 0.5) * 2.5;

    layer.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
  });
});
