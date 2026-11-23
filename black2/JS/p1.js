document.addEventListener("DOMContentLoaded", function () {
  const dateElement = document.getElementById("application-date");

  const today = new Date();
  const month = today.getMonth() + 1;
  const day = today.getDate();

  function toChineseNumber(num) {
    if (num <= 10) {
      return num === 10
        ? "十"
        : ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"][num];
    }

    if (num < 20) {
      return "十" + (num % 10 === 0 ? "" : toChineseNumber(num % 10));
    }

    if (num < 30) {
      return "二十" + (num % 10 === 0 ? "" : toChineseNumber(num % 10));
    }

    return "三十";
  }

  dateElement.innerHTML = `${toChineseNumber(month)}<span class="date-gap"></span><span class="date-day">${toChineseNumber(day)}</span>`;

  const nameInput = document.getElementById("user-name");
  const submitLink = document.querySelector(".submit");

  submitLink.addEventListener("click", function () {
    sessionStorage.setItem("userName", nameInput.value.trim());
  });
});
