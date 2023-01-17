// 동등 비교 관계 연산자 Equailty Operators
// == 값이 같음
// != 값이 다름
// === 값과 타입이 둘다 같음
// !== 값과 타입이 둘다 다름
console.log(2 == 2);
console.log(2 != 2);
console.log(2 != 3);
console.log(2 == 3);
console.log(2 == '2');
console.log(2 === '2'); // ✨
console.log(true == 1);
console.log(true === 1);
console.log(false == 0);
console.log(false === 0);
console.clear();

const obj1 = {
    name: 'js',
}

const obj2 = {
    name: 'js',
}

console.log(obj1 == obj2); // false
console.log(obj1 === obj2); // false
// => 서로 다른 메모리 주소를 갖고 있기 때문에 false
console.log(obj1.name == obj2.name);
console.log(obj1.name === obj2.name);

let obj3 = obj2;
console.log(obj3 == obj2); // true
console.log(obj3 === obj2); // true
// => 동일한 메모리 주소를 갖고 있기 때문에 true