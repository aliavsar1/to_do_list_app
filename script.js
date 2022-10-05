"use strict";

// Variable assignments
const addButton = document.getElementById("addBtn");
const displayListButton = document.getElementById("displayListBtn");
const clearAllButton = document.getElementById("clearAllBtn");
const displaGreeting = document.getElementById("displayGreeting");
const displayMessage = document.getElementById("displayMessage");
const displayItems = document.getElementById("displayItems");

const aimItem = document.getElementById("aim");
let toDoListArray = [];
let i = 0;
const listItems = JSON.parse(localStorage.getItem("toDoListArray"));

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

//add items to the list
addButton.addEventListener("click", function () {
  if (i > 4) {
    displayMessage.innerHTML = "5'ten fazla görev ekleyemezsiniz!";
    return;
  }
  toDoListArray[i] = aimItem.value;
  localStorage.setItem("toDoListArray", JSON.stringify(toDoListArray));
  i = i + 1;
});

//display items in the list
displayListButton.addEventListener("click", function () {
  listItems.forEach(myFunction);
  function myFunction(index, item) {
    displayItems.innerHTML += `${item + 1}. ${index}.<br>`;
  }
});
//remove items
function remove() {
  // const greetings = JSON.parse(localStorage.getItem("greetings"));
  const filtered = listItems.filter((item) => item !== "Hello");
  localStorage.setItem("greetings", JSON.stringify(filtered));
}
//remove all items
clearAllButton.addEventListener("click", function () {
  localStorage.clear();
});
