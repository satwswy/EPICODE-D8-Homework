// Exercise 1

let exercise1 = [ 1 , 2 , 3 , 4 , 5]
//console.log(exercise1)

// Exercise 2

let exercise2 = {
    name : "myname",
    surname : "mysurname",
    email : "myemail",
    age : 30
}
//console.log(exercise2)

//Exercise 3

exercise2.hasDrivingLicense = true
//console.log(exercise2)

//Exercise 4

delete exercise2.age 
//console.log(exercise2)

//Exercise 5

let exercise5 = {
    name : 'anothername',
    surname : 'anothersurname',
    email : 'anotheremail',
}
let hasTheSameEmail = exercise2.email === exercise5.email
//console.log(exercise5)
//console.log("\n-------Do They Have The Same Email?----------\n")
//console.log(hasTheSameEmail)

//Exercise 6

let totalShoppingCart = 30;
let shippingCostZero = 0;
let shippingCostTen = 10;
let totalUsersCost

/*if (totalShoppingCart >= 50) { totalUsersCost = totalShoppingCart + shippingCostZero
    }
else if (totalShoppingCart >=0 && totalShoppingCart <=50) {
    totalUsersCost = totalShoppingCart + shippingCostTen
}    
else {
    totalUsersCost = "Please insert valid number"
}
*/
//console.log("\n--------THIS IS THE USERS TOTAL COST-----------\n")
//console.log(totalUsersCost)

//Exercise 7

let totalShoppingCartDiscount = totalShoppingCart * 0.2 + totalShoppingCart
//console.log(totalShoppingCartDiscount)
let isBlackFriday = false

if (totalShoppingCartDiscount >= 50 && isBlackFriday === true) { totalUsersCost = totalShoppingCartDiscount + shippingCostZero
}
else if (totalShoppingCartDiscount >=0 && totalShoppingCartDiscount <=50 && isBlackFriday === true) {
    totalUsersCost = totalShoppingCartDiscount + shippingCostTen
}    

else if (totalShoppingCart >= 50 && isBlackFriday === false) { totalUsersCost = totalShoppingCart + shippingCostZero
}
else if (totalShoppingCart >=0 && totalShoppingCart <=50 && isBlackFriday === false) {
totalUsersCost = totalShoppingCart + shippingCostTen}   
else {
    totalUsersCost = "Please insert valid number"
    
}
console.log("\n--------THIS IS THE USERS TOTAL COST--------------\n")
console.log(totalUsersCost)