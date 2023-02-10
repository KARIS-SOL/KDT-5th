function sayHello() {  //함수선언문
  console.log('헬로');
}

let sayHello = function () { //함수표현식
  console.log('헬로 ');
}

let sayHello = () => { //화살표함수 - 권장사항
  console.log('헬로');
}


//매개변수가 있는 함수

function sum(num1, num2) { //함수선언 : 호이스팅이 선언되서 이게 늦게 호출되도 상관이없다
  return num1 + num2;
};

let sum = function (num1, num2) { //함수표현
  return num1 + num2;
}

let sum = (num1, num2) => { //화살표 함수
  return num1 + num2;
}