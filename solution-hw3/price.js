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

// Populate glazing options
const glazingDropdown = document.getElementById("glazingOptions");
for (let glazing in glazingOptions) {
    let option = document.createElement("option");
    option.text = glazing;
    option.value = glazingOptions[glazing]; 
    glazingDropdown.add(option);
}

// Populate pack size options
const packSizeDropdown = document.getElementById("packSizeOptions");
for (let size in packSizeOptions) {
    let option = document.createElement("option");
    option.text = size;
    option.value = packSizeOptions[size]; 
    packSizeDropdown.add(option);
}
// Global variables to store the selected options
let selectedGlazingPrice = 0;
let selectedPackSize = 1;

// Function to handle glazing change
function glazingChange(element) {
    selectedGlazingPrice = parseFloat(element.value);
    updatePrice();
}

// Function to handle pack size change
function packSizeChange(element) {
    selectedPackSize = parseFloat(element.value);
    updatePrice();
}

// Function to compute and update the price
function updatePrice() {
    const totalPrice = (basePrice + selectedGlazingPrice) * selectedPackSize;
    document.getElementById("totalPrice").innerText = `Price: $${totalPrice.toFixed(2)}`;
}
