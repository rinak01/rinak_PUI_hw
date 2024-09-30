// Base price of the cinnamon roll
const basePrice = 2.49;

// Glazing options with price adaptations
const glazingOptions = [
  { name: "Keep Original", priceAdaptation: 0.00 },
  { name: "Sugar Milk", priceAdaptation: 0.00 },
  { name: "Vanilla Milk", priceAdaptation: 0.50 },
  { name: "Double Chocolate", priceAdaptation: 1.50 },
];

// Pack size options with multipliers
const packSizeOptions = [
  { size: 1, multiplier: 1 },
  { size: 3, multiplier: 3 },
  { size: 6, multiplier: 5 },
  { size: 12, multiplier: 10 },
];

// Populate glazing options dropdown
function populateGlazingOptions() {
    const glazingSelect = document.getElementById("glazingOptions");
    glazingOptions.forEach((option, index) => {
      const newOption = document.createElement("option");
      newOption.value = index; // Use the index to identify the option
      newOption.text = option.name;
      glazingSelect.add(newOption);
    });
  }
  
  // Populate pack size dropdown
  function populatePackSizeOptions() {
    const packSizeSelect = document.getElementById("packSize");
    packSizeOptions.forEach((option, index) => {
      const newOption = document.createElement("option");
      newOption.value = index; // Use the index to identify the option
      newOption.text = `${option.size} pack`;
      packSizeSelect.add(newOption);
    });
  }
  
  // Call the functions to populate the dropdowns when the page loads
  window.onload = function () {
    populateGlazingOptions();
    populatePackSizeOptions();
  };

  // Populate glazing options dropdown
function populateGlazingOptions() {
    const glazingSelect = document.getElementById("glazingOptions");
    glazingOptions.forEach((option, index) => {
      const newOption = document.createElement("option");
      newOption.value = index; // Use the index to identify the option
      newOption.text = option.name;
      glazingSelect.add(newOption);
    });
  }
  
  // Populate pack size dropdown
  function populatePackSizeOptions() {
    const packSizeSelect = document.getElementById("packSize");
    packSizeOptions.forEach((option, index) => {
      const newOption = document.createElement("option");
      newOption.value = index; // Use the index to identify the option
      newOption.text = `${option.size} pack`;
      packSizeSelect.add(newOption);
    });
  }
  
  // Call the functions to populate the dropdowns when the page loads
  window.onload = function () {
    populateGlazingOptions();
    populatePackSizeOptions();
  };
  
  // Base price of the cinnamon roll
const basePrice = 2.49;

// Glazing options with price adaptations
const glazingOptions = [
  { name: "Keep Original", priceAdaptation: 0.00 },
  { name: "Sugar Milk", priceAdaptation: 0.00 },
  { name: "Vanilla Milk", priceAdaptation: 0.50 },
  { name: "Double Chocolate", priceAdaptation: 1.50 },
];

// Pack size options with multipliers
const packSizeOptions = [
  { size: 1, multiplier: 1 },
  { size: 3, multiplier: 3 },
  { size: 6, multiplier: 5 },
  { size: 12, multiplier: 10 },
];

let selectedGlazingPrice = 0; // Default glazing price
let selectedPackMultiplier = 1; // Default pack size multiplier

// Populate glazing options dropdown
function populateGlazingOptions() {
  const glazingSelect = document.getElementById("glazingOptions");
  glazingOptions.forEach((option, index) => {
    const newOption = document.createElement("option");
    newOption.value = index;
    newOption.text = option.name;
    glazingSelect.add(newOption);
  });
}

// Populate pack size dropdown
function populatePackSizeOptions() {
  const packSizeSelect = document.getElementById("packSize");
  packSizeOptions.forEach((option, index) => {
    const newOption = document.createElement("option");
    newOption.value = index;
    newOption.text = `${option.size} pack`;
    packSizeSelect.add(newOption);
  });
}

// Handle glazing selection change
function glazingChange(element) {
  const selectedGlazingIndex = element.value;
  selectedGlazingPrice = glazingOptions[selectedGlazingIndex].priceAdaptation;
  updatePrice();
}

// Handle pack size selection change
function packChange(element) {
  const selectedPackIndex = element.value;
  selectedPackMultiplier = packSizeOptions[selectedPackIndex].multiplier;
  updatePrice();
}

// Update price based on selected glazing and pack size
function updatePrice() {
  const finalPrice = (basePrice + selectedGlazingPrice) * selectedPackMultiplier;
  document.getElementById("price").textContent = `$${finalPrice.toFixed(2)}`;
}

// Initialize dropdowns and price on page load
window.onload = function () {
  populateGlazingOptions();
  populatePackSizeOptions();
};

// Base price of the cinnamon roll
const basePrice = 2.49;

// Glazing options with price adaptations
const glazingOptions = [
  { name: "Keep Original", priceAdaptation: 0.00 },
  { name: "Sugar Milk", priceAdaptation: 0.00 },
  { name: "Vanilla Milk", priceAdaptation: 0.50 },
  { name: "Double Chocolate", priceAdaptation: 1.50 },
];

// Pack size options with price multipliers
const packSizeOptions = [
  { size: 1, multiplier: 1 },
  { size: 3, multiplier: 3 },
  { size: 6, multiplier: 5 },
  { size: 12, multiplier: 10 },
];

// Populate glazing options dropdown
function populateGlazingOptions() {
    const glazingSelect = document.getElementById("glazingOptions");
    glazingOptions.forEach((option, index) => {
      const newOption = document.createElement("option");
      newOption.value = index;  // Store the index to reference the price adaptation
      newOption.text = option.name;
      glazingSelect.add(newOption);
    });
  }
  // Populate pack size dropdown
function populatePackSizeOptions() {
    const packSizeSelect = document.getElementById("packSize");
    packSizeOptions.forEach((option, index) => {
      const newOption = document.createElement("option");
      newOption.value = index;  // Store the index to reference the multiplier
      newOption.text = `${option.size} pack`;
      packSizeSelect.add(newOption);
    });
  }
  let selectedGlazingPrice = 0;  // Default to no extra price for glazing
let selectedPackMultiplier = 1;  // Default to a pack size of 1

function glazingChange(element) {
  const selectedGlazingIndex = element.value;
  selectedGlazingPrice = glazingOptions[selectedGlazingIndex].priceAdaptation;
  updatePrice();  // Call the function to update the price after selection changes
}

function packChange(element) {
    const selectedPackIndex = element.value;
    selectedPackMultiplier = packSizeOptions[selectedPackIndex].multiplier;
    updatePrice();  // Call the function to update the price after selection changes
  }

  function updatePrice() {
    // Calculate the final price using the base price, glazing price, and pack multiplier
    const finalPrice = (basePrice + selectedGlazingPrice) * selectedPackMultiplier;
  
    // Display the updated price, formatted to two decimal places
    document.getElementById("price").textContent = `$${finalPrice.toFixed(2)}`;
  }

  window.onload = function () {
    populateGlazingOptions();  // Populate the glazing options
    populatePackSizeOptions();  // Populate the pack size options
  };

// Base price of the cinnamon roll
const basePrice = 2.49;

// Glazing options with price adaptations
const glazingOptions = [
  { name: "Keep Original", priceAdaptation: 0.00 },
  { name: "Sugar Milk", priceAdaptation: 0.00 },
  { name: "Vanilla Milk", priceAdaptation: 0.50 },
  { name: "Double Chocolate", priceAdaptation: 1.50 },
];

// Pack size options with price multipliers
const packSizeOptions = [
  { size: 1, multiplier: 1 },
  { size: 3, multiplier: 3 },
  { size: 6, multiplier: 5 },
  { size: 12, multiplier: 10 },
];

let selectedGlazingPrice = 0;  // Default to no extra price for glazing
let selectedPackMultiplier = 1;  // Default to a pack size of 1

// Populate glazing options dropdown
function populateGlazingOptions() {
  const glazingSelect = document.getElementById("glazingOptions");
  glazingOptions.forEach((option, index) => {
    const newOption = document.createElement("option");
    newOption.value = index;  // Store the index to reference the price adaptation
    newOption.text = option.name;
    glazingSelect.add(newOption);
  });
}

// Populate pack size dropdown
function populatePackSizeOptions() {
  const packSizeSelect = document.getElementById("packSize");
  packSizeOptions.forEach((option, index) => {
    const newOption = document.createElement("option");
    newOption.value = index;  // Store the index to reference the multiplier
    newOption.text = `${option.size} pack`;
    packSizeSelect.add(newOption);
  });
}

// Handle glazing selection change
function glazingChange(element) {
  const selectedGlazingIndex = element.value;
  selectedGlazingPrice = glazingOptions[selectedGlazingIndex].priceAdaptation;
  updatePrice();  // Call the function to update the price after selection changes
}

// Handle pack size selection change
function packChange(element) {
  const selectedPackIndex = element.value;
  selectedPackMultiplier = packSizeOptions[selectedPackIndex].multiplier;
  updatePrice();  // Call the function to update the price after selection changes
}

// Update price based on selected glazing and pack size
function updatePrice() {
  const finalPrice = (basePrice + selectedGlazingPrice) * selectedPackMultiplier;
  document.getElementById("price").textContent = `$${finalPrice.toFixed(2)}`;
}

// Initialize dropdowns and price on page load
window.onload = function () {
  populateGlazingOptions();  // Populate the glazing options
  populatePackSizeOptions();  // Populate the pack size options
};

