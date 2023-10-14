document.addEventListener('click', function (e) {
    if (e.target.classList.contains('quantity-button')) {
        // Handle quantity change
        const action = e.target.getAttribute('data-action');
        const quantityElement = e.target.parentElement.parentElement.querySelector('.quantity');
        const subtotalElement = e.target.parentElement.parentElement.querySelector('.subtotal');
        
        let quantity = parseInt(quantityElement.textContent);
        if (action === "increment") {
            quantity++;
        } else if (action === "decrement" && quantity > 1) {
            quantity--;
        }
        
        quantityElement.textContent = quantity;
        subtotalElement.textContent = (quantity * 10).toFixed(2); // Update price

        updateTotalPrice();
    }

    if (e.target.classList.contains('remove-button')) {
        // Handle item removal
        e.target.parentElement.parentElement.remove();
        updateTotalPrice();
    }

    if (e.target.classList.contains('like-button')) {
        // Handle item liking
        e.target.classList.toggle('liked');
    }
});

function updateTotalPrice() {
    const subtotals = document.querySelectorAll('.subtotal');
    let total = 0;

    subtotals.forEach(subtotal => {
        total += parseFloat(subtotal.textContent);
    });

    document.getElementById('total-price').textContent = total.toFixed(2);
}
