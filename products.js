const products = [

    {
        id: 1,
        name: "Wireless Headphones",
        category: "electronics",
        price: 1999,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
    },

    {
        id: 2,
        name: "Smart Watch",
        category: "electronics",
        price: 2499,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30"
    },

    {
        id: 3,
        name: "Casual T-Shirt",
        category: "fashion",
        price: 799,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
    },

    {
        id: 4,
        name: "Running Shoes",
        category: "fashion",
        price: 1899,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
    },

    {
        id: 5,
        name: "Modern Chair",
        category: "home",
        price: 3499,
        image: "https://images.unsplash.com/photo-1503602642458-232111445657"
    },

    {
        id: 6,
        name: "Table Lamp",
        category: "home",
        price: 999,
        image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c"
    }

];

const productContainer =
    document.getElementById("productContainer");

const searchInput =
    document.getElementById("searchInput");

const categoryFilter =
    document.getElementById("categoryFilter");


function displayProducts(productList) {

    productContainer.innerHTML = "";

    if (productList.length === 0) {

        productContainer.innerHTML =
            "<p>No products found.</p>";

        return;
    }

    productList.forEach(product => {

        const card = document.createElement("div");

        card.className = "product-card";

        card.innerHTML = `

            <img
                src="${product.image}"
                alt="${product.name}"
                loading="lazy"
            >

            <h3>${product.name}</h3>

            <p class="category">
                ${product.category}
            </p>

            <p class="price">
                ₹${product.price}
            </p>

            <button
                onclick="addToCart(${product.id})">
                Add to Cart
            </button>

        `;

        productContainer.appendChild(card);

    });

}


function filterProducts() {

    const searchText =
        searchInput.value.toLowerCase();

    const category =
        categoryFilter.value;

    const filtered =
        products.filter(product => {

            const matchesSearch =
                product.name
                .toLowerCase()
                .includes(searchText);

            const matchesCategory =
                category === "all" ||
                product.category === category;

            return matchesSearch &&
                   matchesCategory;

        });

    displayProducts(filtered);

}


function addToCart(productId) {

    let cart =
        JSON.parse(localStorage.getItem("cart")) || [];

    const product =
        products.find(p => p.id === productId);

    cart.push(product);

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    alert(product.name + " added to cart!");
}


searchInput.addEventListener(
    "input",
    filterProducts
);

categoryFilter.addEventListener(
    "change",
    filterProducts
);

displayProducts(products);