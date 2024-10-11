class Roll {
    constructor(rollType, rollGlazing, packSize, rollPrice, imagePath) {
      this.type = rollType;
      this.glazing = rollGlazing;
      this.size = packSize;
      this.basePrice = rollPrice;
      this.image = imagePath;
  
      // Glazing price mapping
      this.glazingPrices = {
        "Sugar Milk": 0.50,
        "Vanilla Milk": 0.75,
        "Double Chocolate": 1.00,
        "Keep original": 0
      };
    }
  
    // Method to calculate the total price based on glazing and pack size
    calculatePrice() {
      const glazingPrice = this.glazingPrices[this.glazing] || 0; // Handle invalid glazing gracefully
      return (this.basePrice + glazingPrice) * this.size;
    }
  }
  
  // Load the cart from localStorage and ensure we create Roll instances
  let cart = (JSON.parse(localStorage.getItem('cart')) || []).map(item => 
    new Roll(item.type, item.glazing, item.size, item.basePrice, item.image)
  );
  
  // Save the cart to localStorage
  function saveCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
  }
  
  // Update the total price in the cart
  function updateTotalPrice() {
    let totalPrice = 0;
    for (const roll of cart) {
      totalPrice += roll.calculatePrice();
    }
    document.getElementById("total-price").textContent = `Total Price: $${totalPrice.toFixed(2)}`;
  }
  
  // Function to display cart items in the UI
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
          <img src="${roll.image}" alt="${roll.type}" width="150" height="auto">
          <div class="cart-details">
            <p>Type: ${roll.type}</p>
            <p>Glazing: ${roll.glazing}</p>
            <label for="packSize-${index}">Pack Size: </label>
            <select id="packSize-${index}" data-index="${index}">
              <option value="1" ${roll.size == 1 ? "selected" : ""}>1</option>
              <option value="3" ${roll.size == 3 ? "selected" : ""}>3</option>
              <option value="6" ${roll.size == 6 ? "selected" : ""}>6</option>
              <option value="12" ${roll.size == 12 ? "selected" : ""}>12</option>
            </select>
            <p>Price: $<span id="price-${index}">${roll.calculatePrice().toFixed(2)}</span></p>
            <button class="remove-item" data-index="${index}">Remove</button>
          </div>
        `;
  
        cartItemsContainer.appendChild(rollDiv);
      });
    }
  
    // Attach event listeners for removing items
    document.querySelectorAll('.remove-item').forEach(button => {
      button.addEventListener('click', (event) => {
        const index = event.target.getAttribute('data-index');
        removeFromCart(index);
      });
    });
  
    // Attach event listeners for changing pack size
    document.querySelectorAll('select[id^="packSize-"]').forEach(select => {
      select.addEventListener('change', (event) => {
        const index = event.target.getAttribute('data-index');
        updateCartItemPackSize(index, event.target.value);
      });
    });
  
    updateTotalPrice(); // Update total price after rendering
  }
  
  // Function to update pack size in cart and re-calculate price
  function updateCartItemPackSize(index, newSize) {
    cart[index].size = parseInt(newSize); // Update pack size
    document.getElementById(`price-${index}`).textContent = cart[index].calculatePrice().toFixed(2); // Update price for this item
    saveCartToLocalStorage(); // Save the updated cart
    updateTotalPrice(); // Update the total price
  }
  
  // Remove item from the cart
  function removeFromCart(index) {
    cart.splice(index, 1); // Remove item from cart array
    saveCartToLocalStorage(); // Save updated cart to localStorage
    displayCartItems(); // Re-render cart
  }
  
  // Display the cart when the page loads
  window.onload = displayCartItems;
  