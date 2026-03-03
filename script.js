const receipt = [
  { itemName: "apple", itemPrice: 0.9 },
  { itemName: "bread", itemPrice: 2.5 }
];

function totalCost() {
  return receipt.reduce((sum, item) => sum + item.itemPrice, 0);
}
const purchaseHistory = [];
function saveTransaction() {
  const transaction = {
    transactionID: Date.now(),
    items: [...receipt],      
    total: totalCost(),
    timestamp: new Date()
  };

  purchaseHistory.push(transaction);

  return transaction;
}
console.log('Your receipt total is: £', totalCost());
console.log('Transaction saved:', saveTransaction());

