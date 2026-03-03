let receiptItems = [];
let selectedItemName = null;
const VAT_RATE = 0.15;

function addItem(name, price) {

    const existing = receiptItems.find(item => item.name === name);

    if (existing) {
        existing.quantity++;
    } else {
        receiptItems.push({ name, price, quantity: 1 });
    }

    updateReceipt();
}

function removeSelectedItem() {

    if (!selectedItemName) return;

    const index = receiptItems.findIndex(item => item.name === selectedItemName);

    if (index === -1) return;

    if (receiptItems[index].quantity > 1) {
        receiptItems[index].quantity--;
    } else {
        receiptItems.splice(index, 1);
    }

    selectedItemName = null;
    updateReceipt();
}

function clearReceipt() {
    receiptItems = [];
    selectedItemName = null;
    updateReceipt();
}

function checkout() {

    if (receiptItems.length === 0) {
        alert("Cart is empty!");
        return;
    }

    alert("Checkout Successful!");
    clearReceipt();
}

function updateReceipt() {

    const list = document.getElementById("receiptItems");
    list.innerHTML = "";

    let subTotal = 0;

    receiptItems.forEach(item => {

        const li = document.createElement("li");
        li.className = "list-group-item";

        li.textContent =
            `${item.name} x${item.quantity} - £${(item.price * item.quantity).toFixed(2)}`;

        li.onclick = () => {

            document.querySelectorAll("#receiptItems li")
                .forEach(el => el.classList.remove("selected"));

            li.classList.add("selected");

            selectedItemName = item.name;
        };

        list.appendChild(li);

        subTotal += item.price * item.quantity;
    });

    const vat = subTotal * VAT_RATE;
    const total = subTotal + vat;

    document.getElementById("subTotal").textContent = `£${subTotal.toFixed(2)}`;
    document.getElementById("vat").textContent = `£${vat.toFixed(2)}`;
    document.getElementById("total").textContent = `£${total.toFixed(2)}`;
}