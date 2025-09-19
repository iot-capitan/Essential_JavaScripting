let grocery1_amount = 0;
let grocery2_amount = 0;
let grocery3_amount = 0;

function calculateTotal() {
    grocery1_amount = parseFloat(document.getElementById("grocery1").value) || 0;
    grocery2_amount = parseFloat(document.getElementById("grocery2").value) || 0;
    grocery3_amount = parseFloat(document.getElementById("grocery3").value) || 0;

    if (grocery1_amount < 0 || grocery2_amount < 0 || grocery3_amount < 0) {
        alert("Please enter valid non-negative amounts for all groceries.");
        return;
    }

    let total = grocery1_amount + grocery2_amount + grocery3_amount;
    document.getElementById("result").innerText = "Total grocery cost: $" + total.toFixed(2);
}