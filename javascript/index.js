/*
    all the imported function from the files
*/
import { goToWork,transferMoneyWorkToBalance,repayAllSomeLoan } from "./work.js";
import { getALoan } from "./balance.js";
import { buyLaptop } from "./laptops.js";
/*
    getElementById() returns an Element object representing 
    the element whose id property matches the specified string
*/
const workAmount = document.getElementById("work-amount");  // element for the td which shows the amount of work
const work = document.getElementById("work");   // element for the work button
const balanceAmount = document.getElementById("balance");   // element for the td which shows the amount of balance
const bank = document.getElementById("bank");   // element for the bank button
const loan = document.getElementById("loan");   // element for the get a loan button
let loanAmount = document.getElementById("loan-amount");    // element for the td which shows the amount of loan
let repayLoan = document.getElementById("repay-button");    // element for the button repay loan
let buyNowLaptop = document.getElementById("buy-now-laptop");   // element for the button BUY NOW

let currentLoanAmount;  // initialize the current loan amount
if (loanAmount == null){    // if we dont have any loan, the element is null
    currentLoanAmount = 0;  // so we dont have loan amount
}else{
    currentLoanAmount = parseInt(loanAmount.innerText.split(" ")[0]);   // if we have a loan we only get the amount(the integer)
}

/*
    With the .innerText we get the string from workAmount Element,
    then with .split(" ") we separate the string into an array of substrings 
    in order to get the first substring which is the amount we want but 
    is a string. For that case we use parseInt to transfer it to an integer 
    and store it to the currentWorkAmount.
*/
let currentWorkAmount = parseInt(workAmount.innerText.split(" ")[0]);
/*
    With the .innerText we get the string from balanceAmount Element,
    then with .split(" ") we separate the string into an array of substrings 
    in order to get the first substring which is the amount we want but 
    is a string. For that case we use parseInt to transfer it to an integer 
    and store it to the currentBalanceAmount.
*/
let currentBalanceAmount = parseInt(balanceAmount.innerText.split(" ")[0]);

/* 
    the above function was taken from this link:
    https://www.educative.io/answers/how-to-read-a-json-file-from-a-url-in-javascript
*/    
// loadJSON method to open the JSON file.
function loadJSON(path, success, error){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
            success(JSON.parse(xhr.responseText));
            }
            else {
            error(xhr);
            }
        }
    };
    xhr.open('GET', path, true);
    xhr.send();
}

let dropDownOptions = document.getElementById("laptops-dropdown");  // element for the dropdown
let modelOfLaptop = document.getElementById("model-of-laptop"); // element for the title-model laptop
let priceOfLaptop = document.getElementById("price-of-laptop"); // element for the <p> the price of the laptop
let price = parseInt(priceOfLaptop.innerText.split(" ")[0]);    // getting the price of the laptop
let description = document.getElementById("description");   // element for the <p> description of the laptop
let specs = document.getElementById("specs");   // element for the specs of the laptop
let pcPicture = document.getElementById("computer-picture");    // element for the <img>

function myData(Data)
{
    for(let i=0; i<Data.length; i++)    // for every pc we have in the json data
    {
        let option = document.createElement("option");  // we create a new option
        let text = document.createTextNode(`${Data[i].title}`); // we create a text node given the title from the data
        option.appendChild(text);   // append the text to the option
        dropDownOptions.appendChild(option);    // append the option with the text to the dropdown
    }
    // from default our app shows the informatoin from the first pc or laptop from json data
    pcPicture.src = `https://hickory-quilled-actress.glitch.me/${Data[0].image}`;   // we give the img the proper src
    pcPicture.alt = `Data[0].title`    // adding alt in the image
    modelOfLaptop.innerText = dropDownOptions.options[dropDownOptions.selectedIndex].text;  // the proper title from 
                                                                                            //the selected default option from dropdown
    description.innerText = `${Data[0].description}`;   // the proper description
    price = Data[0].price;
    priceOfLaptop.innerText = `${price} Kr.`;   // the proper price
    let str =``;    // initialize a string
    for(let i=0; i<(Data[0].specs).length; i++){    // for every spec from the first pc we get every string
        str += `-${Data[0].specs[i]}\n`;    // and add it with a new line in the str string
    }
    specs.innerText = str;    // finally we get the specs 
    
    // if we change the option in the dropdown we must change the price, the title, the description and the specs 
    dropDownOptions.addEventListener('change',() => 
    {
        let model = dropDownOptions.options[dropDownOptions.selectedIndex].text;    // the choice after the selection
        modelOfLaptop.innerText = model;    // we show the model
        for(let i=0; i<Data.length; i++){   // we search all th e data
            if(Data[i].title == model){    // to find the specific model
                pcPicture.src = `https://hickory-quilled-actress.glitch.me/${Data[i].image}`;   // we change the src for the img
                pcPicture.alt = `Data[i].title`    // adding alt to the picture
                description.innerText = `${Data[i].description}`;   // we change the description
                price = Data[i].price;  // we get the price from the data
                priceOfLaptop.innerText = `${price} Kr.`;   // we change the price
                let str =``;    // initialize a string
                for(let j=0; j<(Data[i].specs).length; j++){    // for every spec 
                    str += `-${Data[i].specs[j]}\n`;    // we append a new line and add it to the string
                }
                specs.innerText = str;  // we show the string 
            }      
        }
    });
}
// we call our loadJSON function
loadJSON("https://hickory-quilled-actress.glitch.me/computers",myData,'jsonp');

/*
    The addEventListener() method of the EventTarget interface 
    sets up a function that will be called 
    whenever the specified event is delivered to the target.
*/
/*    
    In our case for the work element when we press the button Work
    we call the function goToWork to increase the amount by 100.
*/
work.addEventListener("click",() =>
    {
       currentWorkAmount = goToWork(currentWorkAmount,workAmount);
    });

/*    
    when we press the Bank button we transfer some of the money 
    to the balance and some goes to pay the outstanding Loan amount. 
*/
bank.addEventListener("click",() =>
    {   // we call the transferMoneyWorkToBalance function
        let workReturns = transferMoneyWorkToBalance(currentLoanAmount,currentWorkAmount,currentBalanceAmount
        ,loanAmount,balanceAmount,workAmount);
        
        currentLoanAmount = workReturns[0];    // we get back the loan amount after the transfer
        currentWorkAmount = workReturns[1];    // we get back the work amount after the transfer
        currentBalanceAmount= workReturns[2];    // we get back the balance amount after the transfer
    });
/*
    When we press the Loan button we get a loan and calling the 
    function GetALoan and also we are able to press the button Repay Loan
    and calling the function repayAllSomeLoan.
*/
loan.addEventListener("click",() =>
    {   // we call the getALoan function
        let balanceReturns= getALoan(currentLoanAmount,currentBalanceAmount,loanAmount,balanceAmount,repayLoan);

        loanAmount = balanceReturns[0];
        currentLoanAmount = balanceReturns[1];
        repayLoan = balanceReturns[2];
        currentBalanceAmount = balanceReturns[3];
        if(repayLoan != null)   // if we actually have a loan
        {
            repayLoan.addEventListener("click",() =>
            {   // we call the repayAllSomeLoan function in order to repay all or some amount of the amount of the loan
                let repayAllSomeLoanReturns = repayAllSomeLoan(currentLoanAmount,currentWorkAmount,currentBalanceAmount,
                    loanAmount,workAmount,balanceAmount);
                    currentLoanAmount = repayAllSomeLoanReturns[0]; // we get back the loan amount after the transfer
                    currentWorkAmount = repayAllSomeLoanReturns[1]; // we get back the work amount after the transfer
                    currentBalanceAmount = repayAllSomeLoanReturns[2]; // we get back the balance amount after the transfer
            });
        }
    });
/*
    When we press the BUY NOW button we buy the laptop
    and calling the function buyLaptop.
*/
buyNowLaptop.addEventListener("click",() =>
    {
        currentBalanceAmount = buyLaptop(price,currentBalanceAmount,balanceAmount);
    });
