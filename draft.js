// Receipt Object
// const receipt = []
// function receiptItems (itemName, itemPrice) {
//     this.receiptItems = `${itemName}`;
//     this.itemPrice = `${itemPrice}`;
//     receipt.push({itemName, itemPrice});
// }
// console.log('Your receipt:', receiptItems('Bread', 2.50));

// function createReceipt() {
//     const receipt = [];
//     const itemsPurchased = [];

//     return {
//         itemsPurchased,
//         totalCost: 0,
//         timeStamp: new Date()
//     };
// }
// console.log(createReceipt());    

// [
//   {
//     inventoryID: 2353,
//     itemName: 'apple',
//     categoryID: 'fruit',
//     currentPrice: 0.9,
//     stockLevel: 57
//   }
// ]


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


// function totalCost() {
//     let totalCost = 0;
//     for (let i = 0; i < receipt.length; i++) {
//         totalCost += receipt[i].itemPrice;
//     }
//     return totalCost;
// }

// console.log('Your receipt total is: £', totalCost());


/*
const total = o

loop of the array to bring back each object
item.key of cost 
total = total + item.key of cost

return total

totalCOst: functionFOrTotal(array)

*/


// Creating a transaction database
// function createTransactionDB() {
//     return [
//         {trans_id: [1, 2, 3],
//         trans_items: [], 
//         price: 0,
//         time_stamp: new Date(),
//         total_stock:trans_id.length,
//         total_cost: 0
//         }
//     ];
// }
// receiptHistory = []
// // logic receiptHistory.psuh(receipt); in a fcuntion or after a step has happened
// function createTransactionDB() {
//     return {
//         receiptHistory,
//         addReceipt(receipt) {
//             this.receiptHistory.push(receipt);
//         }
//     };
// }
// const transactionDB = createTransactionDB();
// transactionDB.addReceipt(createReceipt());
// console.log(transactionDB);


