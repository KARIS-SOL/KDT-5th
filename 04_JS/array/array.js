// 배열 기본
const kdt = ["김성현", "윤제", "송민선", "송수빈"];

// kdt.push("이효석"); 배열 끝에 추가
// kdt.pop();  배열 끝 요소 제거 
// kdt.unshift("백진솔"); 맨앞에 추가 



// kdt.push("백진솔");
// console.log(kdt);

// kdt.pop("");
// console.log(kdt);

// console.log(kdt.unshift("이효석"));
// console.log(kdt);

// console.log(kdt.shift(""));
// console.log(kdt);

for (let i = 0; i < kdt.length; i++) {
  console.log(`KDT 1번째 열의 ${i + 1}번째 사람은 ${kdt[i]} 입니다`);
};