const x = 0;
const y = 0;
const coordinate = {x, y}; // {x: x, y: y};
console.log(coordinate);

function makeObj(name, age) {
    return {
        name,
        age,
    }
}
console.log(makeObj('jade', 27));