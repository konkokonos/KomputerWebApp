import { negativeLoan } from "./balance.js";

/* 
    function to increase the currentWorkAmount by 100
    and return the result with .innerText in order to see
    it in our web application.
*/
export function goToWork(currentWorkAmount,workAmount){
    currentWorkAmount += 100;   // we increase the work amount by 100 Kr 
    workAmount.innerText = `${currentWorkAmount} Kr.`;    // we show the chnage
    return currentWorkAmount;   // return the work amount
}

// function to transfer money from work to balance
export function transferMoneyWorkToBalance(currentLoanAmount,currentWorkAmount,currentBalanceAmount
    ,loanAmount,balanceAmount,workAmount){
    if(currentLoanAmount>0){    // if we have a loan
        let deductionAmount = 0.10 * currentWorkAmount;    // we calculate the 10% deduction  
        currentLoanAmount -= deductionAmount;    // we repay some of the loan amount with deduction amount
        if(currentLoanAmount <= 0){    // if the loan amount is negative, we gave more money for the loan
            currentBalanceAmount = negativeLoan(currentLoanAmount,currentBalanceAmount);    // we are calling a specific function

        }else{
            loanAmount.innerText = currentLoanAmount + " Kr.";    // we display the remaining loan 
        }
        currentWorkAmount -= deductionAmount;    // we calculate the amount after the deduction 
                                                 // to be added to the balance
    }
    currentBalanceAmount += currentWorkAmount;    // we calculate the final balance amount
    balanceAmount.innerText = currentBalanceAmount + " Kr.";    // displaying the balance
    currentWorkAmount = 0;    // we give the work amount its default value (0)
    workAmount.innerText = `${currentWorkAmount} Kr.`;    // we display the work amount
    return [currentLoanAmount,currentWorkAmount,currentBalanceAmount];
}

export function repayAllSomeLoan(currentLoanAmount,currentWorkAmount,currentBalanceAmount,
    loanAmount,workAmount,balanceAmount){
    currentLoanAmount -= currentWorkAmount;    // we calculate the loan amount after the new loan after the reduction
    if(currentLoanAmount <= 0){    // if negative loan or 0
        currentBalanceAmount = negativeLoan(currentLoanAmount,currentBalanceAmount);    // we calling the specific function
    }else{
        loanAmount.innerText = currentLoanAmount + " Kr.";    // else we show the new loan
    }
    currentWorkAmount = 0;    // we give the work amount its default value (0)
    workAmount.innerText = `${currentWorkAmount} Kr.`;    // we display the work amount
    balanceAmount.innerText = currentBalanceAmount + " Kr.";    // displaying the balance
    return [currentLoanAmount,currentWorkAmount,currentBalanceAmount];
}