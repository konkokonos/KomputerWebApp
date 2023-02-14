export function getALoan(currentLoanAmount,currentBalanceAmount,loanAmount,balanceAmount,repayLoan){
    if(currentLoanAmount>0){    // checking if we have already a loan
        window.alert("You have already a Loan!");    // if yes we alert
    }
    else{    // else we are calling the addLoanInformation function
        return addLoanInformation(currentLoanAmount,currentBalanceAmount,loanAmount,balanceAmount,repayLoan);
    }
}

function addLoanInformation(currentLoanAmount,currentBalanceAmount,loanAmount,balanceAmount,repayLoan){
    currentLoanAmount = Number(prompt("Please give the amount you want: "));    // we ask the user the loan amount
    if(isNaN(currentLoanAmount)){
        window.alert("Please type only a number!");
    }else if(currentLoanAmount > (currentBalanceAmount*2)){    // checking if the amount is greater than the double balance
        window.alert("This amount is larger than the maximum("+currentBalanceAmount*2+" Kr.)"); // if yes we alert the user
        currentLoanAmount = 0;    // change back the loan amount to 0;
    }
    else if(currentLoanAmount <= 0){    // check if the user types wrong number
        window.alert("Please give an appropriate amount for Loan!");    // alert if yes
    }
    else{
        let table = document.getElementById("add-loan");    // get the table element
        let row = table.insertRow(-1);    // we add a new row to the existing table
        row.id = "new-loan-row";    // give id to the new row
        let c1 = row.insertCell();    // create and insert new td
        let c2 = row.insertCell();    // create and insert new td
        c1.innerText = "Loan";    // give a text for the first table data
        c2.id = "loan-amount";    // give id to the second td
        c2.innerText = `${currentLoanAmount} Kr.`;    // we show the loan amount 
        loanAmount = document.getElementById("loan-amount");    // we give the element loanAmount proper value

        let myDiv = document.getElementById("repay-loan");    // we get the div element with the specific id
        let button = document.createElement("button");    // we create a button
        button.className = "repay-loan-button";    // we give the new button the class
        button.id = "repay-button";    // the id
        let text = document.createTextNode("Repay Loan");     // creating text to be displayed on button        
        button.appendChild(text);    // appending text to button
        myDiv.appendChild(button);    // appending button to div
            
        repayLoan = document.getElementById("repay-button");    // we give the element repayLoan proper value
        currentBalanceAmount += currentLoanAmount;    // adding the loan to the balance
        balanceAmount.innerText = `${currentBalanceAmount} Kr.`;    // show the new balance
    }
    return [loanAmount,currentLoanAmount,repayLoan,currentBalanceAmount];
}
// special function, if we dont have a loan, there is now need to show loan information
function deleteLoanInformation(){
    const loanRow = document.getElementById("new-loan-row");
    const repayButton = document.getElementById("repay-button");
    loanRow.remove();    // we delete the loan row
    repayButton.remove();    // we delete the repay button from work box
}

// another special function, we call if we have negative laon
export function negativeLoan(currentLoanAmount,currentBalanceAmount){
    let negativeLoanAmount = 0 - currentLoanAmount;    // we calculate the extra money
    currentBalanceAmount += negativeLoanAmount;    // we add them in balance
    deleteLoanInformation();    // we call the above special function
    return currentBalanceAmount;    // we return the new balance.
}