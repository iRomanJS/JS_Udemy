"use strict";


// filter - метод для отбора данных внутри массива и вывода их в отдельный объект

// const names = ['Ivan', 'Ann', 'Ksenia', 'Valdemart'];

// const shortNames = names.filter(function(name) {
//     return name.length < 5;
// });

// console.log(shortNames);


// map - метод для изменения всех данных внутри массива

// const answers = ['IvAn', 'AnnA', 'Hello'];   // 17-21 правильно создавать отдельные объекты 

// const result = answers.map(item => item.toLowerCase());

// console.log(result);

// let answers = ['IvAn', 'AnnA', 'Hello'];     // 23-27 это не считаеться правльно но тоже работает

//     answers = answers.map(item => item.toLowerCase());

// console.log(answers);


// every/some - метод проверки данных на булиновое значение тру или фальш

// const some = [4, 2, 3];

// console.log(some.some(item => typeof(item) === 'number'));

// console.log(some.every(item => typeof(item) === 'number'));


// reduce  - метод для схлопования массива в одно единое целое мы сделали сумму масива и вывели в однустроку текстовые значения

// const arr = [4, 5, 1, 3, 2, 6];


// const res = arr.reduce((sum, current) => sum + current, 3);

// console.log(res);


// const arr = ['apple', 'pear', 'plum'];

// const res = arr.reduce((sum, current) => `${sum}, ${current}`);

// console.log(res);


const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal'
};

const newArr = Object.entries(obj)
.filter(item => item[1] === 'persone')
.map(item => item[0]);

console.log(newArr);