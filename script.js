"use strict";

// Variable assignments
const addButton = document.getElementById("addBtn");

const displayListButton = document.getElementById("displayListBtn");
const clearAllButton = document.getElementById("clearAllBtn");
const displayGreeting = document.getElementById("displayGreeting");
const displayMessage = document.getElementById("displayMessage");
const displayItems = document.getElementById("displayItems");

const aimItem = document.getElementById("aim");
let listItems = JSON.parse(localStorage.getItem("toDoListArr"));
let i = 0;
let toDoListArr = [];

//FUNCTIONS

// 1 - display function
const display = function () {
  if (listItems == null || listItems.length == 0) {
    displayMessage.innerHTML = "Array yok. Yeni görev girin!";
  } else {
    listItems = JSON.parse(localStorage.getItem("toDoListArr"));
    listItems.forEach(myFunction);
    function myFunction(item, index) {
      const html = `${
        index + 1
      }. ${item}.<button id="${index}" onclick="removeItem()">Görev yapıldı</button><br>`;
      document
        .querySelector("#displayItems")
        .insertAdjacentHTML("beforeend", html);
    }
  }
};
display();

//2. - create New Array
const createNewArr = function () {
  if (listItems == null || listItems.length == 0) {
    toDoListArr[i] = aimItem.value;
    localStorage.setItem("toDoListArr", JSON.stringify(toDoListArr));
    listItems = JSON.parse(localStorage.getItem("toDoListArr"));
    listItems.forEach(myFunction);
    function myFunction(item, index) {
      const html = `${
        index + 1
      }. ${item}.<button id="${index}" onclick="removeItem()">Görev yapıldı</button><br>`;
      document
        .querySelector("#displayItems")
        .insertAdjacentHTML("beforeend", html);
    }
  }
};

// Add an item to the existing Array
const addToTheExistingArr = function () {
  if (listItems != null || listItems.length != 0) {
    i = listItems.length + 1;
    toDoListArr = listItems;
    toDoListArr.push(aimItem.value);

    localStorage.setItem("toDoListArr", JSON.stringify(toDoListArr));

    displayItems.innerHTML = "";

    listItems.forEach(myFunction);
    function myFunction(item, index) {
      const html = `${
        index + 1
      }. ${item}.<button id="${index}" onclick="removeItem()">Görev yapıldı</button><br>`;
      document
        .querySelector("#displayItems")
        .insertAdjacentHTML("beforeend", html);
    }
  }
};

// Remove an item from the Array
const removeItem = function () {
  const buttons = document.getElementsByTagName("button");
  const result = document.getElementById("result");
  const buttonPressed = function (event) {
    toDoListArr = JSON.parse(localStorage.getItem("toDoListArr"));

    toDoListArr.splice(`${event.target.id}`, 1);
    localStorage.setItem("toDoListArr", JSON.stringify(toDoListArr));
    ////////////////////
    displayItems.innerHTML = "";
    listItems = JSON.parse(localStorage.getItem("toDoListArr"));
    listItems.forEach(myFunction);
    function myFunction(item, index) {
      const html = `${
        index + 1
      }. ${item}.<button id="${index}" onclick="removeItem()">Görev yapıldı</button><br>`;
      displayItems.insertAdjacentHTML("beforeend", html);
    }
    if (listItems.length == 0) {
      displayMessage.innerHTML = "Array yok. Yeni görev girin!";
      display();
    }
  };

  for (let button of buttons) {
    button.addEventListener("click", buttonPressed);
  }
};

//add to the array button
//
addButton.addEventListener("click", function () {
  if (listItems == null || listItems.length == 0) {
    displayMessage.innerHTML = "";
    createNewArr();
  } else {
    addToTheExistingArr();
  }
});
