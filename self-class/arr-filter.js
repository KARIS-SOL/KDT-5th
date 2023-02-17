//배열함수  filter 
// 조건에 부합하는 배열 요소만을 반환
// arr.filter(function(매개변수){return 조건});

let numbers = [1, 2, 3, 4, 5, 6];
let arr;

arr = numbers.filter((num) => num > 3);
console.log(arr);


const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6 );
console.log(result);