let boxEl = document.querySelector(".box"); //css 선택자 문법과 동일함, box가 두개있을때 첫번째 div 요소를 가져온다 
// let boxEl2 = document.querySelector("#box2"); //css 선택자 문법과 동일함
let listEl = document.querySelector("ul>li:nth-child(2)");

console.log(boxEl);
// console.log(boxEl2);
console.log(listEl);

//getEkementByid

let thirdboxEl = document.getElementById("third");
console.log(thirdboxEl);