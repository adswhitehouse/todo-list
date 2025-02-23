// Variables
let input = document.querySelector(".jsInput");
let add = document.querySelector(".jsAdd");
let itemContainer = document.querySelector(".jsItemContainer");
let alertDisplay = document.querySelector(".jsAlert");
let clearItemsBtn = document.querySelector(".jsClearItems");

// When "add" button is clicked -
add.addEventListener("click", () => {
  addItem();

  removeItem();

  markItem();
});

// Adds new item to the page
function addItem() {
  if (input.value) {
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
    checkIcon.classList.add("fa-solid", "fa-check", "hidden");
    itemText.classList.add("item-text", "jsItemText");
    xButton.classList.add("button-x", "jsDeleteItem");
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
    // Display message
    alertMessage("Item Added", "alert-green");
    // Show clear items button
    showOrHideClearItems();
  } else {
    // Display message
    alertMessage("Please Enter Item", "alert-red");
  }
}

// X button removes relative item
function removeItem() {
  let deleteBtns = document.querySelectorAll(".jsDeleteItem");
  deleteBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.parentElement.remove();
      alertMessage("Item Removed", "alert-neutral");
      showOrHideClearItems();
    });
  });
}

// Check and uncheck an item to mark completion
function markItem() {
  let itemTextContent = document.querySelectorAll(".jsItemText");
  itemTextContent.forEach((item) => {
    let isToggled = false;
    item.addEventListener("click", () => {
      if (!isToggled) {
        item.classList.add("strikethrough");
        item.parentElement.firstChild.firstChild.classList.remove("hidden");
        item.parentElement.firstChild.classList.add("item-checked");
        isToggled = true;
      } else {
        item.classList.remove("strikethrough");
        item.parentElement.firstChild.firstChild.classList.add("hidden");
        item.parentElement.firstChild.classList.remove("item-checked");
        isToggled = false;
      }
    });
  });
}

// Alert message upon list interaction
function alertMessage(text, style) {
  alertDisplay.textContent = text;
  alertDisplay.classList.add(`${style}`);
  timeout = setTimeout(() => {
    alertDisplay.classList.remove(`${style}`);
    alertDisplay.textContent = "";
  }, 1000);
}

// Shows or hides clear items button depending on list content
function showOrHideClearItems() {
  if (itemContainer.firstElementChild) {
    clearItemsBtn.classList.remove("hidden");
  } else {
    clearItemsBtn.classList.add("hidden");
  }
}

// Clears list
clearItemsBtn.addEventListener("click", () => {
  while (itemContainer.firstChild) {
    itemContainer.firstChild.remove();
  }
  showOrHideClearItems();
  alertMessage("List Cleared", "alert-neutral");
});
