"use strict";

// 1-Masala

// const countOccurancies = (arr) => {
//   let counts = {};

//   for (const num of arr) {
//     counts[num] = counts[num] ? counts[num] + 1 : 1;
//   }

//   let s = "";
//   for (const item in counts) {
//     s += `${item} (${counts[item]} times) `;
//   }
//   return s;
// };
// console.log(countOccurancies([5, 5, 5, 5, 4, 4, 2, 2, 3, 3, 3, 1]));
// ================================================================

// 2-Masala
// const rangeBetween = (start, end) => {
//   let result = [];

//   for (let i = start; i <= end; i++) {
//     result.push(i);
//   }

//   return result;
// };

// console.log(rangeBetween(4, 7));
// ================================================================

// 3-Masala

// const swapIndexes = (arr, i1, i2) => {
//     if (i1 < 0) i1 = arr.length + i1;
//     if (i2 < 0) i2 = arr.length + i2;

//     let tmp = arr[i1];
//     arr[i1] = arr[i2];
//     arr[i2] = tmp;

//     return arr;
// }

// console.log(swapIndexes([10, 20, 30, 40, 50], -1, -2))
// ================================================================

// 4-Masala OBJECT=>ARRAY

// const objetcts2Array = (objs) => {
//   let result = [];

//   for (let i = 0; i < objs.length; i++) {
//     result.push(objs[i]["title"]);
//     result.push(objs[i]["author"]);
//     result.push(objs[i]["libraryID"]);
//   }

//   return result;
// };

// const library = [
//   { title: "The Road Ahead", author: "Bill Geats", libraryID: 1254 },
//   { title: "Walter Issacson", author: "Stive Jobs", libraryID: 4264 },
//   {
//     title: "Mockingjay:The Final Book of The Hunger Games",
//     author: "Suzanne Collins",
//     libraryID: 3245,
//   },
// ];

// console.log(objetcts2Array(library));
// ================================================================

// 5-Masala  ARRAY=>OBJECT
// const array2Objects = (arr) => {
//   let result = [];

//   for (let i = 0; i < arr.length - 2; i += 3) {
//     const obj = {
//       title: arr[i],
//       author: arr[i + 1],
//       libraryID: arr[i + 2],
//     };

//     result.push(obj);
//   }

//   return result;
// };

// const array = [
//   "The Road Ahead",
//   "Bill Geats",
//   1254,
//   "Walter Issacson",
//   "Stive Jobs",
//   4264,
//   "Mockingjay:The Final Book of The Hunger Games",
//   "Suzanne Collins",
//   3245,
// ];

// console.log(array2Objects(array));
