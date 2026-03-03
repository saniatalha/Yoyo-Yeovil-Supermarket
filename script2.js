let receiptItems = [];
let selectedItemName = null;
const VAT_RATE = 0.15;

// ============================
// FRUIT DATA
// ============================

const fruits = [
  { name: "Apple", price: 1.80 },
  { name: "Banana", price: 1.50 },
  { name: "Orange", price: 2.00 },
  { name: "Mango", price: 2.50 },
  { name: "Pineapple", price: 3.00 },
  { name: "Strawberry", price: 2.20 },
  { name: "Blueberry", price: 2.80 },
  { name: "Watermelon", price: 4.00 }
];

// ============================
// INITIALIZE
// ============================

document.addEventListener("DOMContentLoaded", () => {
  renderItems();
  updateDateTime();

  document.getElementById("removeBtn").addEventListener("click", removeSelectedItem);
  document.getElementById("clearBtn").addEventListener("click", clearReceipt);
  document.getElementById("completeBtn").addEventListener("click", completeSale);
});

// ============================
// RENDER ITEM GRID
// ============================

function renderItems() {
  const grid = document.getElementById("itemsGrid");

  fruits.forEach(fruit => {
    const div = document.createElement("div");
    div.classList.add("item");
    div.textContent = `${fruit.name} - £${fruit.price.toFixed(2)}`;

    div.addEventListener("click", () => {
      addItem(fruit.name, fruit.price);
    });

    grid.appendChild(div);
  });
}

// ============================
// ADD ITEM
// ============================

function addItem(name, price) {
  const existingItem = receiptItems.find(item => item.name === name);

  if (existingItem) {
    existingItem.quantity++;
  } else {
    receiptItems.push({
      name,
      price,
      quantity: 1
    });
  }

  renderReceipt();
}

// ============================
// REMOVE SELECTED ITEM
// ============================

function removeSelectedItem() {
  if (!selectedItemName) return;

  const itemIndex = receiptItems.findIndex(item => item.name === selectedItemName);

  if (itemIndex !== -1) {
    if (receiptItems[itemIndex].quantity > 1) {
      receiptItems[itemIndex].quantity--;
    } else {
      receiptItems.splice(itemIndex, 1);
    }
  }

  selectedItemName = null;
  renderReceipt();
}

// ============================
// CLEAR RECEIPT
// ============================

function clearReceipt() {
  receiptItems = [];
  selectedItemName = null;
  renderReceipt();
}

// ============================
// COMPLETE SALE
// ============================

function completeSale() {
  if (receiptItems.length === 0) return;

  alert("Sale completed!");
  clearReceipt();
}