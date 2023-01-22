// 사용예제 1
function add(a, b) {
    // const result = a + b;
    // return result;
    console.log('function');
    return a + b;
}
const result = add(1, 2);
console.log(result);

// 사용예제 2
function fullName(firstName, lastName) {
    return `${lastName} ${firstName} 👋`;
}

let lastName = '지수';
let firstName = '김';
console.log(fullName(firstName, lastName));

let lastName2 = '현경';
let firstName2 = '박';
console.log(fullName(firstName2, lastName2));

