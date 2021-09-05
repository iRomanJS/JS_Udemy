"use strict";

// const now = new Date('2021-09-05');
//  new Date.parse('2021-09-05');

// console.log(now.setHours(40));
// console.log(now);

// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getHours());
// // console.log(now.getMinutes());
// // console.log(now.getMilliseconds());
// // console.log(now.getDay());
// console.log(now.getUTCHours());

// console.log(now.getTimezoneOffset());

// console.log(now.getTime());
// console.log(now);

let start = new Date();

for (let i = 0; i < 10000000; i++) {
    let some = i ** 2;
}

let end = new Date();

alert(`Цикл отработал за ${end - start} миллисекунд`);