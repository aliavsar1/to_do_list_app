"use strict";

//Variables
const aimItem = document.querySelector(".aim");
const addButton = document.querySelector(".addBtn");
const displayGreeting = document.querySelector(".displayGreeting");
const displayItems = document.querySelector(".displayItems");
const removeBtn = document.querySelector(".taskDone");
let toDoListArr = JSON.parse(localStorage.getItem("toDoListArr")) || {};
let i = 0;

//functions
const myFunction = function () {
  if (toDoListArr && Object.keys(toDoListArr).length != 0) {
    displayMessage2();
  } else {
    localStorage.setItem("toDoListArr", JSON.stringify(toDoListArr));
    displayMessage1();
  }
};

const displayMessage1 = function () {
  displayGreeting.innerHTML = `Hoş geldiniz. Bugün yapılacak bir işiniz yok. Yeni görev girin!`;
};

const displayMessage2 = function () {
  displayGreeting.innerHTML = `Hoş geldiniz. Bugün yapılacak ${
    Object.keys(toDoListArr).length
  } adet işiniz var.`;
  displayTaskItems();
};

const displayTaskItems = function () {
  displayItems.innerHTML = "";
  toDoListArr = JSON.parse(localStorage.getItem("toDoListArr"));
  for (let i = 0; i < Object.keys(toDoListArr).length; i++) {
    let html = `<p class="${i} taskItem">${i + 1}. ${
      Object.values(toDoListArr)[i]
    }</p><button class="editTask">Düzenle</button><button class="taskDone" id="${
      Object.keys(toDoListArr)[i]
    }" onClick="reply_click(this.id)">Görevi sil</button>`;
    displayItems.insertAdjacentHTML("beforeend", html);
  }
};

function reply_click(clicked_id) {
  const x = clicked_id;
  console.log(x);
  delete toDoListArr[x];
  toDoListArr = toDoListArr;
  localStorage.setItem("toDoListArr", JSON.stringify(toDoListArr));
  displayItems.innerHTML = "";
  if (Object.keys(toDoListArr).length == 0) {
    displayMessage1();
  } else {
    displayMessage2();
  }
  displayTaskItems();
}

//event listeners

addButton.addEventListener("click", function () {
  if (Object.keys(toDoListArr).length === 0) {
    toDoListArr[i] = aimItem.value;
    localStorage.setItem("toDoListArr", JSON.stringify(toDoListArr));

    displayMessage2();
    displayTaskItems();
  } else {
    i = Object.keys(toDoListArr).length;

    toDoListArr[i] = aimItem.value;
    localStorage.setItem("toDoListArr", JSON.stringify(toDoListArr));

    displayMessage2();
    displayTaskItems();
    i++;
  }
});
