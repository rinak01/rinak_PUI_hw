document.addEventListener("DOMContentLoaded", function () {

    const urlParams = new URLSearchParams(window.location.search);
    const product = urlParams.get('product');
  

    const products = {
      "original-cinnamon-roll": {
        name: "Original Cinnamon Roll",
        price: "2.49",
        imageSrc: "../assets/products/original-cinnamon-roll.jpg"
      },
      "apple-cinnamon-roll": {
        name: "Apple Cinnamon Roll",
        price: "3.49",
        imageSrc: "../assets/products/apple-cinnamon-roll.jpg"
      },
      "raisin-cinnamon roll": {
        name: "Raisin Cinnamon Roll",
        price: "2.99",
        imageSrc: "../assets/products/raisin-cinnamon-roll.jpg"
      },
      "walnut-cinnamon roll": {
        name: "Walnut Cinnamon Roll",
        price: "3.49",
        imageSrc: "../assets/products/walnut-cinnamon-roll.jpg"
    },
    "double-chocolate-cinnamon-roll": {
      name: "Double Chocolate Cinnamon Roll",
      price: "3.99",
      imageSrc: "../assets/products/double-chocolate-cinnamon-roll.jpg"
    },
    "strawberry-cinnamon-roll": {
      name: "Strawberry Cinnamon Roll",
      price: "3.99",
      imageSrc: "../assets/products/strawberry-cinnamon-roll.jpg"
    };

    if (products[product]) {

      document.getElementById("product-name").textContent = products[product].name;
      document.getElementById("product-price").innerHTML = `$${products[product].price} <button>Add to cart</button>`;
      document.getElementById("product-image").src = products[product].imageSrc;
    } else {

      document.getElementById("product-name").textContent = "Product not found";
    }
  });
  