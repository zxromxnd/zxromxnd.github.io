const cartBtn = document.getElementById('cartBtn');
const cartCount = document.getElementById('cartCount');

cartBtn.addEventListener('click', function(e) {
    e.preventDefault();

    let count = parseInt(cartCount.textContent);
    cartCount.textContent = count + 1;
});