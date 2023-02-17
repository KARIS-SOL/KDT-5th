//배열함수, find / findIndex
    // find : 배열에 특정 값이 있는지 찾은후 변환
    // findIndex : 배열에 특정값이 있는지 찾은후 '위치'를 변환 

const fruits = ["Apple", "Banana", "Cherry"];

const result1 = fruits.find(item => {
    return /^A/.test(item);
})

const result2 = fruits.findIndex(item => {
  return /^A/.test(item);
})


console.log(result1);  //A가 들어간 Apple 을 찾은 후 변환
console.log(result2);    // Apple 의 위치가 [0] 이라서 답이 0  