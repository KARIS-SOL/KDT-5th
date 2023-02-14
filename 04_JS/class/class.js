// 생성자 함수 버전

// strict mode 가 적용되지 않기 때문에, 선언전에 사용이 되어도 자동으로 호이스팅(hoisting)이 일어나서 문제가 없다.
const hyundai = new ConstructorCar('hyundai', 'blue'); //대문자시작! 

console.log(hyundai);
hyundai.drive();

function ConstructorCar(brand, color) {
  this.brand = brand;
  this.color = color;
  this.drive = () => { //화살표함수
    console.log(`${this.brand}의 ${this.color}색 자동차가 주행 중입니다!`);
  }
}

const hyundai = new ConstructorCar('hyundai', 'blue'); //대문자시작! 

console.log(hyundai);
hyundai.drive();




// 클래스 버전 (is designed to make things easier to read or to express)
class ClassCar {
  constructor(brand, color) {
    this.brand = brand;
    this.color = color;
  }
  drive() {
    console.log(`${this.brand}의 ${this.color}색 자동차가 주행 중입니다!`);
  }
}

const porsche = new ClassCar('porsche', 'black');

console.log(porsche);
porsche.drive();