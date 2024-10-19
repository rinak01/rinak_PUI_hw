function loadCart() {
  let storedCart = localStorage.getItem('cart');
  if (storedCart) {

    cart = JSON.parse(storedCart).map(roll => new Roll(roll.type, roll.glazing, roll.size, roll.basePrice, roll.imagePath));
  } else {
  
    cart = [];
  }
}

function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
}


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
  cart.splice(index, 1);
  saveCart();  
  displayCartItems();
}

window.onload = function() {
  loadCart();  
  displayCartItems();  
};
