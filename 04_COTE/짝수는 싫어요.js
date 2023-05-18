// 정수 n이 매개변수로 주어질 때, n 이하의 홀수가 오름차순으로 담긴 배열을 return하도록 solution 함수를 완성해주세요.

// 입출력 #1
// 10 이하의 홀수가 담긴 배열 [1, 3, 5, 7, 9]를 return합니다.

// 입출력 #2
// 15 이하의 홀수가 담긴 배열 [1, 3, 5, 7, 9, 11, 13, 15]를 return합니다.

function solution(num) {
  let answer = [];

  for (let i = 1; i <= num; i += 2) {
    answer.push(i);
  }

  return answer;
}
