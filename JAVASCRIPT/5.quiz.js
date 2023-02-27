// 퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input: ['🍌', '🍓', '🍇', '🍓']
// output: ['🍌', '🥝', '🍇', '🥝']

function replace(array, from, to) { // 재사용성을 높이기 위해 from, to 사용
    const replaced = Array.from(array); // 새로운 배열을 만듬

    for (let i = 0; i < replaced.length; i++) {
        if(replaced[i] === from) {
            replaced[i] = to;
        }
    }
    return replaced;
}

const array = ['🍌', '🍓', '🍇', '🍓'];
const result = replace(array, '🍓', '🥝');
console.log(result);

// 퀴즈2:
// 배열과 특정한 요소를 전달받아,
// 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
// input: [ '🍌', '🥝', '🍇', '🥝' ], '🥝'
// output: 2
function count(array, item) {
    let counter = 0;
    for(let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            counter++;
        }
    }
    return counter;
}

console.log(count([ '🍌', '🥝', '🍇', '🥝' ], '🥝'));

// 퀴즈3: 배열1, 배열2 두개의 배열을 전달받아,
// 배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input: ['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🍇' ]
function match(input, search) {
    const result = [];
    for(let i = 0; i < input.length; i++) {
        if(search.includes(input[i])) { // includes()메서드는 배열이 항목 중 특정 값을 반환 true하거나 false적절하게 포함하는지 여부를 결정
            result.push(input[i]); // push()메서드는 배열 끝에 하나 이상의 요소를 추가하고 배열의 새 길이를 반환
        }
    }
    return result;
}
console.log(match(['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']));