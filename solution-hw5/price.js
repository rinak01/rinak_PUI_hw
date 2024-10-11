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
  const glazingPrice = parseFloat(document.getElementById('glazing').value);
  const packSize = parseInt(document.getElementById('packSize').value);

  const totalPrice = (basePrice + glazingPrice) * packSize;
  document.getElementById('total-price').textContent = `Total Price: $${totalPrice.toFixed(2)}`;
}


function addToCart() {
  const glazing = document.getElementById('glazing').value;
  const packSize = document.getElementById('packSize').value;

  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  const newRoll = {
    type: 'Original Cinnamon Roll',
    glazing: glazing,
    size: packSize,
    basePrice: basePrice,
    price: parseFloat(document.getElementById('total-price').textContent.replace('Total Price: $', '')),
    image: '../assets/products/original-cinnamon-roll.jpg'
  };

  cart.push(newRoll);
  localStorage.setItem('cart', JSON.stringify(cart));

  alert('Item added to cart!');
}