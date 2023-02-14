// const boxEl = document.querySelector(".box");

// boxEl.classList.add("orange");

// const thirdboxEl = document.getElementById("third");
// thirdboxEl.classList.remove("box");

// console.log(boxEl.classList.contains("box")); //true
// console.log(thirdboxEl.classList.contains("box")); //false


//실습

const listEl = document.querySelector(".orange");
console.log(listEl);

const listEl2 = document.getElementById("skyblue");
console.log(listEl2);

let listE3 = document.querySelector("ul>li:nth-child(2)")
listE3.classList.add("orange");
console.log(listE3);



const removeOrange = document.querySelector(".orange");
if (removeOrange.classList.contains("orange")) {
  removeOrange.classList.remove("orange")
} 

console.log(removeOrange);




// if (listEl.classList.contains("orange")) {
//   console.log('false');
// } else {
//   console.log('');
// }
