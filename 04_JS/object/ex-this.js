// pororo 객체에 뽀로로의 이름을 출력하는 method 추가하기
// 특정 객체의 height 를 출력하는 showHeight() 함수를 작성하고 pororo 객체의 메소드로 추가  pororo 의 키를 출력하기




const pororo = {
  name: "뽀로로",
  height: 110,
  showHeight,
};


pororo.showName = function () {
  console.log(`해당 객체의 이름은 ${this.name} 입니다`); //뽀로로의 이름을 출력하는 method
}

function showHeight() { //특정 객체의 height를 출력하는 함수
  console.log(`해당 객체의 키는 ${this.height} 입니다`); //뽀로로의 height를 출력하는 method 
}

pororo.showHeight();
pororo.showName();


