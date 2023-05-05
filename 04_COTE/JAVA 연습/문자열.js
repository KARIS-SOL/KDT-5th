//여러줄 표현할때
let desc = `오늘은 말고 화창한
날씨가 계속 되겠습니다`; //=> 줄바꿈이 가능

let desc1 = "오늘은 맑고 화창한\n 날씨가 계속되겠습니다"; //줄바꿈할때 '\n 을사용하는 불편함'

// length: 문자열 길이 -> ID 나 비번 길이 설정
let desc2 = "안녕하세요.";
desc2.length; // 6
// 특정 위치에 접근 , but 배열과 다르게 한글자만 변경하는건 안됨
desc2[2]; // '하'

desc2[4] = "용";
console.log(desc2); //안녕하세요 로 찍힘 아무변화 없음.

//영어 -   toUpperCase() / toLowerCase()
let eng = "Hi guys. Nice to meet you.";
eng.toUpperCase();
("HI GUYS. NICE TO MEET YOU.");
eng.toLowerCase();
("hi guys. nice to meet you.");

//str.indexOf(text) -> 문자를 인수로 받아서 몇번째에 위치하는 지 알려줌
desc.indexOf("to"); // 14
desc.indexOf("man"); // 찾는 문자가 없으면 -1 을 반환한다
if (desc.indexOf("Hi")) {
  console.log("Hi 가 포함된 문장입니다");
} // 여기서 Hi 로 시작하는건 0 번째 인거고 if 문에선 false 이기 때문에 콘솔이 찍히지 않음
// 그러므로
if (desc.indexOf("Hi") > -1) {
  console.log("Hi 가 포함된 문장입니다");
} // 콘솔에 찍힘

//str.slice(n,m)  -> n부터 m 까지 원하는 문자열만 뽑아냄 but, m 이없으면 문자열 끝까지, 양수면 그 숫자까지 (포함하지 않음), 음수면 끝에서부터 센다
let desc3 = "abcdefg";

desc3.slice(2); // "cdefg"
desc3.slice(0, 5); // "abcde"
desc3.slice(2, -2); // "cde"

//str.substring(n,m)  -> slice 와 비슷하지만 n,m 위치가 바뀌어도 반환됨. n 과 m 사이 라고 생각. 음수는 0 으로 인식
desc3.substring(2, 5);
desc3.substring(5, 2); //둘다 "cde" 반환

//str.substr(n, m)  -> n 부터 시작해서 m 개를 가져옴
desc3.substr(2, 4); // "cdef"
desc3.substr(-4, 2); // "de"

//str.trim() -> 앞뒤 공백 제거
let desc4 = "  coding       ";
desc4.trim(); // "coding"

//str.repeat(n) -> 문자열 n번 반복
let hello = "hello!";
hello.repeat(3); // "hello!hello!hello!"

// 문자열 비교 -> 알파벳은 A < Z ,  A < a
1 < 3; // true
"a" < "c"; // true
"a".codePointAt(0); // 97
String.fromCodePoint(97); // "a"

//실전예제
let list = [
  "01. 들어가며",
  "02. JS의 역사",
  "03. 자료형",
  "04. 함수",
  "05. 배열",
];

let newList = [];

for (let i = 0; i < list.length; i++) {
  newList.push(list[i].slice(4)); //newList에 넣어준다 뭐를? list[i] 전체문자열 뜻하고, 거기서 4번째부터 끝까지 자르는것을 push 로 넣어주는것
}
console.log(newList);

// ["들어가며", "JS의 역사", "자료형", "함수", "배열"]

// 금칙어 : 콜라
// if 일때 -1 (true)과 0 (false) 의 차이를 알아야 실수를 안함

function hasCola(str) {
  if (str.indexOf("콜라") > 1) {
    console.log("금칙어가 있습니다");
  } else {
    console.log("통과");
  }
}

hasCola("와 사이다가 짱이야!"); // -1
hasCola("무슨소리, 콜라가 최고");
hasCola("콜라"); // 0

// 인덱스로 판단안하고 그냥 문자가 있는지 없는지만 판단할때는 "includes" 가 편하다

// 금칙어 : 콜라
// includes
// 문자가 있으면 true
// 문자가 없으면 false 반환

function hasCola(str) {
  if (str.includes("콜라")) {
    console.log("금칙어가 있습니다");
  } else {
    console.log("통과");
  }
}

hasCola("와 사이다가 짱이야!"); // -1
hasCola("무슨소리, 콜라가 최고");
hasCola("콜라"); // 0
