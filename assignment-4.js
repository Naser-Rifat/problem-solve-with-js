

// ----------Problem-1--------------//
function seerToMon(seer) {

    // error checking
    if (seer < 0) {
        return ' value must be positive number!';
    }
    else if (typeof (seer) == 'string') {
        return ' value must be a number!';

    }



    else {

        //convert seer to mon
        const Mon = seer / 40; //  40 (seer) =  1 (Mon) 
        return Mon;
    }

}
//parameter passing 
const seer = 40;
const mon = seerToMon(seer);

//output 
console.log(mon);





// ----------Problem-2------------//

function totalSales(shirtQuantity, pantQuantity, shoesQuantity) {

    // error checking
    if (typeof (shirtQuantity, pantQuantity, shirtQuantity) == 'string') {
        return ' value must be  a number!';

    }

    else if (shirtQuantity < 0 || pantQuantity < 0 || shirtQuantity < 0) {

        return ' value must be a positive number!';
    }



    else {

        // Fixed value  
        const shirtPrice = 100;
        const pantPrice = 200;
        const shoesPrice = 500;

        //individual sales count
        const totalShirtSales = shirtPrice * shirtQuantity;
        const totalPantSales = pantPrice * pantQuantity;
        const totalShoesSales = shoesPrice * shoesQuantity;

        //Total Seles Count
        const totalSalesCount = totalShirtSales + totalPantSales + totalShoesSales;
        return totalSalesCount;
    }


}
//parameter passing 
const shirtQty = 1;
const pantQty = 2;
const shoesQty = 3;
const sales = totalSales(shirtQty, pantQty, shoesQty);

//output
console.log(sales);





// ----------Problem-3-----------//

function deliveryCost(tShirtQty) {

    // error checking
    if (tShirtQty < 0) {
        return ' value must be a positive number!';
    }
    else if (typeof (tShirtQty) == 'string') {
        return ' value must be a number!';

    }
    else {
        //Fixed value
        const deliveryCostWithin100 = 100;
        const deliveryCostUpTo200 = 80;
        const deliveryCostOver200 = 50;

        //conditional check
        if (tShirtQty <= 100) {
            const totalDeliveryCost = 100 * tShirtQty;
            return totalDeliveryCost;

        }

        else if (tShirtQty <= 200) {
            //Total delivery cost first 100 
            const costFirst100Tshirt = deliveryCostWithin100 * 100;

            //T-shirt left over than 100
            const tshirt2nd = tShirtQty - 100;


            //Count total delivery cost
            const deliveryCostOfTshirt2nd = tshirt2nd * deliveryCostUpTo200;
            const allTotalDeliveryCost2nd = deliveryCostOfTshirt2nd + costFirst100Tshirt;
            return allTotalDeliveryCost2nd;
        }

        else {
            //Total delivery cost first 200 
            const costFirst100Tshirt = deliveryCostWithin100 * 100;
            const costSecond100Tshirt = deliveryCostUpTo200 * 100;

            // T-shirt left over than 200
            const tShirt3rd = tShirtQty - 200;

            //Count Total delivery cost
            const deliveryCostOfTshirt3rd = tShirt3rd * deliveryCostOver200;
            const allTotalDeliveryCost3rd = deliveryCostOfTshirt3rd + costFirst100Tshirt + costSecond100Tshirt;
            return allTotalDeliveryCost3rd;

        }
    }


}
//parameter passing
const TshirtQuantity = 100;
const totalCost = deliveryCost(TshirtQuantity);

//output 
console.log(totalCost);






// ----------Problem-4----------//

function perfectFriend(friends) {


    //error checking
    for (const friend of friends) {
        if (typeof (friend) == 'number') {

            return "all name must be string"
        }
    }


    //check perfectfriend
    for (const friend of friends) {

        if (friend.length == 5) {
            return friend;
        }

    }
    return 'you should add five char string!';



}

//parameter passing
const friends = ['siam', 'rafi', 'sabbir', 'shaiful', 'sihab', 'afnan'];
const myFriend = perfectFriend(friends);

//output
console.log(myFriend);




