let userInfo = document.getElementById("userInput");
let btn = document.getElementById("calcBtn");
let res = document.getElementById("result");
let err = document.querySelector("#error");
btn.addEventListener("click", function () {
  let userData = userInfo.value;
  if (userInfo.value !== "") {
    let parts = userData.split("-");
    let birthYear = Number(parts[0]);
    let birthMonth = Number(parts[1]);
    let birthDay = Number(parts[2]);
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let currentMonth = currentDate.getMonth() + 1;
    let currentDay = currentDate.getDate();
    let years = currentYear - birthYear;
    let months = currentMonth - birthMonth;
    if (months < 0) {
      months = months + 12;
      years = years - 1;
    }
    let days = currentDay - birthDay;
    if (days < 0) {
      days += 30;
      months = months - 1;
    }
    err.style.display = "none";
    res.innerHTML = `
  You are <span class="highlight">${years}</span> years,
  <span class="highlight">${months}</span> months and
  <span class="highlight">${days}</span> days old
`;

  } else {
    err.style.display = "block";
  }
});
