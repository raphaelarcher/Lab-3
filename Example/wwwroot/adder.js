let button = document.querySelector("#add");
button.onclick = function () {
    let answer = Number(document.querySelector("#op1").value) +
        Number(document.querySelector("#op2").value);
    document.querySelector("#answer").textContent = answer;
    return false;
};

// Gender selector - radio buttons
let selectGender = function () {
    let gender = document.querySelector("input[type=radio]:checked").value;
    document.querySelector("#selected").innerHTML = `Current selection: <b> ${gender} </b>`;
};

let selectGen = document.querySelector("#genderselect");
selectGen.onclick = selectGender;

// Car selector - dropdown list
let selectCar = function () {
    let car = document.querySelector("#cars").value;
    document.querySelector("#selectedcar").innerHTML = `Selected: ${cars[car].make} which costs $${cars[car].price}`;
};

let cars = [
    { make: "Volvo", price: 30000 },
    { make: "Subaru", price: 40000 },
    { make: "Mercedes", price: 50000 },
    { make: "Audi", price: 60000 }
];

let selection = document.querySelector("#cars");
selection.onchange = selectCar;

window.onload = function () {
    selectCar();
}