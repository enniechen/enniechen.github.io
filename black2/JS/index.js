// 1. 原本的海景視差互動（因為圖一設了 pointer-events: none，滑鼠移動時完全不受阻擋）
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

// 2. 點擊螢幕任一處，圖一向上離開畫面
const introOverlay = document.getElementById("introOverlay");

introOverlay?.addEventListener("transitionend", (event) => {
  if (event.propertyName === "transform" && introOverlay.classList.contains("slide-up")) {
    document.body.classList.add("intro-finished");
  }
});

document.addEventListener(
  "click",
  () => {
    if (introOverlay && !introOverlay.classList.contains("slide-up")) {
      introOverlay.classList.add("slide-up");
      document.body.style.cursor = "default"; // 移開後恢復預設游標
    }
  },
  { once: true },
); // { once: true } 確保只觸發一次，不影響後續操作
