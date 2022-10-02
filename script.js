"use strict";

// Variable assignments
const myBtn = document.getElementById("myBtn");
const pElement = document.getElementById("demo");
const pElement2 = document.getElementById("demo2");
let i = 0;
//Date function
function dateFunction(newDate) {
  const dateObj = new Date();
  const day = dateObj.getUTCDate();
  const month = [
    "Ocak",
    "Şubat",
    "Mart",
    "Nisan",
    "Mayıs",
    "Haziran",
    "Temmuz",
    "Ağustos",
    "Eylül",
    "Ekim",
    "Kasım",
    "Aralık",
  ][dateObj.getUTCMonth() + 1];
  const daysOfTheWeek = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
  ][dateObj.getDay()];
  const year = dateObj.getUTCFullYear();
  return (newDate = `${"Bugün " + day + " " + month + " " + daysOfTheWeek}`);
}

//check whether localstorage is being used and the number of to-do-list items

if (localStorage.getItem(1) === null) {
  pElement.innerHTML = "Listeniz boş. Yeni yapılacak iş ekleyin.";
}

//SHow the existing to do list
showListBtn.addEventListener("click", function () {
  pElement2.innerHTML = `Esenlikler. ${dateFunction()}. Yapılacak ${
    localStorage.length
  } adet işiniz var.`;
  //LOCAL STORAGE
  for (i = 1; i <= 5; i++) {
    if (localStorage.getItem(i) !== null) {
      let itemOfAim = localStorage.getItem(i);

      let html = `<div class="aimItem">${i}. ${itemOfAim}</div>`;
      pElement.insertAdjacentHTML("beforeend", html);
    }
  }
});

//ADD AN ITEM TO THE LIST

myBtn.addEventListener("click", function () {
  i = localStorage.length;
  i = i + 1;
  if (i > 5) {
    alert("5'ten fazla günlük iş maddesi girilemez.");

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
