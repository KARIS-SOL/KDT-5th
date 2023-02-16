const tc1 = 3;
const tc2 = 2;
const tc3 = 15;

function solution (num) {
  let answer = "";
  if (num % 2 === 0) {
    answer = "Even";
  } else {
    answer = "Odd";
  }
  return answer; 
}