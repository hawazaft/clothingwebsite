const newArrivalObj_1 = [
    {
        image: "hoodie.jpg",
        gendar: "MEN",
        size: "XS-XXL",
        description: "Dark Blue Sweater with Hooded",
        price: 37.90
    },
    {
        image: "hoodie1.jpg",
        gendar: "MEN",
        size: "XS-XXL",
        description: "Cream Hoodie California",
        price: 40.00
    },
    {
        image: "jeans2.jpg",
        gendar: "MEN",
        size: "XS-XXL",
        description: "Black Straightcut Denim",
        price: 65.00
    },
    {
        image: "jeans3.jpg",
        gendar: "MEN",
        size: "XS-XXL",
        description: "Skinny Jeans",
        price: 60.00
    },
    {
        image: "pants.jpg",
        gendar: "MEN",
        size: "XS-XXL",
        description: "Black Cargo Pants with ",
        price: 49.00
    },
    {
        image: "pants1.jpg",
        gendar: "MEN",
        size: "XS-XXL",
        description: "Cargo Pants Elastic",
        price: 47.99
    },
    {
        image: "shirt.jpg",
        gendar: "MEN",
        size: "XS-XXL",
        description: "Grey T-Shirt",
        price: 18.90
    },
    {
        image: "shirt1.jpg",
        gendar: "MEN",
        size: "XS-XXL",
        description: "T-Shirt",
        price: 23.99
    },
    {
        image: "tshirt2.jpg",
        gendar: "MEN",
        size: "XS-XXL",
        description: "White Shirt Long Sleeve",
        price: 42.00
    },
    {
        image: "tshirt1.jpg",
        gendar: "MEN",
        size: "XS-XXL",
        description: "Shirt Rectangle Pattern",
        price: 37.00
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
            storeData({ image, gendar, size, description, price});
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
