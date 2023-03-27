function runInDelay(seconds) {
    return new Promise((resolve, reject) => {
        if(!seconds || seconds < 0) {
            reject(new Error('seconds가 0보다 작음'))
        }
        setTimeout(() => {
            resolve();
        }, seconds * 1000)
    });
}

runInDelay(2)
    .then(() => console.log('타이머 완료!')) //필요한 일을 수행
    .catch(console.error) // 에러를 처리
    .finally(() => console.log('끝났다!')); // 최종적으로 무조건 호출!