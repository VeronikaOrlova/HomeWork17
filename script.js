
const n = prompt('Введите число:');

function* generator(n) {
    let result = 1;
    for (let i = 1; i <= n; i++){
         result = result * i;
    }
    yield result;
}

const gen = generator(n);
alert(...gen);
