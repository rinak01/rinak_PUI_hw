const glazingOptions = {
    "Keep original": 0.00,
    "Sugar milk": 0.00,
    "Vanilla milk": 0.50,
    "Double chocolate": 1.50
};

const packSizeOptions = {
    "1": 1,
    "3": 3,
    "6": 5,
    "12": 10
};

const basePrice = 2.49;

const glazingDropdown = document.getElementById("glazingOptions");
for (let glazing in glazingOptions) {
    let option = document.createElement("option");
    option.text = glazing;
    option.value = glazingOptions[glazing]; 
    glazingDropdown.add(option);
}


const packSizeDropdown = document.getElementById("packSizeOptions");
for (let size in packSizeOptions) {
    let option = document.createElement("option");
    option.text = size;
    option.value = packSizeOptions[size]; 
    packSizeDropdown.add(option);
}


let selectedGlazingPrice = 0;
let selectedPackSize = 1;


function glazingChange(element) {
    selectedGlazingPrice = parseFloat(element.value);
    updatePrice();
}


function packSizeChange(element) {
    selectedPackSize = parseFloat(element.value);
    updatePrice();
}


function updatePrice() {
    const totalPrice = (basePrice + selectedGlazingPrice) * selectedPackSize;
    document.getElementById("totalPrice").innerText = `Price: $${totalPrice.toFixed(2)}`;
}
