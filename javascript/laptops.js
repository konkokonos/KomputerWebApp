export function buyLaptop(price,currentBalanceAmount,balanceAmount){
    if(price>currentBalanceAmount){    // if we dont have enough money
        window.alert("Please go to work or get a Loan from the Bank!");    // we show a alert to the buyer
    }else{
        currentBalanceAmount -= price;    // else we reduce the balance
        balanceAmount.innerText = `${currentBalanceAmount} Kr.`;    // show the new balance
        window.alert("You are now the owner of the new laptop!");    // we alert for the new laptop
    }
    return currentBalanceAmount;
}