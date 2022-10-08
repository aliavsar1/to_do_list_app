"use strict";

// Variable assignments
const addButton = document.getElementById("addBtn");
const removeButton = document.getElementById("removeBtn");
const displayListButton = document.getElementById("displayListBtn");
const clearAllButton = document.getElementById("clearAllBtn");
const displayGreeting = document.getElementById("displayGreeting");
const displayMessage = document.getElementById("displayMessage");
const displayItems = document.getElementById("displayItems");
const aimItem = document.getElementById("aim");
let i = 0;
let toDoListArr = [];
let listItems = JSON.parse(localStorage.getItem("toDoListArr"));

// display the items in the array
if (listItems == null || listItems.length == 0) {
  alert("Yapılacak görev yok. Yeni görev girin.");
} else {
  listItems.forEach(myFunction);
  function myFunction(index, item) {
    const html = `${
      item + 1
    }. ${index}.<button id="${item}" onclick="removerBtn()">Görev yapıldı</button><br>`;
    document
      .querySelector("#displayItems")
      .insertAdjacentHTML("beforeend", html);
  }
}

//add items to the array and display them
addButton.addEventListener("click", function () {
  if (listItems === null) {
    toDoListArr[i] = aimItem.value;
    localStorage.setItem("toDoListArr", JSON.stringify(toDoListArr));
    listItems = JSON.parse(localStorage.getItem("toDoListArr"));
    listItems.forEach(myFunction);
    function myFunction(listItems, index, item) {
      const html = `${
        index + 1
      }. ${item}.<button id="${item}" onclick="removerBtn()">Görev yapıldı</button><br>`;
      document
        .querySelector("#displayItems")
        .insertAdjacentHTML("beforeend", html);
    }
  } else {
    i = listItems.length + 1;
    toDoListArr = listItems;
    toDoListArr.push(aimItem.value);
    toDoListArr = toDoListArr;
    localStorage.setItem("toDoListArr", JSON.stringify(toDoListArr));

    displayItems.innerHTML = "";

    listItems.forEach(myFunction);
    function myFunction(index, item) {
      const html = `${
        item + 1
      }. ${index}.<button id="${item}" onclick="removerBtn()">Görev yapıldı</button><br>`;
      document
        .querySelector("#displayItems")
        .insertAdjacentHTML("beforeend", html);
    }
  }

  i = i + 1;
});

const removerBtn = function () {
  const buttons = document.getElementsByTagName("button");
  const result = document.getElementById("result");
  const buttonPressed = (event) => {
    toDoListArr = JSON.parse(localStorage.getItem("toDoListArr"));

    toDoListArr.splice(`${event.target.id}`, 1);
    localStorage.setItem("toDoListArr", JSON.stringify(toDoListArr));
    ////////////////////
    displayItems.innerHTML = "";
    listItems = JSON.parse(localStorage.getItem("toDoListArr"));
    listItems.forEach(myFunction);
    function myFunction(index, item) {
      const html = `${
        item + 1
      }. ${index}.<button id="${item}" onclick="removerBtn()">Görev yapıldı</button><br>`;
      document
        .querySelector("#displayItems")
        .insertAdjacentHTML("beforeend", html);
    }
  };

  for (let button of buttons) {
    button.addEventListener("click", buttonPressed);
  }
};
