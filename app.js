import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSettings = {
  databaseURL: "https://test-531ea-default-rtdb.firebaseio.com/",
};

const app = initializeApp(appSettings);
const database = getDatabase(app);
const shoppingListDB = ref(database, "shoppingList");

const inputEl = document.getElementById("input");
const addBtn = document.getElementById("add");

addBtn.addEventListener("click", function () {
  let inputValue = inputEl.value;

  push(shoppingListDB, inputValue);

  console.log(inputValue);
});
