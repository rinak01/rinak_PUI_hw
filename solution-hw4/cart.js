function displayCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.getElementById('cartContainer');
    cartContainer.innerHTML = '';
    cart.forEach((item, index) => {
        cartContainer.innerHTML += `
            <div class="cart-item">
                <img src="../assets/products/${item.productName.toLowerCase().replace(/\s/g, "-")}.jpg" width="150" alt="${item.productName}">
                <div class="cart-details">
                    <p>${item.productName}</p>
                    <p>Glazing: ${item.glazing}</p>
                    <p>Pack Size: ${item.packSize}</p>
                    <p>$${item.price}</p>
                    <a href="#" class="remove-item" onclick="removeItem(${index})">Remove</a>
                </div>
            </div>
        `;
    });
    updateTotalPrice(cart);
}

function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
}

function updateTotalPrice(cart) {
    let total = 0;
    cart.forEach(item => {
        total += item.price * item.packSize;
    });
    document.querySelector('.cart-total p:last-child').innerText = `$${total.toFixed(2)}`;
}

window.onload = function() {
    displayCart();
};

