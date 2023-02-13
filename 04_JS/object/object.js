// //생성
// const tetz = {
//   name: "이효석",
//   age: 39,
// };

// // 접근
// console.log(tetz.name);
// console.log(tetz['age']);

// // 추가
// tetz.gender = "M";
// console.log(tetz);

// tetz["head"] = "big";
// console.log(tetz);

// // 삭제
// delete tetz["head"];
// console.log(tetz);

// 실습
const pororo = {
  name: "뽀로로",
  age: 7,
  height: 110,
  weight: 30,
  // running() {
  //   console.log("뽀로로가 뜁니다");
  // },
  say: function () { //say : method : 객체 프로퍼티로 할당 된 함수
    console.log("뽀로로는 귀엽습니다");
  }
};

// pororo.running();
pororo.say(); //뽀로로는 귀엽습니다

// for(let key in pororo) {
//   console.log(`key 는 ${key}, key 안의 값은 ${pororo[key]}`);
// }

// console.log(pororo.hairColor); //property checked 'undefined' cuz this data is not in there.
// console.log('name' in pororo); // true
// console.log('height' in pororo); // true

// console.log(pororo.name);
// console.log(pororo['age']);

// pororo.gender = "M";
// pororo['height'] = "1m";

// delete pororo.gender;

// console.log(pororo);