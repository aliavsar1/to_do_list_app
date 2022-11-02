"use strict";

//Variables
const aimItem = document.querySelector(".aim");
const addButton = document.querySelector(".addBtn");
const displayGreeting = document.querySelector(".displayGreeting");
const displayItems = document.querySelector(".displayItems");
const removeBtn = document.querySelector(".taskDone");
let toDoListObj = JSON.parse(localStorage.getItem("toDoListObj")) || {};
let i = 0;

//functions
const myFunction = function () {
  if (toDoListObj && Object.keys(toDoListObj).length != 0) {
    displayMessage2();
  } else {
    localStorage.setItem("toDoListObj", JSON.stringify(toDoListObj));
    displayMessage1();
  }
};

const displayMessage1 = function () {
  displayGreeting.innerHTML = `Hoş geldiniz. Bugün yapılacak bir işiniz yok. Yeni görev girin!`;
};

const displayMessage2 = function () {
  displayGreeting.innerHTML = `Hoş geldiniz. Bugün yapılacak ${
    Object.keys(toDoListObj).length
  } adet işiniz var.`;
  displayTaskItems();
};

const displayTaskItems = function () {
  displayItems.innerHTML = "";
  toDoListObj = JSON.parse(localStorage.getItem("toDoListObj"));
  for (let i = 0; i < Object.keys(toDoListObj).length; i++) {
    let html = `<p class="${i} taskItem">${i + 1}. ${
      Object.values(toDoListObj)[i]
    }</p><button class="editTask">Düzenle</button><button class="taskDone" id="${
      Object.keys(toDoListObj)[i]
    }" onClick="reply_click(this.id)">Görevi sil</button>`;
    displayItems.insertAdjacentHTML("beforeend", html);
  }
};

function reply_click(clicked_id) {
  const x = clicked_id;
  console.log(x);
  delete toDoListObj[x];
  toDoListObj = toDoListObj;
  localStorage.setItem("toDoListObj", JSON.stringify(toDoListObj));
  displayItems.innerHTML = "";
  if (Object.keys(toDoListObj).length == 0) {
    displayMessage1();
  } else {
    displayMessage2();
  }
  displayTaskItems();
}

//event listeners

addButton.addEventListener("click", function () {
  if (Object.keys(toDoListObj).length === 0) {
    i = 0;
    toDoListObj[i] = aimItem.value;
    localStorage.setItem("toDoListObj", JSON.stringify(toDoListObj));

    displayMessage2();
    displayTaskItems();
  } else {
    const lengthObj = Object.keys(toDoListObj).length;

    const keyNum = +Object.keys(toDoListObj)[lengthObj - 1];

    i = keyNum + 1;
    toDoListObj[i] = aimItem.value;
    localStorage.setItem("toDoListObj", JSON.stringify(toDoListObj));

    displayMessage2();
    displayTaskItems();
    i++;
  }
});
