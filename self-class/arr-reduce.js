// Reduce 는 가장 많은 기능을 할 수 있음 
// arr.reduce(function(누산기, 배열의 값, 인덱스, 원본배열), 누산기 초기값);
// 누산기 (acc)
// 현재 값 (cur)
// 현재 인덱스 (idx)
// 원본 배열 (src)

const arr = [1, 2, 3, 4, 5];
const result = arr.reduce((acc, item, index) => {
    return (acc += item);
}, 0);

console.log(result);

// 쉽게 표현하기 - 코딩앙마
// 초기값은 0 이고 optional 하기 때문에 안적어도 되지만 이게 100 일때도 있음 
0 + 1 = 1
1 + 2 = 3
3 + 3 = 6
6 + 4 = 10
10 + 5 = 15 

let arr = [1, 2, 3, 4, 5];
const result1 = arr.reduce((prev, cur) => {
    return prev + cur;   
}, 0); 

console.log(result1);  //15

// 다른예시 리스트 중 성인만 뽑아서 정렬

let userList = [
  { name : "Mike", age : 30 },
  { name : "Tom", age : 10 },
  { name : "Jane", age : 27 },
  { name : "Sue", age : 26 },
  { name : "Harry", age : 42 },
  { name : "Steve", age : 13 },
];

let result2 = userList.reduce((prev, cur) => {
  if (cur.age > 19 ) {
    prev.push(cur.name);
  } 
  return prev;

}, []);

console.log(result2);

// 값을 다 합쳐보려면

let result3 = userList.reduce((prev, cur) => {
  return (prev += cur.age);
}, 0);

console.log(result3);

// 이름이 3글자인 사람만 찾아보기

let result4 = userList.reduce((prev, cur) => {
  if (cur.name.length ===3 ) {
    prev.push(cur.name);
  } 
  return prev;
}, []);

console.log(result4);