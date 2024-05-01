// Function to add item to basket
function add_to_basket(event) {
    // Get the parent element of the clicked button, which is the item container
    var itemContainer = event.target.closest('.item');
    
    // Retrieve item details
    var itemName = itemContainer.querySelector('.details p').innerText;
    var itemPrice = itemContainer.querySelector('.price').innerText;
    var itemImageSrc = itemContainer.querySelector('img').src;

    // Check if local storage is supported
    if (typeof(Storage) !== "undefined") {
        // Add item to local storage for later retrieval on the basket page
        var basketItems = JSON.parse(localStorage.getItem('basketItems')) || [];
        basketItems.push({name: itemName, price: itemPrice, imageSrc: itemImageSrc});
        localStorage.setItem('basketItems', JSON.stringify(basketItems));
        
        // Show success message
        alert("Item added to basket");
    } else {
        // Local storage not supported, show error message
        alert("Sorry, your browser does not support local storage. Item could not be added to basket.");
    }


}

// Function to show success message
function showSuccessMessage(message) {
    var toast = document.createElement('div');
    toast.classList.add('toast', 'success');
    toast.textContent = message;
    document.body.appendChild(toast);

    // Remove the toast after 3 seconds
    setTimeout(function() {
        toast.remove();
    }, 3000);
}

// Function to show error message
function showErrorMessage(message) {
    var toast = document.createElement('div');
    toast.classList.add('toast', 'error');
    toast.textContent = message;
    document.body.appendChild(toast);

    // Remove the toast after 3 seconds
    setTimeout(function() {
        toast.remove();
    }, 3000);
}

