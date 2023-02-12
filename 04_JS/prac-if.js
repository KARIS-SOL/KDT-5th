let isAdult = true;
let isVip = false;
let isDrunken = true;
let money = true;

if (isAdult && isVip  && isDrunken || money) {
  console.log('통과');
} else {
  console.log('돌아가');
} 


// const 백진솔 = {
//   성인인가: true,
//   VIP: false,
//   취했는가: true,
//   돈: false,
// };

// if (((백진솔.성인인가 || 백진솔.VIP) && 백진솔.취했는가 || 백진솔.돈)) {
//   console.log('통과');
// } else {
//   console.log('돌아가');
// }


// if (백진솔.돈 || (백진솔.취했는가 && (백진솔.성인인가 || 백진솔.VIP))) {
//   console.log('통과');
// } else {
//   console.log('돌아가');
// }