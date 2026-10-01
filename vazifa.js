// 1.
// Input: getNamesByGrade(students, 5)
// Output: ['Quincy', 'Alexis', 'Katie']

let students = [
  { name: "Quincy", percent: 96, grade: 5 },
  { name: "Jason", percent: 84, grade: 4 },
  { name: "Alexis", percent: 100, grade: 5 },
  { name: "Sam", percent: 65, grade: 3 },
  { name: "Katie", percent: 90, grade: 5 },
  { name: "Anna", percent: 75, grade: 4 },
];

function getNamesByGrade(students, grade) {
  let baho5 = students.filter((student) => student.percent >= 85);
  let ismlar = baho5.map((student) => student.name);
  return ismlar;
}

console.log(getNamesByGrade(students, 5));

// 2. Massivdagi bir xil so’zlar sonini hosil qiluvchi obyekt
// yarating. (reduce)
// Input: const
// Output: {
// dog: 2,
// chicken: 3,
// cat: 1,
// rabbit: 1
// }
let animals = ["dog", "chicken", "cat", "dog", "chicken", "chicken", "rabbit"];

let result = animals.reduce((acc, animal) => {
  if (acc[animal]) {
    acc[animal]++;
  } else {
    acc[animal] = 1;
  }

  return acc;
}, {});

console.log(result);

// 3. Massiv elementlari kvadratlaridan hosil bo’lgan massiv hosil
// qiling. (map)

let arr = [2, 3, 4, 5];
let result3 = arr.map((son) => son * son);
console.log(result3);

// 4. Massivdagi musbat sonlar yig’indisini hisoblang. (filter va
// reduce)
// Input: [ 1, -4, 12, 0, -3, 29, -150]
// Output: 42
let numbers = [1, -4, 12, 0, -3, 29, -150];
let musbat = numbers.filter((son) => son > 0);
let yigindi = musbat.reduce((sum, son) => sum + son, 0);

console.log(yigindi);

// 5. Satrdagi so’zlarning bosh harflarini oling. (split, map,
// join)
// Input: 'George Raymond Richard Martin'
// Output: 'GRRM'
let str = "George Raymond Richard Martin";
let words = str.split(" ");
let harflar = words.map((word) => word[0]);
let result5 = harflar.join("");

console.log(result);

// 6. Massivdagi eng yosh va eng qarilarni topib, ularni yoshlarini
// farqini toping. (sort).
// Input: [
// {name: 'John', age: 13},
// {name: 'Mark', age: 56},
// {name: 'Rachel', age: 45},
// {name: 'Nate', age: 67},
// {name: 'Jeniffer', age: 65}
// ];
// Output: 54
let odamlar = [
  { name: "John", age: 13 },
  { name: "Mark", age: 56 },
  { name: "Rachel", age: 45 },
  { name: "Nate", age: 67 },
  { name: "Jeniffer", age: 65 },
];
odamlar.sort((a, b) => a.age - b.age);
let farq = odamlar[odamlar.length - 1].age - odamlar[0].age;

console.log(farq);
// 7. N ta elementdan iborat massiv berilgan.
// Massiv elementlari orasidan juftlarini va toqlarini o'z ichiga
// oladigan massivlar hosil qilinsin. (filter)
let number = [1, 2, 3, 4, 5, 6, 7, 8];
let juft = number.filter((son) => son % 2 === 0);
let toq = number.filter((son) => son % 2 !== 0);

console.log(juft);
console.log(toq);
// 8. N ta elementdan iborat massiv berilgan. Massiv elementlari
// orasidan bir xil qiymatga ega bo’lganlarini o’chiruvchi dastur
// tuzilsin. Faqat birinchi uchragani qoldirilsin. (reduce)
let sonlar = [1, 2, 2, 3, 1, 4, 3];

let result8 = sonlar.reduce((arr, son) => {
  if (!arr.includes(son)) {
    arr.push(son);
  }

  return arr;
}, []);

console.log(result8);
// 9. Products massivini id, name, price, rating va discount
// bo'yicha sortlash; (sort)
let products = [
  {
    id: 1,
    name: "Telefon",
    price: 500,
    rating: 4.5,
    discount: 10,
  },
  {
    id: 4,
    name: "Noutbuk",
    price: 1200,
    rating: 4.9,
    discount: 15,
  },
  {
    id: 3,
    name: "Planshet",
    price: 700,
    rating: 4.2,
    discount: 20,
  },
  {
    id: 2,
    name: "Quloqchin",
    price: 100,
    rating: 4.7,
    discount: 5,
  },
];

// id bo'yicha
let idSort = [...products];
idSort.sort((a, b) => a.id - b.id);
console.log(idSort);

// name bo'yicha
let nameSort = [...products];
nameSort.sort((a, b) => a.name.localeCompare(b.name));
console.log(nameSort);

// price bo'yicha
let priceSort = [...products];
priceSort.sort((a, b) => a.price - b.price);
console.log(priceSort);

// rating bo'yicha
let ratingSort = [...products];
ratingSort.sort((a, b) => b.rating - a.rating);
console.log(ratingSort);

// discount bo'yicha
let discountSort = [...products];
discountSort.sort((a, b) => b.discount - a.discount);
console.log(discountSort);

// 10. Rating bo'yicha eng kuchli product topilsin. (sort)
products.sort((a, b) => b.rating - a.rating);
console.log(products[0]);

// 11. Narxi eng past bo'lgan product topilsin. (sort)
products.sort((a, b) => a.price - b.price);
console.log(products[0]);

// 12. Barcha products narxlari yig'indisi topilsin. (reduce)
let summa = products.reduce((sum, product) => {
  return sum + product.price;
}, 0);
console.log(summa);

// 13. Faqatgina products nomlaridangina iborat bo'lgan massiv
// qaytaring. (map)
let names = products.map((product) => product.name);
console.log(names);

// 14. Id si 5 bo'lgan elementni nomini qaytaruvchi dastur yozing.
// (find)
const product = products.find((item) => item.id === 4);
console.log(product.name);

console.log("============= 15 - ... =======================");

// 15. Id si 4 bo'lgan productni o'chiruvchi dastur yozing. (filter)
let products15 = [
  {
    id: 6,
    name: "Smarthpone",
    price: 12000,
    rating: 4.5,
    discount: 20,
  },
  {
    id: 2,
    name: "Acer",
    price: 10000,
    rating: 4.3,
    discount: 10,
  },
  {
    id: 1,
    name: "Mac book",
    price: 17000,
    rating: 4.7,
    discount: 40,
  },
  {
    id: 4,
    name: "HP",
    price: 21000,
    rating: 4.1,
    discount: 30,
  },
  {
    id: 5,
    name: "Dell",
    price: 35000,
    rating: 4.9,
    discount: 30,
  },
];
products15 = products15.filter((product) => product.id !== 4);
console.log(products15);

// 16. Berilgan satrni faqatgina harflardan iborat ekanligiga
// tekshiring (split, every)
let ism = "Abdulaziz";
let result16 = ism.split("").every((belgi) => {
  return belgi.toLowerCase() !== belgi.toUpperCase();
});
console.log(result16);
// 17. Massiv truthy va falsy elementlardan tuzilgan. O’sha
// massivdagi truthy va falsy elementlarni alohida massivlarga
// ajratib object qilib qaytaruvchi getTruthyFalsy funksiya tuzing.
// (filter)
// Abdulaziz Programmer
// Input: [false, 1, 10, "", null, "abdulaziz", 1.13, 0]
// Output: {truthy: [1, 10, "abdulaziz", 1.13], falsy: [false, "",
// null, 0]}
function getTruthyFalsy(arr) {
  let truthy = arr.filter((item) => item);
  let falsy = arr.filter((item) => !item);
  return {
    truthy: truthy,
    falsy: falsy,
  };
}
let result17 = getTruthyFalsy([false, 1, 10, "", null, "abdulaziz", 1.13, 0]);
console.log(result17);

// 18. Satr berilgan.
// Satrdagi so'zlar uzunligidan iborat bo'lgan massiv qaytaring.
// (split, map)
// Input: "Men Abdulaziz Programmerman"
// Outpu: [3, 9, 13]
let info = "Men Abdulaziz Programmerman";
let result18 = info.split(" ").map((word) => word.length);
console.log(result18);

// 19. Satrni bo'sh joy bor yoki yo'qligini tekshiring. (split,
// some)
// Input: "Men Abdulaziz Programmerman"
// Output: true
let infoMe = "Men Abdulaziz Programmerman";
let result19 = infoMe.split("").some((belgi) => belgi === " ");
console.log(result19);

// 20. Objectning kalit va qiymatlarining string ko'rinishidagi
// yig'indisidan iborat massiv qaytaring. (Object.entries, map,
// join)
// Input: {a: 2, b: 5, c: 7}
// Output: ['a2', 'b5', 'c7']
let obj = {
  a: 2,
  b: 5,
  c: 7,
};
let result20 = Object.entries(obj).map((item) => item.join(""));

console.log(result20);

// 21. Sonning raqamlari yig'indisini hisoblab beradigan digitSum()
// funksiya yozing. (rekursiv funksiya)
function digitSum(son) {
  if (son < 10) {
    return son;
  }
  return (son % 10) + digitSum(Math.floor(son / 10));
}
console.log(digitSum(1234));
// 22. Quyidagi pupils massividagi barcha o'quvchilarni
// protcentlarining o'rtacha qiymatini toping. (reduce)
// Pupils massividagi ojectlarga quyidagi propertylarni qo'shib
// yangi massiv qaytaring. (map)
// 23. grade propertyga protcent 90-100 o'rtasida bo'lsa 5, 80-90
// o'rtasida bo'lsa 4, 70-80 o'rtasida bo'lsa 3 bahoni, qolgan
// holatlarda 2 bahoni o'zlashtiring.(map)
// 24. isPassed propertyga protcent 70 dan o'tsa true, aks holda
// false qiymat o'zlashtirilsin. (map)
// 25. Necha kishi imtihondan o'tdi va necha kishi imtihonda o'ta
// olmadi shuni ham hisoblang. (reduce)
// const pupils = [
// {
// name: "Elbek",
// protcent: 95,
// },
// {
// name: "Zafar",
// Abdulaziz Programmer
// protcent: 78,
// },
// {
// name: "Aziz",
// protcent: 83,
// },
// {
// name: "Jasur",
// protcent: 88,
// },
// {
// name: "Bobur",
// protcent: 66,
// },
// {
// name: "Kamron",
// protcent: 75,
// },
// ];
