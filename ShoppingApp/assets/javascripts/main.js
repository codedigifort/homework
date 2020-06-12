window.addEventListener("load", initEvents);

var cart;
var overlay;
var search;
function initEvents() {
    loadProducts();
    cart = document.querySelector("#cart");
    overlay = document.querySelector('.overlay');
    overlay.addEventListener("click", hideCart);
    document.querySelector(".cart_btn").addEventListener("click", displayCart);
    showCartCount();
    loadCartProducts();
    search = document.querySelector("#search");
    search.addEventListener("keyup", searchProduct);
}

function showCartCount() {
    document.querySelector("#cart_count").innerHTML = obj.cartItems.length;
}
function searchProduct() {
    var ul = document.querySelector("#productsList");
    ul.innerHTML = "";
    products.forEach(function (p) {
        if (p.p_name.includes(search.value)) {
            var li = document.createElement("li");
            var img = document.createElement('img');
            var h4 = document.createElement('h4');
            var span = document.createElement('span');
            var button = document.createElement('button');

            img.src = p.p_img;
            h4.innerHTML = p.p_name;
            span.innerHTML = p.p_price;
            button.innerHTML = 'Add to Cart';
            button.setAttribute('value', p.p_id);

            li.appendChild(img);
            li.appendChild(h4);
            li.appendChild(span);
            li.appendChild(button);
            ul.appendChild(li);

            button.addEventListener("click", addToCart);
        }
    });
}
function loadProducts() {
    var ul = document.querySelector("#productsList");
    products.forEach(function (p) {
        var li = document.createElement("li");
        var img = document.createElement('img');
        var h4 = document.createElement('h4');
        var span = document.createElement('span');
        var button = document.createElement('button');

        img.src = p.p_img;
        h4.innerHTML = p.p_name;
        span.innerHTML = p.p_price;
        button.innerHTML = 'Add to Cart';
        button.setAttribute('value', p.p_id);

        li.appendChild(img);
        li.appendChild(h4);
        li.appendChild(span);
        li.appendChild(button);
        ul.appendChild(li);

        button.addEventListener("click", addToCart);

    });
}

function displayCart() {
    cart.classList.toggle('showCart');
    overlay.style.display = 'block';
    showCartItems();
}

function addToCart() {
    cart.classList.toggle('showCart');
    overlay.style.display = 'block';

    var p_id = event.target.value;
    for (var i = 0; i < products.length; i++) {
        if (p_id == products[i].p_id) {
            var current_obj = products[i];
            break
        }
    }
    // console.log(obj);
    obj.addItem(current_obj.p_id, current_obj.p_name, current_obj.p_price, current_obj.p_img);
    showCartItems();
    showCartCount();
    saveCartProducts();
}

function showCartItems() {
    var table = document.querySelector("#cartList");
    table.innerHTML = "";
    obj.cartItems.forEach(function (p) {
        var tr = table.insertRow();
        tr.insertCell().innerHTML = '<img src="' + p.p_img + '" alt="image">';
        tr.insertCell().innerHTML = p.p_name;
        tr.insertCell().innerHTML = p.p_price;
        tr.insertCell().innerHTML = 'Qty : 1';
        var btn = document.createElement("button");
        // btn.innerHTML = "<i class='fas fa-trash'>";
        btn.innerHTML = "Delete";
        btn.setAttribute('value', p.p_id);
        tr.insertCell().appendChild(btn);
        table.appendChild(tr);
        btn.addEventListener("click", deleteFromCart);
    });
}

function hideCart() {
    cart.classList.toggle('showCart');
    overlay.style.display = 'none';
}

function deleteFromCart() {
    var p_id = event.srcElement.value;
    obj.deleteItem(p_id);
    showCartItems();
    saveCartProducts();
}

function saveCartProducts() {
    var json = JSON.stringify(obj.cartItems);
    localStorage.setItem('products', json);
}

function loadCartProducts() {
    var data = localStorage.getItem('products');
    if (data != null) {
        obj.cartItems = JSON.parse(data);
        showCartCount();
    }
}