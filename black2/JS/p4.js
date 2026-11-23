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
