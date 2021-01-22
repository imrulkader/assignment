
//Task -1 # kilometerToMeter

function kilometerToMeter(kilometer) {
    var meter = kilometer / 0.001;                         //1 kilometer = 1000 meter. 
    return meter;
}
var meter = kilometerToMeter(10);
console.log(meter);

// Task-2 # budgetCalculation 

function budgetCalculator(watch, phone, laptop) {
    var watch = 5 * 50;                                     //  quantity 5 pcs X value $50
    var phone = 3 * 100;
    var laptop = 2 * 500;
    var result = watch + phone + laptop;
    return result;
}
var sum = budgetCalculator(250, 300, 1000);               // watch cost 250, phone cost 300, laptop cost 1000 
console.log(sum);

// Task-3 # hotelCost

function hotelCost(day) {
    var cost = 0;
    if (day <= 10) {
        cost = day * 100;
    } else if (day <= 20) {
        var firstStay = 10 * 100;                           //  First Stay = 10 days and cost $100 per day
        var remaining = day - 10;
        var SecondStay = remaining * 80;
        cost = firstStay + SecondStay;
    } else {
        var firstStay = 10 * 100;
        var SecondStay = 10 * 80;                           // Second Stay = 10 days and cost $ 80 per day
        var remaining = day - 20;
        var thirdStay = remaining * 50;                     // rest of the day cost $50 per day
        cost = firstStay + SecondStay + thirdStay;
    }
    return cost;
}
var totalCost = hotelCost(22);
console.log(totalCost);

// Task-4 # megaFriend

function megaFriend(array) {
    var extent = 0;
    var longest;
    for (var i = 0; i < array.length; i++) {                // This is the formula to get length of a word.  
        if (array[i].length > extent) {
            var extent = array[i].length;
            longest = array[i];
        }
    } return longest;
}
var array = ["Jasim", "Halima", "Jamshed", "Reazul", "Rajapakshe"];
var result = megaFriend(array);
console.log(result);