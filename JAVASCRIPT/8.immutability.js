// 함수내부에서 외부로부터 주어진 인자의 값을 변경하는 것은 💩
// 상태변경이 필요한 경우에는, 새로운 상태를(오브젝트, 값) 만들어서 반환해야 함 ✨
// 원시값 - 값에 의한 복사
// 객체값 - 참조에 의한 복사 (메모리주소)
function display(num) {
    num = 5; // ❌
    console.log(num);
}
const value = 4;
display(value);
console.log(value);

function displayObj(obj) {
    obj.name = 'Bob'; // ❌❌❌❌❌ 외부로 부터 주어진 인자(오브젝트)를 내부에서 변경 ❌
    console.log(obj);
}
const ellie = {name: 'Ellie'};
displayObj(ellie);
console.log(ellie);

function changeName(obj) { // 이름부터 변경하는 느낌을 주도록!
    return {...obj, name: 'Bob'}; // 반환할때는 새로운 오브젝트 만들기!
}