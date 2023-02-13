// for (let i = 0; i < 20; i++) {
//   if (i % 2 === 0 ) {
//     continue;
//   } else {
//     console.log(`${i}번 입니다 `);
//   }
// }


// for (let i = 0; i < 20; i++) {
//   if (i % 2 === 0 ) continue;
//   console.log(`${i}번 입니다 `);}



let sum = 0;

for (let i = 1; i < 1001; i++ ) {
  if (i % 2 === 1) continue;
  sum +=i;
}
console.log(sum);
