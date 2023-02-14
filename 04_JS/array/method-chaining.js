// //.split: 문자를 인수 기준으로 쪼개서 배열로 변환

let helloTest = "H-e-l-l-o";
let helloTestArr = helloTest.split("-");  //'' 하이픈을 기준으로 쪼개주기 , 여기서 'l'로 쪼개주면 그문자는 날라가고 그외의 글자들만 리턴됨 
console.log(helloTestArr);  //순서대로 리턴해서 배열한다

let helloStr = helloTestArr.join("*");
console.log(helloStr); //특정글자들을 더해서 합쳐준다

// //.reverse: 배열의 순서를 뒤집어서 반환
// //.join : 배열을 인수 기준으로 문자로 병합해서 반환



let hello = "Hello~";
helloArr = hello.split(""); //특성 method 들이 retrun값을 남기면 그 method끼리 연결할수있다 : method chaining
console.log(helloArr);

let reverseHello = helloArr.reverse();
console.log(reverseHello);

let helloJoin = reverseHello.join("");
console.log(helloJoin);

// console.log(hello.split("").reverse().join(""));

let finalStr = helloTest.split("-").reverse().join("");
console.log(finalStr);


//주의할점 

const obj = {
  arr: ['a','b','c'],
  number: 10,
};

let testStr = obj.arr.reverse().join("");
console.log(testStr);

// let testStr = obj.number.reverse().join("");
// console.log(testStr);  // error ! 숫자에게는 method chaining 을 걸수 없음 

// let testStr = obj.str.reverse().join("");
// console.log(testStr); // undefined (불가능한 method) 에는 걸 수 없다 .

// let testStr = obj.str?.reverse().join("");
// console.log(testStr); // undefinded 처럼 error가 생길지 안생길지 긴가민가하면 "?" 를 쓴다 (백엔드에서 )