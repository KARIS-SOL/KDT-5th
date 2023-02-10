// function helloFunc() {
//   console.log('Hello');
// }


// function returnFunc () {
//   console.log('Return');
//   return 'return';
// }
// let str = helloFunc()
// console.log(str);

// let noNamefunc = function () {
//   console.log('Noname');
//   return 'no name';
// }

// let str2 = noNamefunc(str2);
// console.log(str2);


// function sayHello(name = "friend") { // 여기서 friend 는 undefined 되는것을 막기위해서 임시로 넣어놓는것  
//   console.log(`Hello~ ${name}`);
// }

// sayHello(Mike);
// sayHello(); //호출하는것  - 인자, 실제로 전달 되는 값


// function sum(num1, num2) {
//   return num1 + num2;  // 10과 20을 더한값이 return 이되는것
// }

// console.log(sum(10,20));




// function square(num) {
//   return num ** 2;
// }

// console.log(square(37));



function triangleArea(num1, num2) { //함수선언문
  return (num1 * num2) / 2;

}

let triangleArea = (num1, num2) => { //화살표 함수
  return (num1 * num2) / 2;
}




let circleArea = function (radius = 3) {
  return 3.14 * radius * radius;
}

let circleArea = (radius = 3) => {

}




// a^2 + b^2 = c^2 : c= root(a^2 + b^2)
function pytha(num3, num4) {
  return Math.sqrt(num3**2 + num4**2);
}

let pytha = (num3, num4) => {
  return Math.sqrt(num3**2 + num4**2);
}



console.log(triangleArea(2, 5));
console.log(circleArea());
console.log(pytha(3, 4));
