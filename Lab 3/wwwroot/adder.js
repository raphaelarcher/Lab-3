function getCustomerName() {
    var x = document.getElementById("customername").value;
    document.getElementById("submitt").innerHTML = `Customer Name: ${x}`;
}

//function doMath() {
//    var y = document.getElementById("quantity").value;
//    z = y * 
//    document.getElementById("submitt").innterHTML = `TOTAL: ${z}`
//}

// Drink selector - dropdown list
let selectDrink = function () {
    let drink = document.querySelector("#drinks").value;
    document.querySelector("#selecteddrink").innerHTML = `Selected: ${drinks[drink].make} @ $${drinks[drink].price}`;
};

let drinks = [
    { make: "Coffee", price: 3 },
    { make: "Tea", price: 2 },
    { make: "Wine", price: 8 },
    { make: "Beer", price: 5 }
];

let selection = document.querySelector("#drinks");
selection.onchange = selectDrink;

window.onload = function () {
    selectDrink();
}