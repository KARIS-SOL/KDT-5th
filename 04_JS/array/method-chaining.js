//.split: 문자를 인수 기준으로 쪼개서 배열로 변환
// let helloTest = "H-e-l-l-o";
// let helloTestArr = helloTest.split("-");
// console.log(helloTestArr);


//.reverse: 배열의 순서를 뒤집어서 반환
//.join : 배열을 인수 기준으로 문자로 병합해서 반환

let hello = "Hello~";
helloArr = hello.split("");
console.log(helloArr);

let reverseHello = helloArr.reverse();
console.log(reverseHello);

let helloJoin = reverseHello.join("");
console.log(helloJoin);

console.log(hello.split("").reverse().join(""));

