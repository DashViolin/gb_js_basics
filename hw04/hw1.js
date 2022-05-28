'use strict';

function Ranks(num) {
    if (Number.isInteger(num) && 0 <= num && num <= 999) {
        this.units = num % 10;
        this.dozens = Math.floor((num - this.units) / 10) % 10;
        this.hundreds = Math.floor((num - this.units - this.dozens) / 100) % 10;
    } else {
        console.log('Argument must be a number in range [0, 999].');
    }
}

let ranks1 = new Ranks(987);
console.log(ranks1);

let ranks2 = new Ranks(-1);
console.log(ranks2);

let ranks3 = new Ranks(10000);
console.log(ranks3);
