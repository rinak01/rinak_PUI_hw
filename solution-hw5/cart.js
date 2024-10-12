class Roll {
  constructor(rollType, rollGlazing, packSize, rollPrice, imagePath) {
    this.type = rollType;
    this.glazing = rollGlazing;
    this.size = packSize;
    this.basePrice = rollPrice;
    this.imagePath = imagePath; 


    this.glazingPrices = {
      "Sugar Milk": 0.50,
      "Vanilla Milk": 0.75,
      "Double Chocolate": 1.00,
      "Keep Original": 0.00
    };
  }

  calculatePrice() {
    const glazingPrice = this.glazingPrices[this.glazing];
    return (this.basePrice + glazingPrice) * this.size;
  }
}

let cart = [
  new Roll("Original", "Sugar Milk", 1, 2.49, "../assets/products/original-cinnamon-roll.jpg"),
  new Roll("Walnut", "Vanilla Milk", 12, 3.99, "../assets/products/walnut-cinnamon-roll.jpg"),
  new Roll("Raisin", "Sugar Milk", 3, 2.99, "../assets/products/raisin-cinnamon-roll.jpg"),
  new Roll("Apple", "Keep Original", 3, 3.49, "../assets/products/apple-cinnamon-roll.jpg")
];

function updateTotalPrice() {
  let totalPrice = 0;
  for (const roll of cart) {
    totalPrice += roll.calculatePrice();
  }
  document.getElementById("total-price").textContent = `Total Price: $${totalPrice.toFixed(2)}`;
}

function displayCartItems() {
  const cartItemsContainer = document.getElementById('cart-items');
  cartItemsContainer.innerHTML = '';

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = '<p>Your cart is empty</p>';
  } else {
    cart.forEach((roll, index) => {

      const rollDiv = document.createElement('div');
      rollDiv.className = 'cart-item';


      rollDiv.innerHTML = `
        <img src="${roll.imagePath}" alt="${roll.type}" width="150" height="auto">
      
        <div class="cart-details">
          <p>Type: ${roll.type}</p>
          <p>Glazing: ${roll.glazing}</p>
          <p>Pack Size: ${roll.size}</p>
          <p>Price: $${roll.calculatePrice().toFixed(2)}</p>

          <button onclick="removeFromCart(${index})">Remove </button>
        </div>
      `;

      cartItemsContainer.appendChild(rollDiv);
    });
  }

  updateTotalPrice();
}


function removeFromCart(index) {
  console.log("removed from cart")
  cart.splice(index, 1);
  
  displayCartItems();

}

window.onload = displayCartItems;
