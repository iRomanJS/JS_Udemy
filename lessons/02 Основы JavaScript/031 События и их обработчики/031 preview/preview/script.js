const btns = document.querySelectorAll('button'),
      overlay = document.querySelector('.overlay');

// btn.onclick = function () {
//     alert('Click');
// };

// btn.onclick = function () { // второй клик затрет первый клик если использовать такую функцию
//     alert('Second click');
// };

// btn.addEventListener('click', (e) => {
//     e.target.remove();
//     // console.log('Hover');

// });

// btn.addEventListener('click', () => {
//     alert('Second click');
// });

let i = 0;

const deleteElement = (e) => {
   console.log(e.target);
   console.log(e.type);
//    i++;
//    if (i == 1) {
//        btn.removeEventListener('click', deleteElement);
//    }
};

// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);

btns.forEach(btn => {  //если мы хотим добавить действие на все елементы блока btns
    btn.addEventListener('click', deleteElement, {once: true});
    
}); 

const link = document.querySelector('a');

link.addEventListener('click', function(event) {
    event.preventDefault();
    console.log(event.target);
});