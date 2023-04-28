// Object.assign() : 객체복제
const user = {
  name: 'Mike',
  age : 30,
}

const newUser = Object.assign({gender:'male'},user);
//성별값만 있는 객체가 user의 객체와 합쳐지므로 
// {
//   gender:'male',
//   name:'Mike',
//   age:30,
// }

// const user = {
//   name : 'Mike',
// }
// const info1 = {
//   age:30,
// }
// const info2 = {
//   gender : 'male', 
// }

Object.assign(user, info1, info2)

// Object.keys() : 키 배열반환
const user1 = {
  name: 'Mike',
  age : 30,
  gender : 'male'
}

const result = Object.keys(user1);
console.log(result);
// ['name', 'age', 'gender'] 


// Object.values() : 값 배열 반환
const user2 = {
  name: 'Mike',
  age : 30,
  gender : 'male'
}
const result1 = Object.values(user2);
console.log(result1);

// ['Mike','30', 'male']


// Object.entries() : 키/값 전부 배열 반환
const user3 = {
  name: 'Mike',
  age : 30,
  gender : 'male'
}
const result2 = Object.entries(user3);
console.log(result2);

// ['name', 'Mike'],
// ['age', 30],
// ['gender','male']

// Object.fromEntries() : 키/값 배열을 -> 객체로
const arr = 
[
  ['name', 'Mike'],
  ['age', 30],
  ['gender','male']
];

const result3 =Object.fromEntries(arr); 
console.log(result3);

// {
//   name: 'Mike',
//   age : 30,
//   gender : 'male'
// }

