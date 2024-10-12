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

function updatePrice() {
    const glazingPrice = parseFloat(document.getElementById('glazingOptions').value);
    const packSize = parseInt(document.getElementById('packSizeOptions').value);
  
    // Calculate the total price
    const totalPrice = (basePrice + glazingPrice) * packSize;
  
    // Update the price in the HTML
    document.getElementById('totalPrice').textContent = `Price: $${totalPrice.toFixed(2)}`;
  }
  
  // Function to add the item to the cart
  function addToCart(rollType) {
    const glazing = document.getElementById('glazingOptions').value;
    const packSize = document.getElementById('packSizeOptions').value;
    const price = parseFloat(document.getElementById('totalPrice').textContent.replace('Price: $', ''));
  
    // Retrieve the existing cart from localStorage (or create a new cart if empty)
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
  

    const newRoll = {
      type: rollType,
      glazing: glazing,
      size: packSize,
      basePrice: basePrice,
      price: price,
      image: '../assets/products/original-cinnamon-roll.jpg' 
    };
  

    cart.push(newRoll);
  

    localStorage.setItem('cart', JSON.stringify(cart));
  

    alert('Item added to cart!');
  }