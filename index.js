const DEl = document.querySelector(".D");
const HEl = document.querySelector(".H");
const MEl = document.querySelector(".M");
const SEl = document.querySelector(".S");

// const year = time.getFullYear();
// const Day = time.getDate();
// const Hour = time.getHours();
// const min = time.getMinutes();
// const sec = time.getSeconds();
let newYear = new Date("Jan 1, 2023 00:00:00");

function updateTime() {
  const now = new Date();
  const gab = newYear - now;
  DEl.innerHTML = `${Math.floor(gab / 1000 / 60 / 60 / 24)}`; // days
  HEl.innerHTML = `${24 - now.getHours()}`;
  MEl.innerHTML = `${60 - now.getMinutes() - 1}`;
  SEl.innerHTML = `${60 - now.getSeconds() - 1}`;

  setTimeout(updateTime, 1000);
}
updateTime();

// console.log(gab / 1000); // second
// console.log(gab / 1000 / 60); // mins
// console.log(gab / 1000 / 60 / 60); //hours
// console.log(gab / 1000 / 60 / 60 / 24); // days
// console.log(gab / 1000 / 60 / 60 / 24 / 365); // years
