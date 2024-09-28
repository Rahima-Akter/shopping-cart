const cardItems = [

    {
        "_id": "1",
        "price": 222,
        "picture": "images/earphone.jpg",
        "name": "Earphone",
        "about": ""
    },
    {
        "_id": "2",
        "price": 73,
        "picture": "images/glass.jpg",
        "name": "Sun Glass",
        "about": ""
    },
    {
        "_id": "3",
        "price": 116.64,
        "picture": "images/hoddie.jpg",
        "name": "Man's Hoddie",
        "about": ""
    },
    {
        "_id": "4",
        "price": 22.45,
        "picture": "images/pants.jpg",
        "name": "Women Clothes",
        "about": ""
    },
    {
        "_id": "5",
        "price": 2957,
        "picture": "images/shoes.jpg",
        "name": "Shoes",
        "about": ""
    },
    {
        "_id": "6",
        "price": 295.76,
        "picture": "images/watch.jpg",
        "name": "Man's Watch",
        "about": ""
    }

];

const grid1 = document.getElementById('grid1');


for (let items of cardItems) {
    const div = document.createElement('div');
    div.className = "card bg-blue-100 lg:w-80 md:w-[300px] w-60 shadow-xl m-auto";
    div.innerHTML = `
            <div class="px-6 pt-6">
                <img class="rounded-xl" src="${items.picture}">
            </div>
            <div class="card-body">
                <h2 class="card-title font-bold">${items.name}</h2>
                <p>${items.about}</p>
                <p class="font-bold mb-2">Price: $${items.price}</p>
                <div class="card-actions">
                    <button onclick="addCart('${items.price}')" class="btn btn-primary w-full">Add To Cart</button>
                </div>
            </div>
        `;

    grid1.append(div);
};


// function for adding items and total amount to the cart section
let count = 0;
let total = 0;

function addCart(price){
    count++;
    total = total + parseFloat(price);
    const itemCount = document.getElementById('item-count');
    itemCount.innerText = count;

    const totalItem = document.getElementById('total-item');
    totalItem.innerText = count;

    const subTotal = document.getElementById('sub-total');
    subTotal.innerText = total;
}



