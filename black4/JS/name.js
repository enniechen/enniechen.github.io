document.addEventListener("DOMContentLoaded", function () {
  const nameElement = document.getElementById("user-name");
  const userName = sessionStorage.getItem("userName");
  const dateElement = document.getElementById("open-date");

  if (nameElement && userName) {
    nameElement.textContent = userName;
  }

  if (dateElement) {
    const now = new Date();
    const toChineseDigits = (value) =>
      String(value).replace(/\d/g, (digit) => "〇一二三四五六七八九"[digit]);

    dateElement.querySelector(".date-month").textContent = toChineseDigits(
      now.getMonth() + 1,
    );
    dateElement.querySelector(".date-day").textContent = toChineseDigits(
      now.getDate(),
    );
  }
});
