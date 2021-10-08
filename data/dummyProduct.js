class Product {
    constructor(name, img, price, des, qtyInStock, rating) {

        this.name = name;
        this.img = img;
        this.price = price;
        this.des = des;
        this.qtyInStock = qtyInStock;
        this.rating = rating;
    }
}

const products = [
    new Product(

        "Lehenga Choli",
        "/images/img/1st.jpg",
        1299,
        "Self Design Semi Stitched Lahanga",
        5,
        4.8
    ),
    new Product(

        "Ethvilla",
        "/images/img/2nd.jpg",
        1849,
        "Printed Daily Wear Georgette Lahanga",
        8,
        4.8
    ),

    new Product(

        "Monoamine",
        "/images/img/3rd.jpg",
        849,
        "Solid Bollywood Satin Blend and fancy Lahanga",
        0,
        5.0
    ),
    new Product(

        "Blue Blazer",
        "/images/img/7th.jpeg",
        2519,
        "Men's Slim Fit Single Breasted Blazer",
        3,
        2.5
    ),
    new Product(

        "Drasthi Villa",
        "/images/img/4rth.jpg",
        999,
        "Women's Heavy Net Semi-Stiched Embrodary Lehenga",
        0,
        5.0
    ),
    new Product(

        "Sherwani",
        "/images/img/8th.jpg",
        1549,
        "Men's Ethnic Wear Sherwani Wedding Dress Set",
        10,
        4.8
    ),
    new Product(

        "Yellow Lahanga",
        "/images/img/5th.jpg",
        1690,
        "Printed Semi Stitched Lehenga ",
        12,
        1.9
    ),
    new Product(

        "Kanjivar",
        "/images/img/6th.jpg",
        2199,
        "kirshna Women's Banglory Silk Semi-stitched Lehenga Choli",
        13,
        3.5
    ),
    
];

module.exports = products;