"use strict";

//Variables
const aimItem = document.querySelector(".aim");
const addButton = document.querySelector(".addBtn");
const displayGreeting = document.querySelector(".displayGreeting");
const displayItems = document.querySelector(".displayItems");
const removeBtn = document.querySelector(".taskDone");
let toDoListArr = JSON.parse(localStorage.getItem("toDoListArr")) || [];
let i = 0;

//functions
const myFunction = function () {
  if (toDoListArr && toDoListArr.length != 0) {
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
  displayGreeting.innerHTML = `Hoş geldiniz. Bugün yapılacak ${toDoListArr.length} adet işiniz var.`;
  displayTaskItems();
};

const displayTaskItems = function () {
  displayItems.innerHTML = "";
  toDoListArr = JSON.parse(localStorage.getItem("toDoListArr"));
  for (let i = 0; i < toDoListArr.length; i++) {
    let html = `<p class="${i} taskItem">${i + 1}. ${
      toDoListArr[i]
    }</p><button class="editTask">Düzenle</button><button class="taskDone" id="${i}" onClick="reply_click(this.id)">Görevi sil</button>`;
    displayItems.insertAdjacentHTML("beforeend", html);
  }
};

addButton.addEventListener("click", function () {
  if (toDoListArr.length == 0) {
    toDoListArr.push(aimItem.value);
    localStorage.setItem("toDoListArr", JSON.stringify(toDoListArr));

    displayMessage2();
    displayTaskItems();
  } else {
    i = toDoListArr.length + 1;

    toDoListArr.push(aimItem.value);
    localStorage.setItem("toDoListArr", JSON.stringify(toDoListArr));

    displayMessage2();
    displayTaskItems();
    i = i + 1;
  }
});

function reply_click(clicked_id) {
  const x = clicked_id;
  console.log(x);
  toDoListArr.splice(x, 1);
  localStorage.setItem("toDoListArr", JSON.stringify(toDoListArr));
  displayItems.innerHTML = "";
  if (toDoListArr.length == 0) {
    displayMessage1();
  } else {
    displayMessage2();
  }
  displayTaskItems();
}
