// 퀴즈!
// 1. 문자열의 모든 캐릭터를 하나씩 출력하라
const text = 'Hello World!';
// console.log(text[0]);
// console.log(text[1]);
// console.log(text[2]);
// console.log(text[3]);
// console.log(text[4]);
// console.log(text[5]);
// console.log(text[6]);
// console.log(text[7]);
// console.log(text[8]);
// console.log(text[9]);
// console.log(text[10]);
// console.log(text[11]);

for (let i =0; i < text.length; i++) {
    console.log(text[i]);
}

// 2. 사용자들의 id를 잘라내어 각각의 id를 배열로 보관
const ids = 'user1, user2, user3, user4';
//['user1', 'user2', 'user3', 'user4']
const array = ids.split(',');
console.log(array);

// 3. 1초에 한 번씩 시계를 (날짜포함) 출력해보자
setInterval(()=> {
    const now = new Date();
    console.log(now.toLocaleString('ko-KR'));
}, 1000);
