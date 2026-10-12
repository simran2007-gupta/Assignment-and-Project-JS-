const billInput = prompt("Enter the bill amount:");
const tipInput = prompt("Enter the tip percentage:");

const billAmount = Number(billInput);
const tipPercentage = Number(tipInput);

if (isNaN(billAmount) || isNaN(tipPercentage) || billInput === "" || tipInput === "") {
    console.log("Please enter valid numbers.");
} else {
    let tipAmount = billAmount * tipPercentage / 100;
    let totalAmount = billAmount;
    totalAmount += tipAmount;

    console.log(`Subtotal: $${billAmount}`);
    console.log(`Tip Percentage: ${tipPercentage}%`);
    console.log(`Calculated Tip: $${tipAmount}`);
    console.log(`Total Amount to Pay: $${totalAmount}`);
}