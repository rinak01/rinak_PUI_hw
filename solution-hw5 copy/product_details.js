  function updatePrice() {
    let glazingPrice = parseFloat(document.getElementById("glazingOptions").value);
    let packSize = parseInt(document.getElementById("packSizeOptions").value);
    let basePrice = 2.49;  
    let totalPrice = (basePrice + glazingPrice) * packSize;
    document.getElementById("totalPrice").textContent = `Price: $${totalPrice.toFixed(2)}`;
    }


function addToCart(rollType) {
    let glazing = document.getElementById("glazingOptions").options[document.getElementById("glazingOptions").selectedIndex].text;
    let packSize = document.getElementById("packSizeOptions").value;
    let price = document.getElementById("totalPrice").textContent.replace("Price: $", "");

/*
class Roll {
  constructor(rollType, rollGlazing, packSize, rollPrice, imagePath) {
    this.type = rollType;
    this.glazing = rollGlazing;
    this.size = packSize;
    this.basePrice = rollPrice;
    this.imagePath = imagePath; 
*/

    let roll =  new Roll(rollType, glazing, packSize, basePrice, "../assets/products/original-cinnamon-roll.jpg");


    console.log(roll); 

    let cart = JSON.parse(localStorage.getItem("cart")) || [];


    cart.push(roll);


    localStorage.setItem("cart", JSON.stringify(cart));


    let feedbackMessage = document.getElementById("cartFeedback");
    feedbackMessage.style.display = "block";  
    feedbackMessage.textContent = "Item added to cart!";  


    setTimeout(function() {
        feedbackMessage.style.display = "none";  
    }, 2000);


    console.log("Cart updated:", cart);
    }