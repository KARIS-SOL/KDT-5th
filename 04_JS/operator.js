//나머지 연산자
let num = Math.floor(Math.random() * 10) //랜덤 안에는 소수점 숫자들이 들어간다 최소 floor : 소수점을 버리고 정수로 나오게 하는것 
console.log(num);

console.log(num % 2 );

//거듭 제곱
console.log(2 ** 4);
console.log(Math.sqrt(4));   //sqrt = 루트임 

//연산자 줄여쓰기
let num2 = 5;
num2 = num2 * 5;

let num3 = 5;
num3 *= 5;

console.log('연산자줄여쓰기', num2, num3);


//증가 감소 연산자
let num4 = 10; 
//뒤로++
console.log('증가감소 연산자', num4++);  //10 이 나오는 이유 : ++를 뒤에붙으면 다음줄로 가야 반영이됨
console.log('증가감소 연산자', num4++);  // 이때부터 11 이나옴 
//++앞으로
console.log('증가감소 연산자', ++num4); // 11 이래야 바로 11부터 나옴 
console.log('증가감소 연산자', num4 += 1); // 12


//비교연산자
let a = 5;
let b = '5';

console.log('비교연산자', a === b);