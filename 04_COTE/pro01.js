function solution(num1, num2) {
  let answer = "";
  if (num1 === num2) {
    answer = 1; 
  } else {
    answer = -1;
  }
  return answer;
}


0 <= i <= 10000
0 <= j <= 10000

i === j = 1
i !=== j = -1



console.log(solution);


// Other 

function solution(num1, num2) {
  let answer = num1 === num2 ? 1 : -1;
  return answer;
}
