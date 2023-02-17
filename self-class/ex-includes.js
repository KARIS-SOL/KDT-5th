let fruits1 = ["사과", "딸기", "파인애플", "수박", "참외", "오렌지", "자두", "망고" ];
let fruits2 = ["사과", "파인애플", "수박", "참외", "오렌지", "망고" ];

// 두배열에서 동일한 요소만을 가지는 배열 sameArr 만들기 
// 두배열에서 서로 다른 요소만을 가지는 배열 diffArr 만들기 

   // arr.map이용 :  arr.map(function(배열의 값, 인덱스, 원본배열){});
   // push 는 arr.push('d'); // 배열의 끝에 요소를 추가

const sameArr2 = [];
const diffArr2 = [];

// 화살표 함수로 만들기 
fruits1.map((item) => {
  if (fruits2.includes(item)) {
    sameArr2.push(item);
  } else {
    diffArr2.push(item);
  }
})

console.log(sameArr2);   // [ '사과', '파인애플', '수박', '참외', '오렌지', '망고' ]
console.log(diffArr2);    //[ '딸기', '자두' ]

  // arr.filter 이용 : arr.filter(function(매개변수){return 조건}); 


const sameArr = fruits1.map(item => fruits2.includes(item));  
const diffArr = fruits1.filter(item => !fruits2.includes(item)); // not 을 사용해서 '포함하지 않는' 으로 이용 ! 

console.log(sameArr); // [ '사과', '파인애플', '수박', '참외', '오렌지', '망고' ]
console.log(diffArr); // [ '딸기', '자두' ]