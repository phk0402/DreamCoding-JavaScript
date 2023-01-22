// 함수 선언문 function name() { }
// 함수 표현식 const name = function () { }
let add = function (a, b) {
    return a + b;
};
console.log(add(1, 2));

// 화살표 함수 const name = () => { }
add = (a, b) => {
    return a + b;
};
// 똑같은 방식으로 사용가능한 방법 -> // add = (a, b) => a + b;
console.log(add(1, 2));

// 생성자 함수 const object = new Function(); // 뒤 객체편에서 다룸

// IIFE (Immediately-Invoked Function Expressions) // 많이 사용되는 표현식은 아님
(function run() {
    console.log('🥰');
})();