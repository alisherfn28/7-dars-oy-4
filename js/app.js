///////////////////Math functions//////////////////

//1-masala;

// let tasodifiy = Math.trunc(Math.random() * 100);

// console.log(tasodifiy);

//2-masala;

// let son = +prompt("Son kiriting ...");

// if (son > 0) {
//   console.log(son ** 2);
// } else {
//   console.log("Musbat son kiriting");
// }

//3-masala;

// let son1 = +prompt("1-son kiriting");
// let son2 = +prompt("2-son kiriting");
// let son3 = +prompt("3-son kiriting");
// let son4 = +prompt("4-son kiriting");
// let son5 = +prompt("5-son kiriting");

// let max = Math.max(son1, son2, son3, son4, son5);
// let min = Math.min(son1, son2, son3, son4, son5);

// console.log(`Katta son ${max}`);
// console.log(`Kichikta son ${min}`);

//4-masala;

// let son = +prompt("Iltimos xaqiqiy son kiriting");

// console.log(`Pasga yaxlitlash:${Math.floor(son)}`);
// console.log(`Tepaga yaxlitlash:${Math.ceil(son)}`);

//////////////////Ternary operator//////////////////

//1-masala;

// let son = +prompt("Iltimos son kiriting");

// son > 0 ? console.log("Musbat son") : console.log("Manfiy son");

//2-masala;

// let userAge = +prompt("Iltimos yoshingizni kiriting");

// userAge >= 18 ? console.log("Ruxsat etilgan") : console.log("Ruxsat etilmagan");

//3-masala;

// let son = +prompt("Iltimos son kiriting");

// son % 2 == 1 ? console.log("Toq son") : console.log("Juft son");

////////////////////////for sikl operatori////////////////////////

//1-masala;

// for (let i = 1; i < 20; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

//2-masala;

// let sum = 0;

// for (let i = 0; i < 10; i++) {
//   let son = +prompt(`${i}-sonni kiriting`);
//   if (son > 0) {
//     sum += son;
//   }
// }

// console.log(`Yig'indisi: ${sum}`);

//3-masala;

// for (let i = 1; i < 100; i++) {
//   if (i >= 30 && i <= 50) {
//     console.log(i);
//   }
// }

//4-masala;

// let musbat = 0;
// let manfiy = 0;

// for (let i = 1; i < 15; i++) {
//   let son = +prompt(`${i}-sonni kiriting`);
//   if (son > 0) {
//     musbat++;
//   } else {
//     manfiy++;
//   }
// }
// console.log(`Musbat sonlar soni: ${musbat}`);
// console.log(`Manfiy sonlar soni: ${manfiy}`);

//5-masala;

// let sum = 0;

// for (let i = 1; i <= 50; i++) {
//   if (i % 2 !== 0) {
//     sum += i;
//   }
// }
// console.log(`Toq sonlar yig'indisi: ${sum}`);

//6-masala;

// for (let i = 1; i <= 5; i++) {
//   let yoshi = +prompt(`${i}-nchi odamni yoshini kiriting`);
//   if (yoshi >= 18) {
//     console.log("Voyaga yetgan");
//   } else {
//     console.log("Voyaga yetmagan");
//   }
// }

//7-masala;

// let sum = 0;

// for (let i = 1; i <= 100; i++) {
//   if (i % 2 == 0) {
//     sum++;
//     console.log(i);
//   }
// }

// console.log(`Juft sonlar soni: ${sum}`);

//8-masala;

// let sum = 0;

// let sum = 0;

// for (let i = 1; i <= 10; i++) {
//   let son = +prompt(`${i}-sonni kiriting`);
//   if (son >= 5 && son <= 10) {
//     sum++;
//   }
// }

// console.log(`5 va 10 orasidagi sonlar : ${sum}`);

//9-masala;

// for (let i = 1; i <= 10; i++) {
//   let son = +prompt(`${i}-sonni kiriting`);
//   if (son > 0) {
//     console.log(`Musbat son: ${son}`);
//   }
// }

//10-masala;

// let count = 0;

// for (let i = 1; i <= 15; i++) {
//   let son = +prompt(`${i}-sonni kiriting`);
//   if (son % 2 == 0 || son < 0) {
//     count++;
//     console.log(`Juft yoki manfiy son: ${son}`);
//   }
// }
// console.log(`Juft yoki manfiy sonlar soni: ${count}`);

//11-masala;

// for (let i = 1; i <= 50; i++) {
//   if (i % 3 == 0) {
//     console.log(i);
//   }
// }

//12-masala;

// let count = 0;

// for (let i = 1; i <= 10; i++) {
//   let son = +prompt(`${i}-sonni kiriting`);
//   if (son >= 50) {
//     count++;
//     console.log(son);
//   }
// }

// console.log(`50 dan katta sonlar soni: ${count}`);

//13-masala;

// for (let i = 1; i <= 10; i++) {
//   let son = +prompt(`${i}-sonni kiriting`);
//   if (son === 0) {
//     console.log(son);
//     console.log("0 - mavjud");
//     break;
//   }
// }
