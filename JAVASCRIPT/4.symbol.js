// Symbol 심볼
// 유일한 키를 생성할 수 있음 🔑
const map = new Map();
// const key1 = 'key';
// const key2 = 'key';
const key1 = Symbol('key');
const key2 = Symbol('key');
map.set(key1, 'Hello');
console.log(map.get(key2));
console.log(key1 === key2);
//=> 같은 문자열이라도 서로 다른 심볼을 만들고 싶을 때

// 동일한 이름으로 하나의 키를 사용하고 싶다면, Symbol.for
// 전역 심볼 레지스트리 (Global Symbol Registry)
const k1 = Symbol.for('key');
const k2 = Symbol.for('key');
console.log(k1 === k2);
//=> 동일한 문자열에 동일한 심볼을 만들고 싶을

console.log(Symbol.keyFor(k1));
//=> 해달 심볼의 문자열을 알고 싶을 때 .keyFor
console.log(Symbol.keyFor(key1));

const obj = {
    [k1]: 'Hello',
    [Symbol('key')]: 1
};
console.log(obj);
console.log(obj[k1]);
console.log(obj[Symbol('key')]);