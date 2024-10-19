const glazingOptions = {
    "Keep Original": 0.00,
    "Sugar Milk": 0.00,
    "Vanilla Milk": 0.50,
    "Double Chocolate": 1.50
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
  

    const totalPrice = (basePrice + glazingPrice) * packSize;
  

    document.getElementById('totalPrice').textContent = `Price: $${totalPrice.toFixed(2)}`;
  }
  

  function addToCart(rollType) {
    const glazing = document.getElementById('glazingOptions').value;
    const packSize = document.getElementById('packSizeOptions').value;
    const price = parseFloat(document.getElementById('totalPrice').textContent.replace('Price: $', ''));
  
    
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