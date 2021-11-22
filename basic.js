/*------------------Problem 1 seerToMon Function Start----------------*/
function seerToMon(seer) {
    // When Input is a Positive Number.
    if (0 < seer) {
        let mon = seer / 40;
        return mon;
    }
    // When Input is a String.
    else if (typeof seer === "string") {
        return ("Invalid! Input A Number");
    }
    // When Input is a Negative Number.
    else if (seer <= 0) {
        return ("Invalid! Input A Positive Number");
    }
    // When Input has a Problem.
    else {
        return "Invalid! Input has a Problem";
    }
}
/*------------------Problem 1 seerToMon Function End----------------*/

// Problem 1 Checking Console
/*---------------------------------
let monconvert = seerToMon(220);
console.log(monconvert);
-----------------------------------*/

/*----------- Problem 2 totalSales Function Start-------------*/
function totalSales(shirtQuantity, pantQuantity, shoeQuantity) {
    const shirtPrice = 100;
    const pantPrice = 200;
    const shoePrice = 500;

    let totalshirtPrice = shirtPrice * shirtQuantity;
    let totalpantPrice = pantPrice * pantQuantity;
    let totalshoePrice = shoePrice * shoeQuantity;
    let shopTotal = totalshirtPrice + totalpantPrice + totalshoePrice;
    return shopTotal;
}
/*----------- Problem 2 totalSales Function End-------------*/

// Problem 2 Checking Console
/*---------------------------------------
let totalPrice = totalSales(2, 3, 4);
console.log(totalPrice);
----------------------------------------*/

/*----------- Problem 3 deliveryCost Function Start----------- */
function deliveryCost(orderQuantity) {
    const deliveryPrice100 = 100;
    const deliveryPrice200 = 80;
    const deliveryPriceUpto200 = 50;
    // If not a integer.
    if (typeof orderQuantity != "number") {
        return "Invalid Character! Please input a Number.";
    }
    // If order is less than or equl zero 
    else if (orderQuantity <= 0) {
        return "Invalid Number! Please Order At least One Product.";
    }
    // Main Logic Part
    if (orderQuantity <= 100) {
        let under100 = orderQuantity * deliveryPrice100;
        return under100;
    }else if (orderQuantity <= 200) {
        let first100 = 100 * deliveryPrice100;
        let restProduct = orderQuantity - 100;
        let under200 = restProduct * deliveryPrice200;
        let totalPrice = first100 + under200;
        return totalPrice;
    }else {
        let first100 = 100 * deliveryPrice100;
        let first200 = 100 * deliveryPrice200;
        let restProduct = orderQuantity - 200;
        let upto200 = restProduct * deliveryPriceUpto200;
        let totalPrice = first100 + first200 + upto200;
        return totalPrice;
    }
}
/*----------- Problem 3 deliveryCost Function End----------- */

// Problem 3 Checking Console.
/*-----------------------------------------
console.log(deliveryCost(100));
console.log(deliveryCost(101));
console.log(deliveryCost(200));
console.log(deliveryCost(201));
console.log(deliveryCost(0));
console.log(deliveryCost(-10));
console.log(deliveryCost("friends"));
---------------------------------------------*/

/*------------ Problem 4 perfectFriend Function Start------------*/
function perfectFriend(names) {
    for (let name of names) {
        if (name.length === 5) {
            return name;
        }
    }
    return "There haven't Any Name in Five Letters.";
}
/*------------- Problem 4 perfectFriend Function End-------------*/

// Problem 4 Checking Console.
/*--------------------------
let friendsName = ["Arif", "Munnal", "Himell", "Shakib", "Ruhull", "Armani"]
let fiveletterFriend = perfectFriend(friendsName);
console.log(fiveletterFriend);
------------------------------*/
/*---- ---- ---- ---- ---- ---- ---- ---- ----
           Assignment Four Finished.
 ``Thank You Programming-Hero Examiner``
            Have A Nice Day.
---- ---- ---- ---- ---- ---- ---- ---- ---- */