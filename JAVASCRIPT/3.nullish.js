// Nullish Coalescing Operator
// ES11 (ECMAScript 2020)
// ?? null, undefined
// || 값이 falshy한 경우 설정(할당) 0, -0, ''
let num = 0;
console.log(num || '-1'); // -1
console.log(num ?? '-1'); // 0