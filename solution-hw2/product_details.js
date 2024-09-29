// Get URL parameters
const urlParams = new URLSearchParams(window.location.search);
const product = urlParams.get('product');

// Define product details (you can add more here as needed)
const productData = {
  "original": {
    name: "Original Cinnamon Roll",
    price: "$2.49",
    imageSrc: "../assets/products/original-cinnamon-roll.jpg",
  },
  "apple": {
    name: "Apple Cinnamon Roll",
    price: "$3.49",
    imageSrc: "../assets/products/apple-cinnamon-roll.jpg",
  },
  "raisin": {
    name: "Raisin Cinnamon Roll",
    price: "$2.99",
    imageSrc: "../assets/products/raisin-cinnamon-roll.jpg",
  },
  "walnut": {
    name: "Walnut Cinnamon Roll",
    price: "$3.49",
    imageSrc: "../assets/products/walnut-cinnamon-roll.jpg",
  },
  "double-chocolate": {
    name: "Double-Chocolate Cinnamon Roll",
    price: "$3.99",
    imageSrc: "../assets/products/double-chocolate-cinnamon-roll.jpg",
  },
  "strawberry": {
    name: "Strawberry Cinnamon Roll",
    price: "$3.99",
    imageSrc: "../assets/products/strawberry-cinnamon-roll.jpg",
  }
};

// Check if the product exists in the data and update the page
if (productData[product]) {
  document.querySelector("h3").textContent = productData[product].name;
  document.querySelector(".details-div img").src = productData[product].imageSrc;
  document.querySelector(".div-300 p").textContent = productData[product].price;
} else {
  // Fallback if no product is found
  document.querySelector("h3").textContent = "Product Not Found";
}

// Get URL parameters
const URLSearchParams = new URLSearchParams(window.location.search);
const product  = urlParams.get('product');

// Define product details
const productData = {
  "apple": {
    name: "Apple Cinnamon Roll",
    price: "$3.49",
    imageSrc: "../assets/products/apple-cinnamon-roll.jpg"
  },
  "original": {
    name: "Original Cinnamon Roll",
    price: "$2.49",
    imageSrc: "../assets/products/original-cinnamon-roll.jpg"
  },
  // Add more products here
};

// Update the page based on the selected product
if (productData[product]) {
  document.querySelector("h3").textContent = productData[product].name;
  document.querySelector(".details-div img").src = productData[product].imageSrc;
  document.querySelector(".div-300 p").textContent = productData[product].price;
}
