// 조건문 Conditional Statement
// Switch
// if else if else if else if ... else
// 정해진 범위 안의 값에 대해 특정한 일을 해야 하는 경우 -> Switch 사용가능
let day = 0; // 0: 월요일, 1: 화요일... 6: 일요일
let dayName;
if (day === 0) {
    dayName = '월요일';
} else if(day === 1) {
    dayName = '화요일';
} else if(day === 2) {
    dayName = '수요일';
} else if(day === 3) {
    dayName = '목요일';
} else if(day === 4) {
    dayName = '금요일';
} else if(day === 5) {
    dayName = '토요일';
} else if(day === 6) {
    dayName = '일요일';
}

switch (day) {
    case 0: dayName = '월요일';
        break
    case 1: dayName = '화요일';
        break
    case 2: dayName = '수요일';
        break
    case 3: dayName = '목요일';
        break
    case 4: dayName = '금요일';
        break
    case 5: dayName = '토요일';
        break
    case 6: dayName = '일요일';
        break
    default:
        console.log('해당하는 요일이 없음!');
}
console.log(dayName);

// 여러가지 케이스 별로 제어 가능
let condition = 'bad'; // okay, good -> 좋음!, bad -> 나쁨!
switch(condition) {
    case 'okay':
    case 'good':
        text = '좋음!';
        break;
    case 'bad':
        text = '나쁨!';
        break;
}
console.log(text);