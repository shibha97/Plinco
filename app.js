const products = [
    { id: 1, name: 'Smartphone', price: 299, category: 'electronics', brand: 'brand-a' },
    { id: 2, name: 'T-Shirt', price: 25, category: 'fashion', brand: 'brand-b' },
    { id: 3, name: 'Blender', price: 45, category: 'home', brand: 'brand-c' },
    { id: 4, name: 'Laptop', price: 999, category: 'electronics', brand: 'brand-a' },
    { id: 5, name: 'Jeans', price: 75, category: 'fashion', brand: 'brand-b' }
];

// Function to display products on the page
function displayProducts(products) {
    const productsGrid = document.getElementById('products-grid');
    productsGrid.innerHTML = ''; // Clear previous products

    products.forEach(product => {
        const productCard = `
            <div class="product-card">
                <h4>${product.name}</h4>
                <p>Price: $${product.price}</p>
                <p>Category: ${product.category}</p>
                <p>Brand: ${product.brand}</p>
            </div>
        `;
        productsGrid.innerHTML += productCard;
    });
}

// Apply Filters based on user selection
document.getElementById('apply-filters').addEventListener('click', () => {
    const priceRange = document.getElementById('price').value;
    const category = document.getElementById('category').value;
    const brand = document.getElementById('brand').value;

    let filteredProducts = products;

    // Filter by price
    if (priceRange !== 'all') {
        const [minPrice, maxPrice] = priceRange.split('-');
        filteredProducts = filteredProducts.filter(product => {
            if (maxPrice) {
                return product.price >= minPrice && product.price <= maxPrice;
            }
            return product.price >= minPrice;
        });
    }

    // Filter by category
    if (category !== 'all') {
        filteredProducts = filteredProducts.filter(product => product.category === category);
    }

    // Filter by brand
    if (brand !== 'all') {
        filteredProducts = filteredProducts.filter(product => product.brand === brand);
    }

    displayProducts(filteredProducts);
});

// Initial display of all products
displayProducts(products);