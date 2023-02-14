# KomputerWebApp
This web app is structured in two different folders and an index.html file.   

# index.html
This file has all the html for the web app. There are three main lets say parts.
The first one is the title of the web app.
The second is the boxes bank(Joe Banker),Work and Laptops.
The last one is all the information about the selected pc or laptop.

# Title
Its just a simple title.Nothing more nothing less!

# Boxes
The box bank mainly shows us the current amount we have in the bank. There is a choice(pressing the button get a loan) to actually get a loan from the bank. But be carefull! We can get a loan only if the amount we want is not greater than the double of the balance and if we dont have other loan.(We cant get two loans at the same time!). If the bank agrees to give the loan, we will see a new line with the loan amount in the box bank and a new button repay loan in the work box. Also the balance amount will be increased with the amount of the loan. 
In the work box we can actually win some money from working(pressing the work button we add 100 Kr. to the pay amount). With the bank button we have the choice to move the working amount to the bank. If we have a loan, 10% if them goes to the loan and the other 90% to the balance. With the repay loan button we have the choice all the working money to go only for the reduction of the loan. 
In the laptops box we have a drop down list to pick a laptop or a desktop. We can see a very briefly description of the product.

# Laptop information
In this section of the web app we can see more information about the selected pc from the laptops box and have the opportunity to buy it. To be more specific, we can see a picture of the laptop or the desktop, the specs for this machine and the price. Finally, we have, as mention before, the buttton to buy.

# CSS folder
This folder is organized in 5 CSS files. The balance.css is contains all the classes for the style of the bank-balance box, buylatops.css has the classes for the information of the laptop, laptops.css for the box laptops, work.css for the work box and finally the styles.css contains general classes and import all of the above css files.

# javascript folder
This folder has all the functions organized by js files.
For the functionality of bank buttons we have the balance.js, for the work the work.js and for the laptops box and information the laptops.js. The index.js imports all the functions from the above files and contain the function to get the data from the specific RESTful API that returns JSON data.