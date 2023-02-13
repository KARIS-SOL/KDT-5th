//while문 기본

let index = 0;

while (index < 10) {
  console.log(`인사를 ${index +1}번째 드립니다 👌`);
  index++;
} 

let index2 = 0;
while (true/*무한히도는 상황*/) {
  console.log(`인사를 ${index2 + 1} 번째 드립니다! `);
  index2++;
  if (index2 > 10) {
    break;
  }
} 

// // do-while 비교
// let index1 = 0;
// do {
//   console.log(`인덱스는 ${index1} 입니다`);
//   index1++;
// } while (index > 10)

// let index2 = 0;
// while (index2 > 10) {
//   console.log(`while 인덱스는 ${index2} 입니다`);
//   index2++;
// }



// let i = 2;
// while (true) {
//   console.log(`------- ${i} 단`);
//   i++;
//   if (index > 10) {
//     break;
//   }
// } 




let i = 2;                      
let j = 1;			
while (i < 10){             
  while (j <10){             
   console.log(`${i} * ${j} = ${i*j}`);  
    j++;
  }
  if (index > 9) {
    break;
  }
          
}