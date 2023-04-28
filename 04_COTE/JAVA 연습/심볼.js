// Symbol 객체는, 유일한 property 를 만들고 싶을 때 사용한다

const a = Symbol(); // new를 붙히지 않는다! /  유일한 식별자를 만들때 사용
const b = Symbol();

console.log(a);
// Symbol()
console.log(b);
// Symbol()


// 동등 연산자여도 false 가 나온다 -> 유일한 식별자 이기 때문
a === b;  // false
a == b; // false 

