const products = [
    {
        "name": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        "brand": "Fjallraven",
        "category": "men's clothing",
        "price": 109.95,
        "countInStock": 50,
        "rating": 3.9,
        "numReviews": 120
    },
    {
        "name": "Mens Casual Premium Slim Fit T-Shirts",
        "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        "brand": "Generic",
        "category": "men's clothing",
        "price": 22.3,
        "countInStock": 100,
        "rating": 4.1,
        "numReviews": 259
    },
    {
        "name": "Mens Cotton Jacket",
        "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
        "description": "Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm-hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
        "brand": "Generic",
        "category": "men's clothing",
        "price": 55.99,
        "countInStock": 75,
        "rating": 4.7,
        "numReviews": 500
    },
    {
        "name": "Mens Casual Slim Fit",
        "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
        "brand": "Generic",
        "category": "men's clothing",
        "price": 15.99,
        "countInStock": 30,
        "rating": 2.1,
        "numReviews": 430
    },
    {
        "name": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
        "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
        "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
        "brand": "John Hardy",
        "category": "jewelery",
        "price": 695,
        "countInStock": 20,
        "rating": 4.6,
        "numReviews": 400
    },
    {
        "name": "Solid Gold Petite Micropave",
        "image": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
        "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days. Designed and sold by Hafeez Center in the United States.",
        "brand": "Hafeez Center",
        "category": "jewelery",
        "price": 168,
        "countInStock": 40,
        "rating": 3.9,
        "numReviews": 70
    },
    {
        "name": "White Gold Plated Princess",
        "image": "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
        "description": "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
        "brand": "Generic",
        "category": "jewelery",
        "price": 9.99,
        "countInStock": 100,
        "rating": 3,
        "numReviews": 400
    },
    {
        "name": "Pierced Owl Rose Gold Plated Stainless Steel Double",
        "image": "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
        "description": "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel.",
        "brand": "Pierced Owl",
        "category": "jewelery",
        "price": 10.99,
        "countInStock": 150,
        "rating": 1.9,
        "numReviews": 100
    },
    {
        "name": "WD 2TB Elements Portable External Hard Drive - USB 3.0",
        "image": "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
        "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system.",
        "brand": "WD",
        "category": "electronics",
        "price": 64,
        "countInStock": 80,
        "rating": 3.3,
        "numReviews": 203
    },
    {
        "name": "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
        "image": "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
        "description": "Easy upgrade for faster boot up, shutdown, application load and response. Boosts burst write performance, making it ideal for typical PC workloads. The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s.",
        "brand": "SanDisk",
        "category": "electronics",
        "price": 109,
        "countInStock": 60,
        "rating": 2.9,
        "numReviews": 470
    },
    {
        "name": "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
        "image": "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
        "description": "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks.",
        "brand": "Silicon Power",
        "category": "electronics",
        "price": 109,
        "countInStock": 90,
        "rating": 4.8,
        "numReviews": 319
    },
    {
        "name": "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
        "image": "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
        "description": "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty.",
        "brand": "WD",
        "category": "electronics",
        "price": 114,
        "countInStock": 40,
        "rating": 4.8,
        "numReviews": 400
    },
    {
        "name": "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
        "image": "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
        "description": "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit.",
        "brand": "Acer",
        "category": "electronics",
        "price": 599,
        "countInStock": 20,
        "rating": 2.9,
        "numReviews": 250
    },
    {
        "name": "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
        "image": "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
        "description": "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) Technology, HDR support and factory calibration gaming monitor; Resolution 3840 x 1080; 144Hz refresh rate. 1ms MPRT, 178° (H)/178° (V); 1.07 billion colors.",
        "brand": "Samsung",
        "category": "electronics",
        "price": 999.99,
        "countInStock": 30,
        "rating": 2.2,
        "numReviews": 140
    },
    {
        "name": "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
        "image": "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
        "description": "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm. Stand Collar Liner jacket, keep you warm in cold weather. Outer: wear resisting Soft shell, Highly wind resistant and heavy-duty. Adjustable cuffs help to seal and keep warm, and the Inner wear-resistant soft shell is highly wind-resistant.",
        "brand": "BIYLACLESEN",
        "category": "women's clothing",
        "price": 56.99,
        "countInStock": 15,
        "rating": 2.6,
        "numReviews": 235
    },
    {
        "name": "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
        "image": "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
        "description": "100% POLYURETHANE (shell) 100% POLYESTER (lining) 75% POLYESTER 25% COTTON (Sweater), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim look (complete with zipper) and button details / Button detail on waist / Detail stitching at sides / HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON.",
        "brand": "Lock and Love",
        "category": "women's clothing",
        "price": 29.95,
        "countInStock": 45,
        "rating": 2.9,
        "numReviews": 340
    },
    {
        "name": "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
        "image": "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
        "description": "Lightweight perfect for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
        "brand": "Generic",
        "category": "women's clothing",
        "price": 39.99,
        "countInStock": 10,
        "rating": 3.8,
        "numReviews": 679
    },
    {
        "name": "MBJ Women's Solid Short Sleeve Boat Neck V ",
        "image": "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
        "description": "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort / Ribbed on sleeves and neckline / Double stitching on bottom hem",
        "brand": "MBJ",
        "category": "women's clothing",
        "price": 9.85,
        "countInStock": 60,
        "rating": 4.7,
        "numReviews": 130
    },
    {
        "name": "Opna Women's Short Sleeve Moisture",
        "image": "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
        "description": "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
        "brand": "Opna",
        "category": "women's clothing",
        "price": 7.95,
        "countInStock": 30,
        "rating": 4.5,
        "numReviews": 146
    },
    {
        "name": "DANVOUY Womens T Shirt Casual Cotton Short",
        "image": "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
        "description": "95%Cotton, 5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees The fabric is soft and has some stretch. Casual and stylish , Great for pairing it with jeans or wearing it as a crop top",
        "brand": "DANVOUY",
        "category": "women's clothing",
        "price": 12.99,
        "countInStock": 25,
        "rating": 3.6,
        "numReviews": 145
    }
]


export default products
