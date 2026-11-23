const questionDeductions = ["p2", "p3", "p4", "p5"].reduce((total, page) => {
  return total + Number(sessionStorage.getItem(`score-${page}`) || 0);
}, 0);
const p6Adjustment = Number(sessionStorage.getItem("score-p6-adjustment") || 0);
const totalScore = 100 - questionDeductions + p6Adjustment;

window.setTimeout(() => {
  const resultPage = totalScore >= 85 ? "p8.html" : totalScore >= 60 ? "p9.html" : "p10.html";
  window.location.href = `./${resultPage}`;
}, 3000);
