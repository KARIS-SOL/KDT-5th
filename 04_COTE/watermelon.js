const tc1 = 3; // 수박수
const tc2 = 4; // 수박수박

function solution(n) {
  let answer = '';

  for (let i = 1; i <= n; i++) {
    if (i % 2 === 1) {
      answer += "수";
    } else {
      answer += "박";
    }
  }

  // 짧은 풀이 1
  // answer = n % 2 === 1 ? str.repeat(Math.floor(n / 2)) + "수" : str.repeat(Math.floor(n / 2));

  // 짧은 풀이 2
  // const str = "수박";
  // const longStr = str.repeat(10000);
  // answer = longStr.slice(0, n);
  return answer;
}

console.log(solution(tc1));
console.log(solution(tc2));
console.log(solution(100));