function getBanana() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('🍌');
    }, 1000);
  });
}

function getApple() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('🍎');
    }, 3000);
  });
}

function getOrange() {
  return Promise.reject(new Error('no orange'));
}

// 바나나와 사과를 같이 가지고 오기
async function fetchFruits() {
  // async를 사용하면 함수 안에 비동기적인 코드를 동기적으로 절차적으로 사용 가능
  const banana = await getBanana(); // promise를 return하는 함수 호출은 await를 사용하여 기다렸다가 할당
  const apple = await getApple();
  return [banana, apple];
}
fetchFruits()
.then(fruits => console.log(fruits))