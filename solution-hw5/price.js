const glazingOptions = {
    "Keep original": 0.00,
    "Sugar milk": 0.00,
    "Vanilla milk": 0.50,
    "Double chocolate": 1.50
};

const packSizeOptions = {
    "1": 1,
    "3": 3,
    "6": 6, 
    "12": 12
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

// Function to compute and update the total price dynamically
function updatePrice() {
    const totalPrice = (basePrice + selectedGlazingPrice) * selectedPackSize;
    document.getElementById("totalPrice").innerText = `Price: $${totalPrice.toFixed(2)}`;
}

class Roll {
  constructor(rollType, rollGlazing, packSize, rollPrice) {
    this.type = rollType;
    this.glazing = rollGlazing;
    this.size = packSize;
    this.basePrice = rollPrice;
  }

  calculatePrice() {
    return (this.basePrice + glazingOptions[this.glazing]) * packSizeOptions[this.size];
  }
}

function addToCart(productName) {
    const glazing = glazingDropdown.options[glazingDropdown.selectedIndex].text;
    const packSize = packSizeDropdown.options[packSizeDropdown.selectedIndex].text;
    const price = (basePrice + selectedGlazingPrice) * selectedPackSize; 

    const newRoll = new Roll(productName, glazing, packSize, basePrice);


    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(newRoll);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Item added to cart!');
}


function displayCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cartItemsContainer.innerHTML = ''; 

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
    updateTotalPrice(); 
}


function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1); 
    localStorage.setItem('cart', JSON.stringify(cart)); 
    displayCartItems(); 
}


function updateTotalPrice() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let totalPrice = 0;

    cart.forEach(roll => {
        totalPrice += roll.calculatePrice(); 
    });

    document.getElementById('total-price').innerText = `Total Price: $${totalPrice.toFixed(2)}`;
}


glazingDropdown.addEventListener('change', function() {
    glazingChange(this);
});

packSizeDropdown.addEventListener('change', function() {
    packSizeChange(this);
});
