import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  onValue,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSettings = {
  databaseURL: "https://test-531ea-default-rtdb.firebaseio.com/",
};

const app = initializeApp(appSettings);
const database = getDatabase(app);
const shoppingListDB = ref(database, "shoppingList");

const inputEl = document.getElementById("input");
const addBtn = document.getElementById("add");
const shoppingListEl = document.getElementById("shopping-list");

//button fire
addBtn.addEventListener("click", function () {
  let inputValue = inputEl.value;

  push(shoppingListDB, inputValue);

  clearInputEl();
});

//fetching data from DB
onValue(shoppingListDB, function (snapshot) {
  let itemsArr = Object.entries(snapshot.val());

  clearShoppingList();
  for (let i = 0; i < itemsArr.length; i++) {
    let currentItem = itemsArr[i];
    let currentItemID = currentItem[0];
    let currentItemValue = currentItem[1];

    addItem(currentItem);
  }
});

//clear shopping list
function clearShoppingList() {
  shoppingListEl.innerHTML = "";
}

//clear input field
function clearInputEl() {
  inputEl.value = "";
}

//add items to list
function addItem(item) {
 let itemId = item[0]
 let itemValue = item[1]
  let li = document.createElement("li");
  li.textContent = itemValue;
  shoppingListEl.appendChild(li);
}
