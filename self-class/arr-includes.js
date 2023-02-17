//배열함수, includes
//해당 배열에 지정한 요소가 있는지 확인하는 메소드
// arr.include(요소);

let numbers = [1, 2, 3, 4, 5, 6];

console.log(numbers.includes(3));  // true
console.log(numbers.includes(7));  // false 

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

console.log(words.includes('elite'));  //true
console.log(words.includes('pororo')); //false 