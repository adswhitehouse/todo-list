// Variables
let input = document.querySelector(".jsInput");
let add = document.querySelector(".jsAdd");
let itemContainer = document.querySelector(".jsItemContainer");

// When "add" button is clicked -
add.addEventListener("click", () => {
  addItem();
});

// Adds new item to the page
function addItem() {
  // Stores input value with first letter capitalized
  let inputValue = input.value;
  inputValue = inputValue.charAt(0).toUpperCase() + inputValue.slice(1);
  // Create Elements
  let div = document.createElement("div");
  let checkButton = document.createElement("button");
  let checkIcon = document.createElement("i");
  let itemText = document.createElement("p");
  let xButton = document.createElement("button");
  let xIcon = document.createElement("i");
  // Assign classes to elements
  div.classList.add("item");
  checkButton.classList.add("button-check");
  checkIcon.classList.add("fa-solid", "fa-check");
  itemText.classList.add("item-text");
  xButton.classList.add("button-x");
  xIcon.classList.add("fa-solid", "fa-x");
  // Item texts text content = input value
  itemText.textContent = inputValue;
  // Append elements to one another
  checkButton.appendChild(checkIcon);
  xButton.appendChild(xIcon);
  div.append(checkButton, itemText, xButton);
  // Append div to item container
  itemContainer.appendChild(div);
  // Input returns to empty
  input.value = "";
}
