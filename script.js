"use strict";
const myBtn = document.getElementById("myBtn");
const pElement = document.getElementById("demo");

let dailyThingsToDo = {};
let i = 0;

myBtn.addEventListener("click", function () {
  i = i + 1;
  if (i > 10) {
    alert("10'dan fazla günlük iş maddesi girilemez.");

    return;
  }

  function adder() {
    const aimItem = document.getElementById("aim").value;

    return aimItem;
  }

  let html = `<div class="aimItem">${i}. ${adder()}</div>`;
  pElement.insertAdjacentHTML("beforeend", html);
});
