// 정수 배열 numbers가 매개변수로 주어집니다. numbers의 각 원소에 두배한 원소를 가진 배열을 return하도록 solution 함수를 완성해주세요.

// -10,000 ≤ numbers의 원소 ≤ 10,000
// 1 ≤ numbers의 길이 ≤ 1,000


// 입출력 예 #1
// [1, 2, 3, 4, 5]의 각 원소에 두배를 한 배열 [2, 4, 6, 8, 10]을 return합니다.

// 입출력 예 #2
// [1, 2, 100, -99, 1, 2, 3]의 각 원소에 두배를 한 배열 [2, 4, 200, -198, 2, 4, 6]을 return합니다.

function solution(numbers) {
  var answer = [];
  
  for(let i = 0; i < numbers.length; i++) {
      answer.push(numbers[i] * 2);
  }
  
  return answer;
}


let isAdult = true;
let isVip = false;
let isDrunken = true;
let hasMoney = true;

if (((is Adult && isVip) && !isDrunken)|| hasMoney){
  console.log("통과");
} else {{
  console.log("돌아가");
}}
