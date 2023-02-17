const tc1 = 10;
const tc2 = 15;

function solution(num) {
  let answer = [];

  for (let i = 1; i <= num; i++) {
    if (i % 2 === 1) answer.push(i);
  }

   
  return answer;
}


console.log(solution(tc1)); 
console.log(solution(tc2)); 



// function solution(num) {
//   let answer = [];

//   for (let i = 1; i <= num; i+= 2) {
//     answer.push(i);
//   }


//   return answer;
// }
