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

const btn = document.querySelector(".btn");
const swimLayer = document.querySelector(".swim.parallax-layer");

btn.addEventListener("pointerdown", (event) => {
  if (event.button !== 0) return;
  swimLayer.classList.add("is-pressed");
  document.body.classList.add("screen-glow");
});

function releaseBtn() {
  swimLayer.classList.remove("is-pressed");
  document.body.classList.remove("screen-glow");
}

window.addEventListener("pointerup", releaseBtn);
window.addEventListener("pointercancel", releaseBtn);
window.addEventListener("blur", releaseBtn);


let clickCount = 0;
let isl2Scale = 1;
let hor3Scale = 1;
const clickCountDisplay = document.querySelector(".click-count");
const isl2Layer = document.querySelector(".isl2.parallax-layer");
const hor3Layer = document.querySelector(".hor3.parallax-layer");

btn.addEventListener("click", () => {
  clickCount += 1;
  isl2Scale += 0.02;
  isl2Layer.style.scale = isl2Scale;
  hor3Scale += 0.02;
  hor3Layer.style.scale = hor3Scale;
  clickCountDisplay.textContent = `點擊次數：${clickCount}下`;
  clickCountDisplay.classList.remove("count-pulse");
  void clickCountDisplay.offsetWidth;
  clickCountDisplay.classList.add("count-pulse");
});

const rule = document.querySelector(".rule");
const ruleNextButton = document.querySelector(".rule .nextbtn");

window.setTimeout(() => {
  ruleNextButton.classList.add("is-visible");
}, 3000);

const countdownDisplay = document.querySelector(".countdown");
let countdownStarted = false;

ruleNextButton.addEventListener("click", () => {
  if (countdownStarted) return;
  countdownStarted = true;
  rule.classList.add("slide-up");
  countdownDisplay.classList.add("is-visible");

  let remainingSeconds = 15;
  countdownDisplay.textContent = `剩餘時間：${remainingSeconds}秒`;

  const countdownInterval = window.setInterval(() => {
    remainingSeconds -= 1;
    countdownDisplay.textContent = `剩餘時間：${remainingSeconds}秒`;

    if (remainingSeconds <= 0) {
      window.clearInterval(countdownInterval);
      window.location.href = "./p7.html";
    }
  }, 1000);
});
