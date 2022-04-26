const products2 = [ 
    { 
        id: 3, 
        price: 127, 
        photos: [ "1.jpg", "2.jpg", ] 
    }, 
    { 
        id: 5, 
        price: 499, 
        photos: [] 
    }, 
    { 
        id: 10, 
        price: 26, 
        photos: [ "3.jpg" ]
    }, 
    { 
        id: 8, 
        price: 78, 
    }, 
];

console.log(products2.filter(item => item.photos && item.photos.length > 0))
console.log(products2.sort((a, b) => (a.price > b.price) ? 1 : -1))
