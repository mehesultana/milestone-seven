//37-6 setInterval and clearInterval with x++ and ++x
console.log('first');
// setInterval(() => {
//     console.log('tik tik tik tik')
// }, 1000)

let seconds = 0;

const timeId = setInterval(() => {
    //seconds++;
    console.log(++seconds);
    if (seconds > 7) {
        clearInterval(timeId);
    }
}, 1000);
console.log('second');
