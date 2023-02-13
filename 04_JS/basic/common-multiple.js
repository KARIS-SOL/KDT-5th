//2의 배수와 5의 배수 구하기 

let sum = 0;

for (let i = 0; i < 101; i++) {
  if (i % 2 === 0 || i % 5 === 0) {
    sum += i;
  }
}
console.log(sum);