"use strict";

// Variables
const myBtn = document.getElementById("myBtn");
const pElement = document.getElementById("demo");
let i = 0;
//check whether localstorage is being used and the number of to-do-list items
if (localStorage.getItem(1) === null) {
  pElement.innerHTML = "Listeniz boş. Yeni yapılacak iş ekleyin.";
}

//SHow the existing to do list
showListBtn.addEventListener("click", function () {
  //LOCAL STORAGE
  for (i = 1; i <= 10; i++) {
    let itemOfAim = localStorage.getItem(i);

    let html = `<div class="aimItem">${i}. ${itemOfAim}</div>`;
    pElement.insertAdjacentHTML("beforeend", html);
  }
});

//ADD AN ITEM TO THE LIST

myBtn.addEventListener("click", function () {
  i = i + 1;
  if (i > 10) {
    alert("10'dan fazla günlük iş maddesi girilemez.");

    return;
  }

  function adder() {
    const aimItem = document.getElementById("aim").value;
    localStorage.setItem(`${i}`, `${aimItem}`);
    return aimItem;
  }
  //LOCAL STORAGE
  localStorage.setItem(i, adder());
  let itemOfAim = localStorage.getItem(i);

  let html = `<div class="aimItem">${i}. ${itemOfAim}</div>`;
  pElement.insertAdjacentHTML("beforeend", html);
});
//CLEAR LOCAL STORAGE
clearBtn.addEventListener("click", function () {
  localStorage.clear();
});
