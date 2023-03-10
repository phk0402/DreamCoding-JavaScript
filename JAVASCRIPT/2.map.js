const map = new Map([
    ['key1', 'π'],
    ['key2', 'π'],
]);
console.log(map);

// μ¬μ΄μ¦ νμΈ
console.log(map.size);

// μ‘΄μ¬νλμ§ νμΈ
console.log(map.has('key1'));
console.log(map.has('key6'));

// μν
map.forEach((value, key) => console.log(key, value));
console.log(map.keys());
console.log(map.values());
console.log(map.entries());

// μ°ΎκΈ°
console.log(map.get('key1'));
console.log(map.get('key2'));
console.log(map.get('key4'));

// μΆκ°
map.set('key3', 'π₯');
console.log(map);

// μ­μ 
map.delete('key3');
console.log(map);

// μ λΆμ­μ 
map.clear();
console.log(map);

// μ€λΈμ νΈμμ ν° μ°¨μ΄μ ??
const key = { name: 'milk', price: 10 };
const milk = { name: 'milk', price: 10, description: 'λ§μλμ°μ ' };
const obj = {
    [key]: milk,
}
console.log(obj);
const map2 = new Map([[key, milk]]);
console.log(map2);
console.log(obj[key]);
console.log(map2[key]);
console.log(map2.get(key));