function ProductES5(name, price) {
    this.name = name;
    this.price = price;
};

ProductES5.prototype.make25PercentDiscount = function () {
    this.price = this.price * 0.75;
};


class ProductES6 {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    make25PercentDiscount() {
        this.price = this.price * 0.75;
    };   
}


let prod_es5 = new ProductES5('bread', 16);
console.log(prod_es5);
prod_es5.make25PercentDiscount();
console.log(prod_es5);

let prod_es6 = new ProductES6('bread', 16);
console.log(prod_es6);
prod_es6.make25PercentDiscount();
console.log(prod_es6);
