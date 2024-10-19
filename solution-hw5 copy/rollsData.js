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

const rolls = {
    "Original": {
        "basePrice": 2.49,
        "imageFile": "original-cinnamon-roll.jpg"
    },
    "Apple": {
        "basePrice": 3.49,
        "imageFile": "apple-cinnamon-roll.jpg"
    },
    "Raisin": {
        "basePrice": 2.99,
        "imageFile": "raisin-cinnamon-roll.jpg"
    },
    "Walnut": {
        "basePrice": 3.49,
        "imageFile": "walnut-cinnamon-roll.jpg"
    },
    "Double-Chocolate": {
        "basePrice": 3.99,
        "imageFile": "double-chocolate-cinnamon-roll.jpg"
    },
    "Strawberry": {
        "basePrice": 3.99,
        "imageFile": "strawberry-cinnamon-roll.jpg"
    }    
};

var cart = [];

const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get("roll");

const headerElement = document.getElementById("roll");

headerElement.innerText = rollType + "Cinnamon Roll" + '!'

const rollImage = document.querySelector("#roll-img");
rollImage.src = "../assets/product/" + rolls[rollType]["imageFile"] ;
