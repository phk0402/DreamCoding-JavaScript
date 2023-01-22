// 매개변수의 기본값은 무조건 undefined
// 매개변수의 정보는 함수 내부에서 접근이 가능한 arguments라는 객체에 저장됨
// 매개변수 기본값 Default Parameters a = 1, b = 1 (다만 undefined인 경우에만 기본값을 씀 / 외부에서 값이 주어진 경우엔 외부에 있는 값을 씀)
function add(a = 1, b = 1) {
    console.log(a);
    console.log(b);
    console.log(arguments);
    console.log(arguments[1]);
    return a+b;
}
add(2, 2);

// Rest 매개변수 Rest Parameters
function sum(a, b, ...numbers) {
    console.log(a);
    console.log(b);
    console.log(numbers);
}
sum(1, 2, 3, 4, 5, 6, 7, 8);