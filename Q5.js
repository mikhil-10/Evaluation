const a = [1, 2, 3, 4, 5]

const b = a.map((a) => {
    return a ** 2;
})

console.log(b);

const c = a.filter((a) => {
    return a % 2 == 0;
})

console.log(c);

const d = a.reduce((s, a) => {
    return s += a;
})
console.log(d);