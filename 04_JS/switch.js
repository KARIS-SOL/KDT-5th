/*let gender = 'Z';

switch (gender) {
  case 'F':
    console.log('여성입니다');
    break;
  case 'M':
    console.log('남성입니다');
    break
  default: //if 문의 else 라고 생각하면됨   
    console.log('외계인 입니다');
    break
} */

//get day

//console.log(new Date().getDay());

let day = new Date().getDay();

if (day === 0) {
  alert("일");
} 
else if (day === 1) {
  alert("월");
} 
else if (day === 2) {
  alert("화");
} 
else if (day === 3) {
  alert("수");
} 
else if (day === 4) {
  alert("목");
} 
else if (day === 5) {
  alert("금");
} 
else (day === 6) {
  alert("토");
} 

