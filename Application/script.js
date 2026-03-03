// create an empty inventory table, to be filled later on
const inventoryTable = []

function addInventoryItem(product, category ,price) {
  this.inventoryID = 2353 //UUID
  this.itemName = `${product}`;
  this.categoryID = `${category}`;
  this.currentPrice = price;
  this.stockLevel = Math.floor(Math.random()*100) + 1

  inventoryTable.push(this)
};

const apple = new addInventoryItem('apple','fruit', 0.9)
const hammer = new addInventoryItem('hammer', 'tools', 7.0)
console.log("this is my inventory table:",inventoryTable)

// make category table a function that filters on category

function categoryFilter(category) {
    inventoryTable.filter( item =>  item.categoryID === category
    ) 
}

console.log(categoryFilter("fruit"))