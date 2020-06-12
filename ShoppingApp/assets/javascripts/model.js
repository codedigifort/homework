// function Product(p_id,p_name,p_price,p_img){
//     this.p_id = p_id;
//     this.p_name = p_name;
//     this.p_price = p_price;
//     this.p_img = p_img;
// }

class Product {
    constructor(p_id, p_name, p_price, p_img) {
        this.p_id = p_id;
        this.p_name = p_name;
        this.p_price = p_price;
        this.p_img = p_img;
        // this.qty = 0;
        this.delete = false;
    }
}

var obj = {
    cartItems: [],
    "addItem": function (p_id, p_name, p_price, p_img) {
        var item = new Product(p_id, p_name, p_price, p_img);
        this.cartItems.push(item);
        console.log(this.cartItems);
    },

    "deleteItem": function (id) {
        // for(var i = 0; i < this.cartItems.length; i++) {
        //     if(this.cartItems[i].p_id == id) {
        //         var item = this.cartItems[i];
        //         break;
        //     }
        // }
        var item = this.cartItems.filter(function (p) {
            return p.p_id == id;
        });
        item[0].delete = true;
        console.log(item);
        this.cartItems = this.cartItems.filter(function (p) {
            return p.delete == false;
        });
    },

    "searchItem": function (str) {
        this.cartItems = this.cartItems.filter(function (p) {
            return p.delete == false;
        });
    }
}