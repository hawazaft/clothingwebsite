const newArrivalObj_1 = [
    {
        image: "dress1.jpg",
        gendar: "KIDS",
        size: "XS-XXL",
        description: "Red Dress",
        price: 56.00
    },
    {
        image: "jeans4.jpg",
        gendar: "KIDS",
        size: "XS-XXL",
        description: "Jeans Straight Cut",
        price: 30.99
    },
    {
        image: "jeans5.jpg",
        gendar: "KIDS",
        size: "XS-XXL",
        description: "Black Denim",
        price: 39.99
    },
    {
        image: "knitwear1.jpg",
        gendar: "KIDS",
        size:"XS-XXL",
        description: "Knitwear with Rabbit Design",
        price: 34.50
    },
    {
        image: "pants2.jpg",
        gendar: "KIDS",
        size: "XS-XXL",
        description: "Cream Pants Loose",
        price: 31.90
    },
    {
        image: "set.jpg",
        gendar: "KIDS",
        size: "XS-XXL",
        description: "Pink Pyjama Set",
        price: 20.00
    },
    {
        image: "set1.jpg",
        gendar: "KIDS",
        size: "XS-XXL",
        description: "Orange Pyjama Set",
        price: 16.90
    },
    {
        image: "set2.jpg",
        gendar: "KIDS",
        size: "XS-XXL",
        description: "Grey Pyjama Set with Button",
        price: 18.90
    },
    {
        image: "shirt5.jpg",
        gendar: "KIDS",
        size: "XS-XXL",
        description: "T-Shirt with Cute Design",
        price: 37.00
    },
    {
        image: "shirt6.jpg",
        gendar: "KIDS",
        size: "XS-XXL",
        description: "T-Shirt Long Sleeve",
        price: 10.00
    },
    {
        image: "shirt2.jpg",
        gendar: "KIDS",
        size: "XS-XXL",
        description: "T-Shirt with Strip Pattern",
        price: 12.00
    },
    {
        image: "shirt3.jpg",
        gendar: "KIDS",
        size: "XS-XXL",
        description: "T-Shirt with Small Hello Kitten Design",
        price: 19.00
    },
    {
        image: "shirt4.jpg",
        gendar: "KIDS",
        size: "XS-XXL",
        description: "Cream T-Shirt Short Sleeve",
        price: 17.00
    },
    {
        image: "sweatshirt3.jpg",
        gendar: "KIDS",
        size: "XS-XXL",
        description: "Minnie Mouse Sweatshirt",
        price: 23.99
    },
    {
        image: "sweatshirt4.jpg",
        gendar: "KIDS",
        size:"XS-XXL",
        description: "Hello Kitty Sweatshirt",
        price: 27.90
    },
    {
        image: "sweatshirt2.jpg",
        gendar: "KIDS",
        size: "XS-XXL",
        description: "Brown Sweatshirt",
        price: 41.00
    }
];

displayProducts_1(newArrivalObj_1);

function displayProducts_1(data) {
    data.map(({ image, gendar, size, description, price }) => {
        // Create card elements
        let card = document.createElement("div");
        card.classList.add("productCard");

        let img = document.createElement("img");
        img.src = image;

        // Create gender and size elements with appropriate classes
        let gender = document.createElement("h4");
        gender.classList.add("productGender");
        gender.innerText = gendar;

        let clothingSize = document.createElement("h4");
        clothingSize.classList.add("productSize");
        clothingSize.innerText = size;

        let clothingDesc = document.createElement("h4");
        clothingDesc.classList.add("productDesc");
        clothingDesc.innerText = description;

        let clothingPrice = document.createElement("h4");
        clothingPrice.classList.add("productPrice");
        clothingPrice.innerText = `RM${price.toFixed(2)}`;

        // Create the "Add to Cart" button
        let addToCartBtn = document.createElement("button");
        addToCartBtn.classList.add("btn", "btn-primary");
        addToCartBtn.innerText = "Add To Cart";

        // Set up click event for storing data and navigating to the product details page
        card.addEventListener("click", () => {
            storeData({ image, gendar, size, description, price });
            window.location.href = "./productDetails.html"; // Change this to your actual product details page
        });

        // Set up click event for navigating to the "Add to Cart" page
        addToCartBtn.addEventListener("click", () => {
            window.location.href = "./cart.html"; // Change this to your actual add to cart page
        });

        // Append elements to the card
        card.append(img, gender, clothingSize, clothingDesc, clothingPrice, addToCartBtn);

        // Append the card to the productSide container
        document.querySelector(".productSide").append(card);
    });
}

//for selected option 
var selected1 = document.querySelector(".select1");
selected1.addEventListener("change", () => {

    let select = document.querySelector(".select1").value;
    if (select != "") {
        window.location.href = `./${select}.html`;
    }
});
var selected2 = document.querySelector(".select2");
selected2.addEventListener("change", () => {

    let select = document.querySelector(".select2").value;
    if (select != "") {
        window.location.href = `./${select}.html`;
    }
});
var selected2 = document.querySelector(".select3");
selected2.addEventListener("change", () => {

    let select = document.querySelector(".select3").value;
    if (select != "") {
        window.location.href = `./${select}.html`;
    }
});
// selectedOpt()
function storeData(productDetails) {
    sessionStorage.setItem("selectedProduct", JSON.stringify(productDetails));
}
