const inputVal = document.querySelector(".inputValue");
const addButton = document.querySelector(".addBtn");
const displayGreeting = document.querySelector(".displayGreeting");
const displayItems = document.querySelector("#displayItems");
const ps = document.getElementsByTagName("p");
const displayItemsinPs = document.getElementById("displayItems");

let toDoListObj = JSON.parse(localStorage.getItem("toDoListObj")) || {};
let i = 0;

//functions
const myFunction = () => {
  if (toDoListObj && Object.keys(toDoListObj).length != 0) {
    displayMessage2();
  } else {
    localStorage.setItem("toDoListObj", JSON.stringify(toDoListObj));
    displayMessage1();
  }
};

const displayMessage1 = () => {
  displayGreeting.innerHTML = `Hoş geldiniz. Bugün yapılacak bir işiniz yok. Yeni görev girin!`;
};

const displayMessage2 = () => {
  displayGreeting.innerHTML = `Hoş geldiniz. Bugün yapılacak ${
    Object.keys(toDoListObj).length
  } adet işiniz var.`;
  displayTaskItems();
};

const displayTaskItems = () => {
  displayItems.innerHTML = "";
  toDoListObj = JSON.parse(localStorage.getItem("toDoListObj"));
  for (let i = 0; i < Object.keys(toDoListObj).length; i++) {
    let html = `<p id="${Object.keys(toDoListObj)[i]}" >${i + 1}. ${
      Object.values(toDoListObj)[i]
    } </p><button class="taskDone" id="${
      Object.keys(toDoListObj)[i]
    }" onClick="reply_click(this.id)">Görevi sil</button>`;
    displayItems.insertAdjacentHTML("beforeend", html);
  }
};

const pGroupPressed = (e) => {
  const isP = e.target.nodeName === "P";
  if (!isP) {
    return;
  }
  let targetId = e.target.id;
  let item = e.target.innerHTML; //hedefteki ögenin içindeki bilgi seçilir
  const item2 = item.substr(3);
  inputVal.value = item2;
  delete toDoListObj[targetId];
};

const reply_click = (clicked_id) => {
  const x = clicked_id;
  delete toDoListObj[x];
  localStorage.setItem("toDoListObj", JSON.stringify(toDoListObj));
  displayItems.innerHTML = "";
  if (Object.keys(toDoListObj).length == 0) {
    displayMessage1();
  } else {
    displayMessage2();
  }
  displayTaskItems();
};

//addeventlisteners
displayItemsinPs.addEventListener("dblclick", pGroupPressed);

inputVal.addEventListener("keypress", function (event) {
  if (event.key === "Enter" && inputVal.value != 0) {
    if (Object.keys(toDoListObj).length === 0) {
      i = 0;
      toDoListObj[i] = inputVal.value;
      localStorage.setItem("toDoListObj", JSON.stringify(toDoListObj));

      displayMessage2();
      displayTaskItems();
      inputVal.value = "";
    } else {
      const lengthObj = Object.keys(toDoListObj).length;

      const keyNum = +Object.keys(toDoListObj)[lengthObj - 1];

      i = keyNum + 1;

      toDoListObj[i] = inputVal.value;
      localStorage.setItem("toDoListObj", JSON.stringify(toDoListObj));

      displayMessage2();
      displayTaskItems();
      i++;
      inputVal.value = "";
    }
  }
});
