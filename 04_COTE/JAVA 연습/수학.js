// toString() -> 숫자를 문자로 바꿔줌

// 10진수 -> 2진수 / 16진수 

// let num = 10;

// num.toString(); // "10"
// num.toString(2); // '1010'

// let num2 = 255;

// num2.toString(16); // 'ff'


//Math

Math.PI;
// 3.141592653589793

let num1 = 5.1;
let num2 = 5.7;


// Math.ceil() : 올림
Math.ceil(num1); //6
Math.ceil(num2); //6


// Math.floor() : 내림
Math.floor(num1); // 5
Math.floor(num2); // 

// Math.round() : 반올림 
Math.round(num1) // 5 
Math.round(num2) // 6

let userRate = 30.1234;
// 소수점 둘째자리까지 표현해주세요 (셋째자리에서 반올림)
Math.round(userRate * 100)/100 //30.12
//혹은
userRate.toFixed(2); // "30.12"
// but, toFixed 는 문자열을 반환한다  그러므로 
Number(userRate.toFixed(2)); // 숫자 30.12


// isNaN()   = NaN 인지 판별해주는 유일한 방법
let x = Number('x'); //NaN

x == NaN // false
x === NaN // false
NaN == NaN // false  -> 자기자신도 false 로 받아들임

isNaN(x) // true
isNaN(3) // false


// parseInt() -> Number 와 다른점은 문자열이 포함되어있어도 숫자로 반환
let margin = '10px';

parseInt(margin); // 10
Number(margin); //NaN 

// but, 숫자로 시작하지 않으면
let redColor = 'f3';
parseInt(redColor); // NaN 으로 반환 됨 


// parseFloat(); -> parseInt 와 같지만 소수점까지 반환
let padding = '18.5%'
parseInt(padding); //18
parseFloat(padding); // 18.5

// Math.random()  -> 0 -1 사이 무작위 숫자 생성
// 만약, 1-100 사이 임의의 숫자를 뽑고 싶다면?
Math.floor(Math.random()*100) +1   // 100을 곱한후 floor로 소수점 이하를 버린후 0.0001 이 나올 수 있으므로 +1 을해줌줌
