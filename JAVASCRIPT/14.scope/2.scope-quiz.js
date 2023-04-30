{
  const x = 1;
  {
    const y = 2;
    console.log(x); // 1
  }
  console.log(x); // 1
  console.log(y); // app crush
}

const text = 'globbal'; // 전역 변수
  {
    const text = 'inside block1';
    {
      console.log(text); // inside block1
    }
  }