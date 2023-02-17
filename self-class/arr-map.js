// 배열, arr.map : 기존 배열에 특정작업을 한 배열을 리턴하는 메소드
// arr.map(function(배열의 값 (인덱스 , 원본배열) {});

const fruits = ["사과", "파인애플", "수박", "포도", "오렌지"];

const fruitsObjArr = fruits.map((item, index, origin) => {
  return {
    id: index,
    name: item,
  }
});

console.log(fruits);
console.log(fruitsObjArr);

// const nums = [3, 6, 9, 12, 15, 18, 21];
// const divideArr = nums.map(function (item, index) {
//   return item / 3;
// });

// const divideArrArrow = nums.map((item, index) => item / 3);

// console.log(divideArr);

// const nums2 = [1, 2, 3, 4, 5, 6];
// const multipleNums2 = nums2.map((item) => {
//   let test = "arr";
//   return item * 4;
// })

// console.log(multipleNums2);

// const numbers2 = [1, 2, 3, 4, 5, 6];
// const filterArr = numbers2.filter((item) => item > 3);

// console.log(filterArr);

// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
// const resultArr = words.filter((item) => item.length > 6);

// console.log(resultArr);

// const numbers4 = [1, 2, 3, 4, 5, 6];

// console.log(numbers4.includes(3));
// console.log(numbers4.includes(7));
