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
  document.querySelector(".aim").value = "";
  displayGreeting.innerHTML = `Hoş geldiniz. Bugün yapılacak bir işiniz yok. Yeni görev girin!`;
};

const displayMessage2 = function () {
  document.querySelector(".aim").value = "";
  displayGreeting.innerHTML = `Hoş geldiniz. Bugün yapılacak ${toDoListArr.length} adet işiniz var.`;
  displayTaskItems();
};

const displayTaskItems = function () {
  displayItems.innerHTML = "";
  toDoListArr = JSON.parse(localStorage.getItem("toDoListArr"));
  for (let i = 0; i < toDoListArr.length; i++) {
    let html = `<p class="${i} taskItem" ondblclick="editItem()">${i + 1}. ${
      toDoListArr[i]
    }</p><button class="editTask">Düzenle</button><button class="taskDone" id="${i}" onClick="removeItem(this.id)">Görevi sil</button>`;
    displayItems.insertAdjacentHTML("beforeend", html);
  }
};

addButton.addEventListener("click", addNewItem);
function addNewItem() {
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
}

function removeItem(clicked_id) {
  const clickedId = clicked_id;
  console.log(clickedId);
  toDoListArr.splice(clickedId, 1);
  localStorage.setItem("toDoListArr", JSON.stringify(toDoListArr));
  displayItems.innerHTML = "";
  if (toDoListArr.length == 0) {
    displayMessage1();
  } else {
    displayMessage2();
  }
  displayTaskItems();
}

// function editItem(event) {
//   let item = event.target.innerHTML;
//   let itemInput = document.createElement("input");
//   itemInput.type = "text";
//   itemInput.value = item;
//   itemInput.classList.add("edit");
//   itemInput.addEventListener("keypress", saveItem);
//   itemInput.addEventListener("click", saveItem);
//   event.target.parentNode.prepend(itemInput);
//   event.target.remove();
//   itemInput.select();
// }

// function saveItem(event) {
//   let inputValue = event.target.value;
//   if(event.target.value.length>0 && (event.keyCode === 13|| event.type === 'click'))
//   let p = document.createElement('p');
//   p.addEventListener('dblclick', editItem)
//   p.textContent=event.target.value;
//   event.target.parentNode.prepend(p);
//   event.target.remove()
// }
