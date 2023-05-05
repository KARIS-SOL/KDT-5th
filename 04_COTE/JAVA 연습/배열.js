// Array
// push() :  뒤에 삽입
// pop() : 뒤에 삭제
// unshift : 앞에 삽입
// shift : 앞에 삭제

// arr.aplice(n, m ) : 특정 요소 지움  ->  n: 시작, m: 개수
let arr = [1, 2, 3, 4, 5]; // 여기서 인덱스는 0 1 2 3 4 임
arr.splice(1, 2); // 그러므로 1 부터 두개를 지워야 함

console.log(arr); // [1,4,5]

// arr.splice(n, m , x)  : 특정 요소 지우고 x 를 추가
let arr1 = [1, 2, 3, 4, 5]; // 여기서 인덱스는 0 1 2 3 4 임
arr1.splice(1, 3, 100, 200); // 1 부터 3개를 지우고 100 과 200 을 추가한다

console.log(arr1); //[1, 100, 200, 5]

let arr2 = ["나는", "철수", "입니다"];
arr2.splice(1, 0, "대한민국", "소방관");

console.log(arr2);

//arr.splice() : 삭제된 요소 반환 -> 삭제된 배열이 나옴
let result = arr.splice(1, 2);
console.log(result);

//arr.slice(n,m)  -> n 부터 m 까지 반환 (m앞까지만 반환)
let arr3 = [1, 2, 3, 4, 5];
arr3.slice(1, 4);
console.log(arr3); // [2,3,4]

// arr.concat(arr2, arr3...) : 합쳐서 새배열 반환
let arr4 = [1, 2];
arr4.concat([3, 4]);
// console.log(arr4);

// arr.forEach(fn) : 배열 반복
let users = ["Mike", "Tom", "Jane"];
users.forEach((name, index) => {
  console.log(`${index + 1}. ${name}`);
});

// arr.includes() : 포함하고 있는지 확인
let arr5 = [1, 2, 3];
arr5.includes(2); // true
arr5.includes(8); // false

// arr.filter() : 조건에 있는 모든 값을 반환함. find 와 findindex 는 첫 번째 값만 반환됨
const arr6 = [1, 2, 3, 4, 5, 6];

const result1 = arr6.filter((item) => {
  return item % 2 === 0;
});
console.log(result1);

// arr.reverse() : 역순으로 재정렬  -> 게시판 내에서 가장 최근에 작성된 글 순서로 정렬할때 많이 사용함
arr6.reverse(); // [6,5,4,3,2,1]

// arr.map(fn) : 함수를 받아 특정기능을 시행하고 새로운 배열을 반환  -> 실무에서 많이쓰이므로 연습 꼭할 것

let userList = [
  { name: "Mike", age: 30 },
  { name: "Jane", age: 27 },
  { name: "Tom", age: 10 },
];

let newUserList = userList.map((user, index) => {
  return Object.assign({}, user, {
    id: index + 1,
    isAdult: user.age > 19,
  });
});

console.log(newUserList);

// join, split

let arr7 = ["안녕", "나는", "솔이야"];

let result4 = arr7.join("-");

console.log(result4); // 인수로 받음 -> 안녕-나는-솔이야 라고 나옴

const user4 = "Mike,Jane,Tom,Tony"; // 그냥 나열 되어있음
const result5 = user4.split(",");

console.log(result5);

let str = "Hello, My name is Mike";
const result6 = str.split("");
console.log(result6);

// Array.isArray()  : array 인지 아닌지 확인 하는 법  -> js 에서 객체는 배열에 속하기 때문
let user5 = {
  name: "Mike",
  age: 30,
};

let userList1 = ["Mike", "Tom", "Jane"];

console.log(typeof user5); //object
console.log(typeof userList1); //object

console.log(Array.isArray(user5)); // false
console.log(Array.isArray(userList1)); //true
