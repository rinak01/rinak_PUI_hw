// Define the glazing options and their additional prices
const glazingOptions = {
    "Keep original": 0.00,
    "Sugar milk": 0.00,
    "Vanilla milk": 0.50,
    "Double chocolate": 1.50
};

// Define the pack size options and their multipliers
const packSizeOptions = {
    "1": 1,
    "3": 3,
    "6": 6, 
    "12": 12
};

// Base price for the cinnamon roll
const basePrice = 2.49;

// Populate glazing options dropdown
const glazingDropdown = document.getElementById("glazingOptions");
for (let glazing in glazingOptions) {
    let option = document.createElement("option");
    option.text = glazing;
    option.value = glazingOptions[glazing]; 
    glazingDropdown.add(option);
}

// Populate pack size options dropdown
const packSizeDropdown = document.getElementById("packSizeOptions");
for (let size in packSizeOptions) {
    let option = document.createElement("option");
    option.text = size;
    option.value = packSizeOptions[size]; 
    packSizeDropdown.add(option);
}

// Global variables to store selected options
let selectedGlazingPrice = 0;
let selectedPackSize = 1;

// Function to handle glazing change
function glazingChange(element) {
    selectedGlazingPrice = parseFloat(element.value);
    updatePrice(); // Recalculate price when glazing is changed
}

// Function to handle pack size change
function packSizeChange(element) {
    selectedPackSize = parseFloat(element.value);
    updatePrice(); // Recalculate price when pack size is changed
}

// Function to compute and update the total price dynamically
function updatePrice() {
    const totalPrice = (basePrice + selectedGlazingPrice) * selectedPackSize;
    document.getElementById("totalPrice").innerText = `Price: $${totalPrice.toFixed(2)}`;
}

// Define the Roll class as per the HW5 assignment
class Roll {
  constructor(rollType, rollGlazing, packSize, rollPrice) {
    this.type = rollType;
    this.glazing = rollGlazing;
    this.size = packSize;
    this.basePrice = rollPrice;
  }

  // Calculate total price based on glazing and pack size
  calculatePrice() {
    return (this.basePrice + glazingOptions[this.glazing]) * packSizeOptions[this.size];
  }
}

// Function to add items to the cart
function addToCart(productName) {
    const glazing = glazingDropdown.options[glazingDropdown.selectedIndex].text;
    const packSize = packSizeDropdown.options[packSizeDropdown.selectedIndex].text;
    const price = (basePrice + selectedGlazingPrice) * selectedPackSize; // Calculate the price

    // Create a new Roll object
    const newRoll = new Roll(productName, glazing, packSize, basePrice);

    // Add the roll to the cart array
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(newRoll);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Item added to cart!');
}

// Function to display items in the cart on the cart page
function displayCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cartItemsContainer.innerHTML = ''; // Clear previous content

    cart.forEach((roll, index) => {
        const rollDiv = document.createElement('div');
        rollDiv.className = 'cart-item';
        rollDiv.innerHTML = `
            <img src="../assets/products/${roll.type.toLowerCase()}-cinnamon-roll.jpg" alt="${roll.type}" width="150">
            <div>
                <p>Type: ${roll.type}</p>
                <p>Glazing: ${roll.glazing}</p>
                <p>Pack Size: ${roll.size}</p>
                <p>Price: $${roll.calculatePrice().toFixed(2)}</p>
                <button onclick="removeFromCart(${index})">Remove</button>
            </div>
        `;
        cartItemsContainer.appendChild(rollDiv);
    });
    updateTotalPrice(); // Update the total price on the cart page
}

// Function to remove an item from the cart
function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1); // Remove the item at the given index
    localStorage.setItem('cart', JSON.stringify(cart)); // Save updated cart
    displayCartItems(); // Re-display the cart items
}

// Function to update the total price in the cart
function updateTotalPrice() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let totalPrice = 0;

    cart.forEach(roll => {
        totalPrice += roll.calculatePrice(); // Use the calculatePrice() method from Roll class
    });

    document.getElementById('total-price').innerText = `Total Price: $${totalPrice.toFixed(2)}`;
}

// Event listeners to dynamically update the price when user changes selections
glazingDropdown.addEventListener('change', function() {
    glazingChange(this);
});

packSizeDropdown.addEventListener('change', function() {
    packSizeChange(this);
});
