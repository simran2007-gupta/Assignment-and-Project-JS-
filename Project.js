console.log("--- Initializing Inventory System ---");

const inventory = [
    { name: "Laptop", price: 800 },
    { name: "Mouse", price: 25 }
];

function getCategory(price) {
    let badge;
    switch (true) {
        case price >= 500:
            badge = "Premium";
            break;
        case price >= 100:
            badge = "Standard";
            break;
        default:
            badge = "Budget";
    }
    return badge;
}

function findProductIndex(list, name) {
    let foundIndex = -1;
    for (let i = 0; i < list.length; i++) {
        if (list[i].name.toLowerCase() !== name.toLowerCase()) {
            continue;
        }
        foundIndex = i;
        break;
    }
    return foundIndex;
}

function calculateTotal(list) {
    let total = 0;
    list.forEach(item => {
        total += item.price;
    });
    return total;
}

const applyAdjustment = (price, taxRate = 0, discountRate = 0) =>
    price * (1 - discountRate / 100) * (1 + taxRate / 100);

const MAX_ATTEMPTS = 3;

for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
    const nameInput = prompt("Enter the new product name:");
    const priceInput = prompt("Enter the product price:");

    if (nameInput === null || priceInput === null) {
        console.log("Input cancelled. Continuing with existing inventory.");
        break;
    }

    const name = nameInput.trim();
    const cleanedPrice = priceInput.replace("$", "").trim();
    const price = Number(cleanedPrice);

    if (name === "" || cleanedPrice === "" || isNaN(price) || price <= 0) {
        console.log(`Invalid input (attempt ${attempt} of ${MAX_ATTEMPTS}). Enter a name and a positive price.`);
        continue;
    }

    if (findProductIndex(inventory, name) !== -1) {
        console.log(`"${name}" already exists (attempt ${attempt} of ${MAX_ATTEMPTS}). Try a different product.`);
        continue;
    }

    inventory.push({ name, price });
    console.log(`[Prompt executed: User adds "${name}" at "$${price}"]`);
    break;
}

console.log("\n--- Processing Inventory Roster (forEach) ---");
inventory.forEach(item => {
    console.log(`* Item: ${item.name} ($${item.price}) -> Category: ${getCategory(item.price)}`);
});

console.log("\n--- Financial Analytics ---");

const totalValue = calculateTotal(inventory);
console.log(`Total Inventory Value: $${totalValue}`);

const affordableNames = inventory
    .filter(item => item.price < 200)
    .map(item => item.name);
console.log(`Filtered Affordable Items (Under $200): ${JSON.stringify(affordableNames)}`);

const report = inventory.map(item => `${item.name.toUpperCase()}: $${item.price}`);
console.log(`Formatted Report List: ${JSON.stringify(report)}`);

console.log(`Total with 18% tax: $${applyAdjustment(totalValue, 18).toFixed(2)}`);