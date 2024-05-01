// basket.js
document.addEventListener("DOMContentLoaded", function () {
    const basketItemsContainer = document.querySelector(".basket-items");
    const subtotalElement = document.getElementById("subtotal");
    const taxElement = document.getElementById("tax");
    const totalElement = document.getElementById("total");
    const checkoutButton = document.querySelector(".checkout-btn button");

    // Retrieve the cart items from localStorage
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    if (cartItems.length > 0) {
        // Display items in the cart
        displayCartItems();

        // Update cart total
        updateCartTotal();

        // Add event listener to the checkout button
        checkoutButton.addEventListener("click", function () {
            alert("Checkout functionality is under development.");
        });
    } else {
        // Display a message if the cart is empty
        showEmptyCartMessage();
        updateCartTotal();
    }

    function displayCartItems() {
        basketItemsContainer.innerHTML = ""; // Clear previous items

        cartItems.forEach(item => {
            const itemContainer = document.createElement("div");
            itemContainer.classList.add("item");

            const itemImage = document.createElement("img");
            itemImage.src = item.image;
            itemImage.alt = item.title;

            const itemDetails = document.createElement("div");
            itemDetails.classList.add("item-details");

            const itemTitle = document.createElement("h2");
            itemTitle.textContent = item.title;

            const itemDescription = document.createElement("p");
            itemDescription.textContent = item.description;

            const itemPrice = document.createElement("p");
            itemPrice.textContent = `$${item.price}`;

            // Create remove button
            const removeButton = document.createElement("button");
            removeButton.classList.add("remove-btn");
            removeButton.textContent = "Remove";
            removeButton.addEventListener("click", function () {
                // Remove item from cart
                cartItems = cartItems.filter(cartItem => cartItem !== item);
                localStorage.setItem("cartItems", JSON.stringify(cartItems));
                displayCartItems(); // Refresh cart display
                updateCartTotal();
            });

            // Append elements to the item container
            itemDetails.appendChild(itemTitle);
            itemDetails.appendChild(itemDescription);
            itemDetails.appendChild(itemPrice);
            itemDetails.appendChild(removeButton);

            itemContainer.appendChild(itemImage);
            itemContainer.appendChild(itemDetails);

            basketItemsContainer.appendChild(itemContainer);
        });
    }

    function showEmptyCartMessage() {
        basketItemsContainer.innerHTML = "<p>Your basket is empty</p>";
    }

    function updateCartTotal() {
        if (cartItems.length > 0) {
            // Calculate subtotal, tax, and total
            const subtotal = cartItems.reduce((acc, item) => acc + parseFloat(item.price), 0);
            const tax = subtotal * 0.1; // Assuming 10% tax rate
            const total = subtotal + tax;

            // Update the displayed prices
            subtotalElement.textContent = `Subtotal: $${subtotal.toFixed(2)}`;
            taxElement.textContent = `Tax: $${tax.toFixed(2)}`;
            totalElement.textContent = `Total: $${total.toFixed(2)}`;
        } else {
            subtotalElement.textContent = "";
            taxElement.textContent = "";
            totalElement.textContent = "";
        }
    }
});



  