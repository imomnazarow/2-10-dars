const products = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    price: 999.99,
    rating: 4.8,
    stock: 25,
  },
  {
    id: 2,
    name: "Samsung Galaxy S24",
    price: 849.5,
    rating: 4.7,
    stock: 14,
  },
  {
    id: 3,
    name: "MacBook Air M3",
    price: 1299.0,
    rating: 4.9,
    stock: 8,
  },
  {
    id: 4,
    name: "Sony WH-1000XM5",
    price: 399.99,
    rating: 4.6,
    stock: 42,
  },
  {
    id: 5,
    name: "Apple Watch Series 9",
    price: 399.0,
    rating: 4.5,
    stock: 0, // Stokda tugagan
  },
];

// find element berilgan shart a mos bolganini va birinchi uchraganini qaytaradi

// masala
// stock 10 tadan kam qolgan birinchi elementni topish

function findProd(arr, stock) {
  let findItem = arr.find((prod) => prod.stock < stock);
  return findItem;
}
console.log(findProd(products, 10));

// map masala: map barcha mahsulotlarga qo'llash uchun ishlatiladi
// barcha mahsulotlarni 1 taga oshirish
let maped = products.map((prod) => {
  return { ...prod, stock: prod.stock + 1 };
});
console.log(maped);

// barcha mahsulotlarga 10% chegirma qo'llash kerak
let maped10 = products.map((prod) => {
  return { ...prod, price: prod.price * 0.9 };
});
console.log(maped10);

// sort - saralash uchun ishlatiladi
// arzondan qimmatga saralash kerak

let qimmatArzon = products.sort((a, b) => b.price - a.price);
console.log(qimmatArzon);

// hello  so'zining harflarini necha marttadan ishlatilganini aniqlash
// va array sifatida qaytarsin
// hell0 => {h:1, e:1, l:2, o:1}

// let str = "hello";

// function sana(text) {
//   let withArr = {};
//   for(let i=0; i<str.length, i++) withArr++
//   }
// console.log(sana(str));
