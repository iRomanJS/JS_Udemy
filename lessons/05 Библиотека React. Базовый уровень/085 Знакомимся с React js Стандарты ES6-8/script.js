let a = 0;
console.log(a);

let names = ['Ivan', 'Ann', 'Ksenia', 'Volddemart'];

let shortNames = names.filter((name) => {
    return name.length < 5;
});

console.log(shortNames);

let answers = ['IvAn', 'AnnA', 'HeLLo'];

answers = answers.map((item) => item.toLowerCase());

console.log(answers);

console.log(`Пользователь ${name}, ${age} лет`);

function fetchData(data, count = 0) {
    console.log(`Данные: ${data} в количестве ${count}`);
}

fetchData('somthing');

function max (a, b, ...numbers) {
    console.log(numbers);
}

max(3, 4, 67, 99);

const arr1 = [1, 2, 5],
      arr2 = [43, 2, 6];

const res = Math.max(1, ...arr1, 1000, ...arr2);
console.log(res);


const avatar = 'Photo';

const user = {
    name: 'default',
    pass: 'qwerty',
    rights: 'user'
};

const admin = {
    name: 'admin',
    pass: 'root'
};

// const res = Object.assign({}, user, admin);

const res = {...user, ...admin, avatar};

console.log(res);

const x = 25, y = 10;

const coords = {
    x: x,
    y: y,
    calcSq: function() {
        console.log(this.x*this.y);
    }
};

const coords = {x, y,
    calcSq() {
        console.log(this.x*this.y);
    }
};
coords.calcSq();

console.log(coords);


const user = {
    name: {
        first: 'Sam',
        second: 'Smith'
    },
    pass: 'qwerty',
    rights: 'user'
};

const userName = user.name;

const {name: {first, second}, pass, rights} = user;

console.log(first, second);


function connect({
    host = 'localhost',
    port = 3000,
    user = 'default'})
     {
        console.log(`host: ${host}, port: ${port}, user: ${user}`)
}

connect({
    host: 'localhost',
    port: 3000,
    user: 'defoult'
});