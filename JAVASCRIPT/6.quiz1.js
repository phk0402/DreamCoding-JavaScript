// 카운터 만들기
// 0 이상의 값으로 초기화 한 뒤 하나씩 숫자를 증가할 수 있는 카운터 만들기
// Counter 클래스 만들기

class Counter {
    #value;
    constructor(startValue) {
        if(isNaN(startValue) || startValue < 0) {
            this.#value = 0;
        } else {
            this.#value = startValue;
        }
    }

    get value() {
        return this.#value;
    }
    increment = () => {
        this.#value++;
    }
}

// counter라는 인스턴스 객체를 Counter라는 클래스를 통해서 생성
// 셍성할때 내가 원하는 값을 전달할 수 있음 -> new Counter(0)
const counter = new Counter(0);

// increment라는 함수를 호출
counter.increment(); //1
counter.increment(); //2

// 콘솔로그를 이용해서 counter에 있는 현재 value를 출력
console.log(counter.value);

// --> Counter 클래스는 increment라는 api 함수를 통해서 값을 하나씩 증가
// --> value라는 속성 poperty를 통해서 사용자가 현재 값을 확인