// 정직원과 파트타임직원을 나타낼 수 있는 클래스를 만들어 보자
// 직원들의 정보: 이름, 부서이름, 한달 근무 시간
// 매달 직원들의 정보를 이용해서 한달 월급을 계산할 수 있다
// 정직원은 시간당 10000원
// 피트타임 직원은 시간당 8000원

// class Type {
//     constructor(name, position, workTime) {
//
//     }
// }

class Employee {
    constructor(name, department, hourPerMonth, payRate) {
        this.name = name;
        this.department = department;
        this.hourPerMonth = hourPerMonth;
        this.payRate = payRate;
    }
    calculatePay() {
        return this.hourPerMonth * this.payRate;
    }
}

class FullTimeEmployee extends Employee {
    static PAY_RATE = 10000;
    constructor(name, department, hourPerMonth) {
        super(name, department, hourPerMonth, PAY_RATE);
    }
}
class PartTimeEmployee extends Employee {
    static PAY_RATE = 8000;
    constructor(name, department, hourPerMonth) {
        super(name, department, hourPerMonth, PAY_RATE);
    }
}

const ellie = new FullTimeEmployee('엘리', 's/w', 30);
const bob = new PartTimeEmployee('밥', 's/w', 20);
console.log(ellie.calculatePay);
console.log(bob.calculatePay);