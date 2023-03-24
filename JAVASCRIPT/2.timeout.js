function excute() {
    console.log('1');
    setTimeout(() => {
        console.log('2');
    }, 3000);
    console.log('3');
}

excute(); // 1 3 2