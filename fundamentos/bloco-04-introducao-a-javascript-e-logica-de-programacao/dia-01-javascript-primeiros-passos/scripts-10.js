const costValue = 50;
const sellValue = 70;

if (costValue >=0 && sellValue >=0) {
    const finalCostValue = costValue * 1.2;
    const finalProfit = (sellValue - finalCostValue) * 1000;
    console.log(finalProfit)
} else {
    console.log("Error: Invalid imput");
}