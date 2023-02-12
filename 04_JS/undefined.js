//값이 할당되지않은 상태를 표기, just it case, it could be a mistake so needed to verify with error or not.
let undef;
let obj = {
  abc: 123,
}

console.log(undef);  // undefined
console.log(obj.abc);  //123
console.log(obj.efg);  //undefined



// let test = 0
// test = undefined;

//실수로 정의되지못했어요 