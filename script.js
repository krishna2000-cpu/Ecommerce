// Product Data (mockup)
const products = [
    {
        id: 1,
        name: 'Product 1',
        price: 29.99,
        image: 'https://via.placeholder.com/200x150',
    },
    {
        id: 2,
        name: 'Product 2',
        price: 49.99,
        image: 'https://via.placeholder.com/200x150',
    },
    {
        id: 3,
        name: 'Product 3',
        price: 19.99,
        image: 'https://via.placeholder.com/200x150',
    },
    {
        id: 4,
        name: 'Product 4',
        price: 39.99,
        image: 'https://via.placeholder.com/200x150',
    }
];

let cart = [];

// Display Products
const productContainer = document.getElementById('product-container');

products.forEach((product) => {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>Price: $${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productContainer.appendChild(productCard);
});

// Add to Cart
function addToCart(productId) {
    const product = products.find((product) => product.id === productId);
    cart.push(product);
    updateCartCount();
}

// Update Cart Count
function updateCartCount() {
    document.getElementById('cart-count').textContent = cart.length;
}
