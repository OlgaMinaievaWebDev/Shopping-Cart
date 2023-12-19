const appSettings = {
  databaseURL: "https://test-531ea-default-rtdb.firebaseio.com/",
};

const inputEl = document.getElementById("input");
const addBtn = document.getElementById("add");

addBtn.addEventListener("click", function () {
  let inputValue = inputEl.value;
  console.log(inputValue);
});
